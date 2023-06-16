export default function cl(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}
