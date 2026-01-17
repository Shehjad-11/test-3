'use server';

/**
 * @fileOverview Matches developer skills with project requirements using AI.
 *
 * - matchSkills - A function that matches developer skills with project requirements.
 * - MatchSkillsInput - The input type for the matchSkills function.
 * - MatchSkillsOutput - The return type for the matchSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchSkillsInputSchema = z.object({
  developerSkills: z
    .string()
    .describe('The skills of the developer applying to the project.'),
  projectRequirements: z
    .string()
    .describe('The skill requirements listed in the project.'),
});
export type MatchSkillsInput = z.infer<typeof MatchSkillsInputSchema>;

const MatchSkillsOutputSchema = z.object({
  fitScore: z
    .number()
    .describe(
      'A numerical score (0-1) indicating how well the developer skills align with the project requirements. 1 indicates a perfect fit, 0 indicates no fit.'
    ),
  reasoning: z
    .string()
    .describe(
      'A short explanation of why the score was given, highlighting the strengths and weaknesses of the match.'
    ),
});
export type MatchSkillsOutput = z.infer<typeof MatchSkillsOutputSchema>;

export async function matchSkills(input: MatchSkillsInput): Promise<MatchSkillsOutput> {
  return matchSkillsFlow(input);
}

const matchSkillsPrompt = ai.definePrompt({
  name: 'matchSkillsPrompt',
  input: {schema: MatchSkillsInputSchema},
  output: {schema: MatchSkillsOutputSchema},
  prompt: `You are an AI assistant specialized in evaluating the fit between developer skills and project requirements.

Given the following developer skills and project requirements, assess how well they align.
Provide a numerical score between 0 and 1 (inclusive) indicating the fit, where 1 is a perfect match and 0 is no match at all. Also provide a short explanation for the score.

Developer Skills: {{{developerSkills}}}
Project Requirements: {{{projectRequirements}}}

Ensure that the fitScore reflects an accurate and unbiased assessment of the alignment between the skills and requirements.

Output should be a JSON object with "fitScore" (number between 0 and 1) and "reasoning" (string) fields.
`,
});

const matchSkillsFlow = ai.defineFlow(
  {
    name: 'matchSkillsFlow',
    inputSchema: MatchSkillsInputSchema,
    outputSchema: MatchSkillsOutputSchema,
  },
  async input => {
    const {output} = await matchSkillsPrompt(input);
    return output!;
  }
);
