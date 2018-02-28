class AgedItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this._updateQuality();
  }

  _updateQuality() {
    if (this.quality === 50) return;

    if (this.sellIn > 0) {
      this.quality += 1;
    } else {
      this.quality += 2;
    }
  }
}
