function stripCDATA(str) {
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

module.exports = {
  stripCDATA
};
