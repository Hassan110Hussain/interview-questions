//  Basic Approach

Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//   Advanced Version

Array.prototype.customForEachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw callback + " is not a function";
  }
  if (thiscontext === undefined || thiscontext === null) {
    thiscontext = this;
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this);
    }
  }
};
