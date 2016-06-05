# gotit <small>v1.0.0</small>
[![Build Status](https://travis-ci.org/reergymerej/gotit.svg?branch=master)](https://travis-ci.org/reergymerej/gotit)

Sometimes you just want to make sure your objects all have the same properties.

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
