// @function calculateProbability
// @description Calculates the probability of an event occurring.
// @param {number} favorableOutcomes - The number of favorable outcomes.
// @param {number} totalOutcomes - The total number of possible outcomes.
// @returns {number} - The probability as a decimal value.

const calculateProbability = (favorableOutcomes, totalOutcomes) => {
    // Check if the inputs are valid
    if (typeof favorableOutcomes !== 'number' || typeof totalOutcomes !== 'number') {
      throw new Error('Both favorableOutcomes and totalOutcomes must be numbers.');
    }
  
    if (favorableOutcomes < 0 || totalOutcomes < 0) {
      throw new Error('Both favorableOutcomes and totalOutcomes must be non-negative numbers.');
    }
  
    // Calculate the probability
    const probability = favorableOutcomes / totalOutcomes;
    
    // Ensure the result is a valid probability (between 0 and 1)
    if (probability < 0 || probability > 1) {
      throw new Error('Probability must be between 0 and 1.');
    }
  
    return probability;
  };
  
  export default calculateProbability;