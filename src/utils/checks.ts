export function isNull(something: any): boolean {
  return typeof something === "undefined" || something === null;
}
