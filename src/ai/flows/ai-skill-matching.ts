// Mock AI functionality for faster builds
export async function matchSkills(input: any): Promise<any> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock response
  return {
    fitScore: 0.85 + Math.random() * 0.15, // Random score between 85-100%
    reasoning: "Based on your skills and the project requirements, you're a great match! Your experience with the required technologies aligns well with what the client is looking for."
  };
}
