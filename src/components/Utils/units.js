export const cToF = (c) => (c * 9) / 5 + 32;
export const fToC = (f) => ((f - 32) * 5) / 9;
export function convertTemperature(value, to) {
    return to === 'F' ? cToF(value) : value;
}
