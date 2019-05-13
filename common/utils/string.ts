export function stripCDATA(str: string) {
  return str
    .replace("<![CDATA[", "")
    .replace("]]>", "")
    .trim();
}
export function hasCDATA(str: string) {
  return str && str.indexOf("<![CDATA[") !== -1;
}
