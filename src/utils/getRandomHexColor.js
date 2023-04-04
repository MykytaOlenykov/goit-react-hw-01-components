export function getRandomHexColor() {
  return `#0f${Math.floor(Math.random() * 16777215)
    .toString(16)
    .slice(0, 4)}`;
}
