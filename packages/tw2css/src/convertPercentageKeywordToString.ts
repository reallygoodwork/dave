export const convertPercentageKeywordToString = (scale: string): string => {
  // Validate input: Check if it's a string and not empty
  if (!scale.trim()) {
    throw new Error("Invalid input: scale must be a non-empty string.");
  }

  const values = scale.split("/").map(Number);

  // Validate that all values are valid numbers
  if (values.some(isNaN)) {
    throw new Error("Invalid input: scale must contain numeric values.");
  }

  // Ensure there are at least two values to calculate the percentage
  if (values.length < 2) {
    throw new Error("Invalid input: scale must contain at least two numbers.");
  }

  // Perform the calculation with the first two numbers and return the result
  const [numerator, denominator] = values;

  if (numerator === undefined || denominator === undefined) {
    throw new Error(
      "Invalid input: both numerator and denominator must be defined.",
    );
  }

  // Handle division by zero or invalid denominator
  if (denominator === 0) {
    throw new Error("Invalid input: denominator cannot be zero.");
  }

  const amount = (numerator / denominator) * 100;
  if (isNaN(amount)) {
    throw new Error("Invalid input: scale must contain valid numbers.");
  }

  if (amount % 1 !== 0) {
    return amount.toFixed(5) + "%";
  } else {
    return amount + "%";
  }
};
