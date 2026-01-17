// @/app/actions.ts
'use server';

import { matchSkills, type MatchSkillsInput } from '@/ai/flows/ai-skill-matching';
import { z } from 'zod';

const SkillMatchSchema = z.object({
  developerSkills: z.string().min(10, "Developer skills must be at least 10 characters long."),
  projectRequirements: z.string().min(10, "Project requirements must be at least 10 characters long."),
});

type FormState = {
  data?: {
    fitScore: number;
    reasoning: string;
  } | null;
  error?: string;
  errors?: {
    developerSkills?: string[];
    projectRequirements?: string[];
  }
} | null;

export async function getSkillMatch(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = SkillMatchSchema.safeParse({
    developerSkills: formData.get('developerSkills'),
    projectRequirements: formData.get('projectRequirements'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    const input: MatchSkillsInput = {
      developerSkills: validatedFields.data.developerSkills,
      projectRequirements: validatedFields.data.projectRequirements,
    };

    const result = await matchSkills(input);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred while matching skills. Please try again.' };
  }
}
