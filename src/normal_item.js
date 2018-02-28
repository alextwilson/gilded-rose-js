class NormalItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this._updateQuality();
  }

  _updateQuality() {
    if (this.quality === 0) return;

    if (this.sellIn < 1) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }
  }
}
