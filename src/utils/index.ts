export function stripCDATA(str: string) {
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

export function isNull(something: any) {
  return typeof something === "undefined" || something === null;
}
