describe('Conjured Item', function () {
  var item;

  describe('updateItem', function () {
    describe('positive sellIn values', function () {
      beforeEach(function() {
        item = new ConjuredItem('conjured shoes', 10, 5);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(9)
      });

      it('decreases quality by one', function () {
        expect(item.quality).toEqual(3)
      });
    });
  });
});
