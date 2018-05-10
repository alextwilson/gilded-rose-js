class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].updateItem();
    }

    return this.items;
  }
}
