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
    beforeEach(function() {
      item = new NormalItem('vest', 10, 5);
    });

    it('decreases sellIn by one', function () {
      item.updateItem();
      expect(item.sellIn).toEqual(9)
    });

    it('decreases quality by one', function () {
      item.updateItem();
      expect(item.quality).toEqual(4)
    });
  });
});
