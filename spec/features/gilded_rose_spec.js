describe('Gilded Rose', function () {
  var shop;
  var items;

  describe('', function () {
    beforeEach(function() {
      items = [
        new NormalItem('vest', 10, 5),
        new TimedItem('Backstage passes to a TAFKAL80ETC concert', 20, 10),
        new AgedItem('Aged Brie', 10, 5),
        new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 80),
        new ConjuredItem('conjured shoes', 10, 5)
      ];
      shop = new Shop(items);
    });
  });
});
