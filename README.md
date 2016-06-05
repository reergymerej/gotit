# gotit

simple object interfaces

Default values, type checking, and whatnot is a slippery slope.  Sometimes you just want to make sure your objects all have the same properties.

```js
import gotit from 'gotit';

// define the interface
const car = gotit(['wheels', 'doors']);

// use the interface to make sure fields are what you expect
const hooptie = car({
  wheels: 3,
  doors: 2,
});

// throws when fields are missing
const bicycle = car({
  wheels: 2,
});

// throws when finding an unexpected field
const truck = car({
  wheels: 4,
  doors: 2,
  cab: 'extended',  
});
```





---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
