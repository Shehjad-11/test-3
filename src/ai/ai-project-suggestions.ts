// This file implements the Genkit flow for generating project suggestions based on a developer's profile and past applications.

'use server';

/**
 * @fileOverview An AI agent that suggests projects to developers based on their skills and experience.
 *
 * - suggestProjects - A function that takes a developer profile and returns a list of suggested projects.
 * - SuggestProjectsInput - The input type for the suggestProjects function.
 * - SuggestProjectsOutput - The return type for the suggestProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectsInputSchema = z.object({
  developerProfile: z.object({
    skills: z.array(z.string()).describe('List of developer skills.'),
    experienceLevel: z.string().describe('Developer experience level (e.g., Junior, Mid-Level, Senior).'),
    portfolioLinks: z.array(z.string()).describe('Links to developer portfolio.'),
    githubLink: z.string().describe('Link to developer GitHub profile.'),
    bio: z.string().describe('Short biography of the developer.'),
    pastApplications: z.array(z.string()).describe('List of project names the developer has applied to in the past.'),
  }).describe('The developer profile.'),
  availableProjects: z.array(z.object({
    title: z.string(),
    description: z.string(),
    requiredSkills: z.array(z.string()),
  })).describe('List of available projects.'),
});
export type SuggestProjectsInput = z.infer<typeof SuggestProjectsInputSchema>;

const SuggestProjectsOutputSchema = z.object({
  suggestedProjects: z.array(z.string()).describe('List of suggested project titles.'),
});
export type SuggestProjectsOutput = z.infer<typeof SuggestProjectsOutputSchema>;

export async function suggestProjects(input: SuggestProjectsInput): Promise<SuggestProjectsOutput> {
  return suggestProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectsPrompt',
  input: {schema: SuggestProjectsInputSchema},
  output: {schema: SuggestProjectsOutputSchema},
  prompt: `You are an AI project suggestion agent.

  Given the following developer profile and a list of available projects, suggest projects that the developer is well-suited for.
  Consider the developer's skills, experience level, past applications, and project requirements when making your suggestions.

  Developer Profile:
  Skills: {{developerProfile.skills}}
  Experience Level: {{developerProfile.experienceLevel}}
  Portfolio Links: {{developerProfile.portfolioLinks}}
  GitHub Link: {{developerProfile.githubLink}}
  Bio: {{developerProfile.bio}}
  Past Applications: {{developerProfile.pastApplications}}

  Available Projects:
  {{#each availableProjects}}
  Title: {{this.title}}
  Description: {{this.description}}
  Required Skills: {{this.requiredSkills}}
  ---
  {{/each}}

  Suggested Projects (list only the project titles):
  `,
});

const suggestProjectsFlow = ai.defineFlow(
  {
    name: 'suggestProjectsFlow',
    inputSchema: SuggestProjectsInputSchema,
    outputSchema: SuggestProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
