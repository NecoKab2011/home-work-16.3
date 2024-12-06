class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  append(str) {
    this.value += str;
    return this.value;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value = str + this.value;
    this.value += str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
