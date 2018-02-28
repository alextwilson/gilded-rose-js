describe('Timed Item', function () {
  var item;

  describe('inherits properties from Item', function () {
    beforeEach(function() {
      item = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 20, 10);
    });

    it('takes name an argument', function () {
      expect(item.name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    });

    it('takes sellIn an argument', function () {
      expect(item.sellIn).toEqual(20);
    });

    it('takes quality as an argument', function () {
      expect(item.quality).toEqual(10);
    });
  });

  describe('updateItem', function () {
    describe('sellIn above 10', function () {
      beforeEach(function() {
        item = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 20, 10);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(19)
      });

      it('increases quality by one', function () {
        expect(item.quality).toEqual(11)
      });
    });

    describe('sellIn greater than 5 but less than or equal to 10', function () {
      beforeEach(function() {
        item = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 9, 10);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(8)
      });

      it('increases quality by two', function () {
        expect(item.quality).toEqual(12)
      });
    });

    describe('sellIn greater than 0 but less than or equal to 5', function () {
      beforeEach(function() {
        item = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 5, 10);
        item.updateItem();
      });

      it('sellIn should reduce by one', function () {
        expect(item.sellIn).toEqual(4);
      });

      it('quality should increase by three', function () {
        expect(item.quality).toEqual(13);
      });
    });

    describe('sellIn is 0 or less', function () {
      beforeEach(function() {
        item = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 0, 10);
        item.updateItem();
      });

      it('sellIn should reduce by one', function () {
        expect(item.sellIn).toEqual(-1);
      });

      it('quality should decrease to zero', function () {
        expect(item.quality).toEqual(0);
      });
    });
  });
});
