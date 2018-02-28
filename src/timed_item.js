class TimedItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this._updateQuality();
  }

  _updateQuality() {
    if (this.quality === 50) return;

    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 2;
    } else {
      this.quality +=1;
    }
  }
}
