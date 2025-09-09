export const cToF = (c: number) => (c * 9) / 5 + 32;
export const fToC = (f: number) => ((f - 32) * 5) / 9;

export function convertTemperature(value: number, to: 'C' | 'F'): number {
  return to === 'F' ? cToF(value) : value;
}