export function merge(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}
