'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Bot, User, Clipboard, Wand2 } from 'lucide-react';
import { getSkillMatch } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { RadialProgress } from '@/components/radial-progress';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from './ui/skeleton';

const initialState = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? 'Analyzing...' : <> <Wand2 className="mr-2 h-4 w-4" /> Analyze Fit </>}
    </Button>
  );
}

export default function AiSkillMatcher() {
  const [state, formAction] = useActionState(getSkillMatch, initialState);
  const { pending } = useFormStatus();

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-4 md:p-8">
        <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <div>
              <label htmlFor="developerSkills" className="flex items-center text-lg font-semibold font-headline mb-2">
                <User className="mr-2 h-5 w-5 text-primary" />
                Your Skills
              </label>
              <Textarea
                id="developerSkills"
                name="developerSkills"
                placeholder="e.g., React, TypeScript, Next.js, Node.js, Figma, UI/UX Design..."
                rows={6}
                required
                className="resize-none"
              />
              {state?.errors?.developerSkills && <p className="text-sm text-destructive mt-1">{state.errors.developerSkills[0]}</p>}
            </div>
            <div>
              <label htmlFor="projectRequirements" className="flex items-center text-lg font-semibold font-headline mb-2">
                <Clipboard className="mr-2 h-5 w-5 text-accent" />
                Project Requirements
              </label>
              <Textarea
                id="projectRequirements"
                name="projectRequirements"
                placeholder="e.g., Seeking a frontend expert with strong experience in building scalable React applications..."
                rows={6}
                required
                className="resize-none"
              />
               {state?.errors?.projectRequirements && <p className="text-sm text-destructive mt-1">{state.errors.projectRequirements[0]}</p>}
            </div>
            <SubmitButton />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg min-h-[300px]">
            {pending && (
              <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-32 w-32 rounded-full" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-56" />
              </div>
            )}
            {!pending && state?.data && (
              <div className="text-center flex flex-col items-center">
                <p className="font-headline text-lg font-semibold mb-4">Fit Score</p>
                <RadialProgress value={state.data.fitScore * 100} />
                <div className="mt-6 text-left">
                  <Alert>
                    <Bot className="h-4 w-4" />
                    <AlertTitle className="font-headline">AI Analysis</AlertTitle>
                    <AlertDescription>{state.data.reasoning}</AlertDescription>
                  </Alert>
                </div>
              </div>
            )}
             {!pending && !state?.data && !state?.error && (
                <div className="text-center text-muted-foreground p-8">
                    <Wand2 className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-headline text-lg font-semibold">Ready for Analysis</h3>
                    <p className="text-sm">Enter your skills and project details to see the magic happen.</p>
                </div>
             )}
             {!pending && state?.error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                </Alert>
             )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
