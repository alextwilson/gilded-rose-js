describe('Gilded Rose', function () {
  var shop;
  var items;

  describe('shop stock update', function () {
    beforeEach(function() {
      items = [
        normalItem = new NormalItem('Vest', 10, 5),
        timedItem = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 20, 10),
        agedItem = new AgedItem('Aged Brie', 10, 5),
        legendaryItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 80),
        conjuredItem = new ConjuredItem('Conjured Shoes', 10, 5)
      ];
      shop = new Shop(items);
    });

    it('changes sellIn value of all items appropriately', function () {
      shop.updateStock();
      expect(normalItem.sellIn).toEqual(9);
      expect(timedItem.sellIn).toEqual(19);
      expect(agedItem.sellIn).toEqual(9);
      expect(legendaryItem.sellIn).toEqual(5);
      expect(conjuredItem.sellIn).toEqual(9);
    });

    it('changes quality value of all items appropriately', function () {
      shop.updateStock();
      expect(normalItem.quality).toEqual(4);
      expect(timedItem.quality).toEqual(11);
      expect(agedItem.quality).toEqual(6);
      expect(legendaryItem.quality).toEqual(80);
      expect(conjuredItem.quality).toEqual(3);
    });
  });
});
