describe('Aged Item', function () {
  var item;

  describe('inherits properties from Item', function () {
    beforeEach(function() {
      item = new AgedItem('Aged Brie', 10, 5);
    });

    it('takes name an argument', function () {
      expect(item.name).toEqual('Aged Brie');
    });

    it('takes sellIn an argument', function () {
      expect(item.sellIn).toEqual(10);
    });

    it('takes quality as an argument', function () {
      expect(item.quality).toEqual(5);
    });
  });

  describe('updateItem', function () {
    describe('positive sellIn values', function () {
      beforeEach(function() {
        item = new AgedItem('Aged Brie', 5, 10);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(4)
      });

      it('increases quality by one', function () {
        expect(item.quality).toEqual(11)
      });
    });

    describe('sellIn is 0', function () {
      beforeEach(function() {
        item = new AgedItem('Aged Brie', 0, 10);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(-1)
      });

      it('increases quality by two', function () {
        expect(item.quality).toEqual(12)
      });
    });

    describe('quality is 50', function () {
      beforeEach(function() {
        item = new AgedItem('Aged Brie', 0, 50);
        item.updateItem();
      });

      it('sellIn should reduce by one', function () {
        expect(item.sellIn).toEqual(-1);
      });

      it('quality should not change', function () {
        expect(item.quality).toEqual(50);
      });
    });
  });
});
