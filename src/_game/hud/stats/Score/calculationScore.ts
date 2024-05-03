// Constants for score calculation (you can adjust these according to your game's balance)
const DISTANCE_MULTIPLIER = 1; // Adjust according to how heavily you want to weigh distance
const DURATION_MULTIPLIER = 0.5; // Adjust according to how heavily you want to weigh duration
const CRASH_PENALTY = 5; // Penalty for each crash
const COLLECTED_POINTS_MULTIPLIER = 0.2; // Adjust according to the importance of collected points

// Function to calculate the score
export function calculateScore(
  distance,
  duration,
  totalCrashes,
  collectedPoints
) {
  // Initialize score with distance and duration
  let score =
    (distance * DISTANCE_MULTIPLIER) / (duration * DURATION_MULTIPLIER);

  // Apply penalty for crashes
  score -= totalCrashes * CRASH_PENALTY;

  // Apply bonus for collected points
  score += collectedPoints * COLLECTED_POINTS_MULTIPLIER;

  // Ensure score is non-negative
  score = Math.max(score, 0);

  return Math.floor(score); // Return integer score
}

// Example usage:
const distanceTraveled = 1200; // Example distance traveled in game units
const durationInSeconds = 16; // Example duration of gameplay in seconds
const crashes = 0; // Example number of crashes
const collectedPoints = 0; // Example number of points collected

const score = calculateScore(
  distanceTraveled,
  durationInSeconds,
  crashes,
  collectedPoints
);
console.log("Score:", score);
