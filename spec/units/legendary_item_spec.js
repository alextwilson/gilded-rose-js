describe('Legendary Item', () => {
  var item;

  describe('updateItem', () => {
    describe('properties do not change', () => {
      beforeEach(() => {
        item = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 80);
        item.updateItem();
      });

      it('quality should not change', () => {
        expect(item.quality).toEqual(80);
      });

      it('sellIn should not change', () => {
        expect(item.sellIn).toEqual(5);
      });
    });
  });
});
