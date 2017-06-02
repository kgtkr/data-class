//private
function equals(a, b) {
  if (a === b) {
    return true;
  }

  if (a === null || a === undefined || b === null || b === undefined) {
    return false;
  }

  if (typeof a.equals === "function") {
    return a.equals(b);
  }

  if (typeof b.equals === "function") {
    return b.equals(a);
  }

  return false;
}

const DataClassConstructor = function (obj) {
  for (let key of Object.keys(obj)) {
    this[key] = obj[key];
  }
}

DataClassConstructor.prototype.copy = function (obj) {
  return new DataClassConstructor({ ...this, ...obj });
};

DataClassConstructor.prototype.equals = function (obj) {
  if (obj instanceof DataClassConstructor) {
    let keyA = Object.keys(this);
    let keyB = new Set(Object.keys(obj));
    if (keyA.length !== keyB.size) {
      return false;
    }

    return keyA.every(x => keyB.has(x) && equals(this[x], obj[x]));
  } else {
    return false;
  }
};

exports.DataClassFactory = function (obj) {
  return new DataClassConstructor(obj);
}