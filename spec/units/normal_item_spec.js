describe('Normal Item', function () {
  var item;

  describe('inherits properties from Item', function () {
    beforeEach(function() {
      item = new NormalItem('vest', 10, 5);
    });

    it('takes name an argument', function () {
      expect(item.name).toEqual('vest');
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
        item = new NormalItem('vest', 10, 5);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(9)
      });

      it('decreases quality by one', function () {
        expect(item.quality).toEqual(4)
      });
    });

    describe('sellIn is 0', function () {
      beforeEach(function() {
        item = new NormalItem('vest', 0, 5);
        item.updateItem();
      });

      it('decreases sellIn by one', function () {
        expect(item.sellIn).toEqual(-1)
      });

      it('decreases quality by two', function () {
        expect(item.quality).toEqual(3)
      });
    });

    describe('quality is 0', function () {
      beforeEach(function() {
        item = new NormalItem('vest', 0, 0);
        item.updateItem();
      });

      it('sellIn should reduce by one', function () {
        expect(item.sellIn).toEqual(-1);
      });

      it('quality should not change', function () {
        expect(item.quality).toEqual(0);
      });
    });
  });
});
