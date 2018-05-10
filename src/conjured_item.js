class ConjuredItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this._updateQuality();
  }

  _updateQuality() {
    if (this.sellIn < 1) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }
  }
}
