export function stripCDATA(str) {
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

export function isNull(something: any) {
  return typeof something === "undefined" || something === null;
}
