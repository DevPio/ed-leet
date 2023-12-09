const jsonStringify = function (object) {
  if (typeof object == "string") return `"${object}"`;
  if (typeof object !== "object") return object.toString();
  if (object == null) return object;

  let builder = "{";

  let keys = Object.keys(object);
  let counterKey = 0;

  if (Array.isArray(object)) {
    let builderArray = "[";
    let counter = 0;
    for (const iterator of object) {
      counter++;
      if (counter < object.length) {
        builderArray += jsonStringify(iterator) + ",";
      } else {
        builderArray += jsonStringify(iterator);
      }
    }

    builderArray += "]";

    return builderArray;
  }
  for (const key in object) {
    counterKey++;
    if (counterKey < keys.length) {
      if (typeof object[key] === "string") {
        builder += `"${key}":"${object[key]}",`;
      } else if (typeof object[key] === "object") {
        builder += `"${key}":${jsonStringify(object[key])},`;
      } else {
        builder += `"${key}":${object[key]},`;
      }

      continue;
    }

    if (typeof object[key] === "string") {
      builder += `"${key}":"${object[key]}"`;
    } else if (typeof object[key] === "object") {
      builder += `"${key}":${jsonStringify(object[key])}`;
    } else {
      builder += `"${key}":${object[key]}`;
    }
  }

  builder += "}";

  return builder;
};

jsonStringify({ a: 1, b: 2 });
