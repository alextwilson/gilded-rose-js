class NormalItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this.quality -= 1;
  }
}
