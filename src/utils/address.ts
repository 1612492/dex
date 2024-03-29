export function shorten(address: string, startLength = 5, endLength = 5) {
  if (!address) return;

  if (address.length < startLength + endLength) return address;

  const startStr = address.substring(0, startLength);
  const endStr = address.substring(address.length - endLength);

  return startStr + '...' + endStr;
}
