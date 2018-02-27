describe('Gilded Rose', function () {
  describe('updateQuality', function () {
    describe('normal items', function () {
      describe('positive sellIn values', function () {
        beforeEach(function() {
          const gildedRose = new Shop([new Item('normalItem', 5, 10)]);
          this.items = gildedRose.updateQuality();
        });

        it('should still have the same name', function () {
          expect(this.items[0].name).toEqual('normalItem');
        });

        it('sellIn should reduce by one', function () {
          expect(this.items[0].sellIn).toEqual(4);
        });

        it('quality should reduce by one', function () {
          expect(this.items[0].quality).toEqual(9);
        });
      });

      describe('sellIn is 0', function () {
        beforeEach(function() {
          const gildedRose = new Shop([new Item('normalItem', 0, 10)]);
          this.items = gildedRose.updateQuality();
        });

        it('sellIn should reduce by one', function () {
          expect(this.items[0].sellIn).toEqual(-1);
        });

        it('quality should reduce by two', function () {
          expect(this.items[0].quality).toEqual(8);
        });
      });

      describe('quality is 0', function () {
        beforeEach(function() {
          const gildedRose = new Shop([new Item('normalItem', 0, 0)]);
          this.items = gildedRose.updateQuality();
        });

        it('sellIn should reduce by one', function () {
          expect(this.items[0].sellIn).toEqual(-1);
        });

        it('quality should not change', function () {
          expect(this.items[0].quality).toEqual(0);
        });
      });
    });
  });
});
