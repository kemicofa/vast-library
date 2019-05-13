export function extractFirst(obj) {
  let content;
  let name;
  for (const e in obj) {
    if (!obj.hasOwnProperty(e)) {
      continue;
    }
    name = e;
    content = obj[e];
    break;
  }
  return { name, content };
}

export function isValidKeyWord(key) {
  return (
    [
      "attrs",
      "only",
      "required",
      "uniq",
      "alo",
      // 'type', // maybe later for type validation
      "follow"
    ].indexOf(key) === -1
  );
}

// build a clean type for attrs
export function getType(type: any, newLineForAttributes: boolean = false) {
  const nl = newLineForAttributes ? "\n" : "";
  const sp = newLineForAttributes ? "    " : "";
  const spEnd = newLineForAttributes ? "  " : "";
  // const req = withRequired ? "" : "?";
  switch (typeof type) {
    case "object":
      let output = "{" + nl;
      let isFirst = true;
      for (const key in type) {
        if (!type.hasOwnProperty(key)) {
          continue;
        }
        if (isFirst) {
          isFirst = false;
        } else {
          output += ", " + nl;
        }
        const el = type[key];
        if (typeof el === "object") {
          const object = extractFirst(el);
          output += sp + object.name;
          if (Array.isArray(object.content) && object.content.length > 0) {
            // for optionnal field, but with listed values, see "renderingMode" in VAST 4.1
            if (Array.isArray(object.content[0])) {
              output += '?: "' + object.content[0].join('"|"') + '"';
            } else {
              output += ': "' + object.content.join('"|"') + '"';
            }
          } else {
            output += ": string";
          }
        } else {
          output += sp + el + "?: string";
        }
      }
      output += nl + spEnd + "}";
      return output;

    default:
      return type;
  }
}

// same logic as previous, just to know if their is required attributes
export function isRequiredType(type: any) {
  let hasRequiredFields = false;
  if (typeof type === "object") {
    for (const key in type) {
      if (!type.hasOwnProperty(key)) {
        continue;
      }
      const el = type[key];
      if (typeof el === "object") {
        const object = extractFirst(el);
        if (Array.isArray(object.content) && object.content.length > 0) {
          if (!Array.isArray(object.content[0])) {
            hasRequiredFields = true;
          }
        } else {
          hasRequiredFields = true;
        }
      }
    }
  }
  return hasRequiredFields;
}
