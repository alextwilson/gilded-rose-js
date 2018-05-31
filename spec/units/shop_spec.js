describe('Shop', function () {
  var item;
  var gildedRose;

  describe('updateStock', function () {
    beforeEach(function() {
      item = jasmine.createSpyObj('item', ['updateItem']);
      gildedRose = new Shop([item]);
      this.items = gildedRose.updateStock();
    });

    it('calls item\'s age method', function () {
      expect(item.updateItem).toHaveBeenCalled();
    });
  });
});
