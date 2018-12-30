export const range = (max: number): any[] => Array(max).fill(null)
export const randomIndex = (array: any[]): number => Math.floor(Math.random() * array.length)
export const randomItem = (array: any[]): any => array[randomIndex(array)]