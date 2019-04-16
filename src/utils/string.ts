export function stripCDATA(str: string) {
  return str.replace("<![CDATA[", "").replace("]]>", "");
}
