describe('Shop', function () {
  var item;
  var gildedRose;

  describe('updateQuality', function () {
    beforeEach(function() {
      item = jasmine.createSpyObj('item', ['age']);
      gildedRose = new Shop([item]);
      this.items = gildedRose.updateQuality();
    });

    it('calls items age method', function () {
      expect(item.age).toHaveBeenCalled();
    });
  });
});
