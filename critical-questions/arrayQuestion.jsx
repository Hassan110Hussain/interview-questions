Array.prototype.extraProp = "hassan";

const newArray = [1, 2, 3, 4, 5];

for (let v in newArray) {
  if (newArray.hasOwnProperty(v)) {
    console.log(v);
  }
}
