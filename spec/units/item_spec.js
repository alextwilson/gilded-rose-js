describe('Item', function () {
  it('takes name an argument', function () {
    const item = new Item('vest', 10, 5);
    expect(item.name).toEqual('vest');
  });

  it('takes sellIn an argument', function () {
    const item = new Item('vest', 10, 5);
    expect(item.sellIn).toEqual(10);
  });

  it('takes quality as an argument', function () {
    const item = new Item('vest', 10, 5);
    expect(item.quality).toEqual(5);
  });
});
