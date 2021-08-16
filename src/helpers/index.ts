export const getRandomItems = (array: string[], numberOfItems: number) => {
  const nums = new Set();
  if (array.length < numberOfItems) {
    return [];
  }
  while (nums.size < numberOfItems) {
    nums.add(Math.floor(Math.random() * array.length));
  }

  return [...nums] as string[];
};
