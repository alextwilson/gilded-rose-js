# Gilded Rose JS Tech Test

An implementation of the Gilded Rose Refactoring Kata in Javascript, found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata), and the requirements for this kata can be found [here](../blob/master/GildedRoseRequirements.txt).

### Approach

My approach for this Kata was to start by building out an extensive test spec - testing for the appropriate changes in quality and sellIn under different conditions and that the various limits were upheld for the various different types of items:

- normal items
- Aged Brie
- Backstage passes
- Sulfuras, Hand of Ragnaros

Once this test suite was complete, I started refactoring the code. I started by making new child classes for each type of item that each had an updateItem method. These classes extended Item to fit the brief of not changing Item. I did this as at the moment there was significant inappropriate intimacy going on in the Gilded Rose, and delegation, together with some polymorphism seemed like a good solution. Each class was responsible for its own behaviour and state changing, and each item contained its own rules for changing sellIn and quality.

Once all existing behaviour had been built out with extended classes, I moved on to adding the Conjured Item, where its quality degrades twice as fast as that of a normal item. I started with when sellIn values were positive, then when sellIn was zero, then finally preventing quality from reducing below zero.

After the development of item behaviour was complete, I removed all of the item logic from the shop class and simply called updateItem on each item in the shop array, allowing delegation to update the item appropriately. At this point, the large feature test mapping out all of the old item behaviour in shop was both failing and irrelevant, so it was rewritten as a true feature test, finishing the exercise.

### Dependencies

This project has no dependencies for the main code, however Jasmine is used for testing.

### Getting Started

The Gilded Rose is essentially an exercise in working with legacy code with a focus on refactoring, rather than being a truly working product. As such, it does not come with a way to _use_ it, however, the Gilded Rose can still be run:

- Clone this repo
- Open SpecRunner.html in a web browser
- Open the browser console

#### Usage

Once in the browser console, the gilded rose can be used like this:

```
>> items = [
        normalItem = new NormalItem('vest', 10, 5),
        timedItem = new TimedItem('Backstage passes to a TAFKAL80ETC concert', 20, 10),
        agedItem = new AgedItem('Aged Brie', 10, 5),
        legendaryItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 80),
        conjuredItem = new ConjuredItem('conjured shoes', 10, 5)
      ];
<- Array(5) [ {…}, {…}, {…}, {…}, {…} ]
>> shop = new Shop(items)
<- Object { items: (5) […] }
>> shop.updateStock()
<- Array(5) [ {…}, {…}, {…}, {…}, {…} ]
```

shop.updateStock() returns the item array inside the shop with the item values updated.

### Testing

This project was tested with Jasmine. There are comprehensive unit tests for the shop and each item. For the item unit tests item value changes are tested under the item conditions stated in the requirements document.

In the feature test goes through a typical user journey, creating the items, shop, and advancing the stock in age.

To run the test suite, open SpecRunner.html in a web browser.

### Reflections
