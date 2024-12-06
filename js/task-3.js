class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(item) {
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}

const items = storage.getItems();
console.table(items);

storage.addItem("Дроїд");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
