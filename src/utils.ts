export function arrayContainsPartialString(arr: string[], str: string) {
  let contains = false;
  for (let a of arr) {
    contains = contains || a.includes(str);
  }
  return contains;
}
