# Gilded Rose JS Tech Test

An implementation of the Gilded Rose Refactoring Kata in Javascript, found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata), and the requirements for this kata are found [here](../blob/master/GildedRoseRequirements.txt).

My approach for this Kata was to start by building out an extensive test spec - testing for the appropriate changes in quality and sellIn under different conditions and that the various limits were upheld for the various different types of items:

- normal items
- Aged Brie
- Backstage passes
- Sulfuras, Hand of Ragnaros

Once this test suite was complete, I started refactoring the code. I started by making new child classes for each type of item that each had an updateItem method. These classes extended Item to fit the brief of not changing Item. I did this as at the moment there was significant inappropriate intimacy going on in the Gilded Rose, and delegation, together with some polymorphism seemed like a good solution. Each class was responsible for its own behaviour and state changing, and each item contained its own rules for changing sellIn and quality.
