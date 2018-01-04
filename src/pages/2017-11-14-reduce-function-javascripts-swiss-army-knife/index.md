---
path: "/reduce-function-javascripts-swiss-army-knife"
date: "2017-11-14T13:25:01.624Z"
title: "The Reduce Function: Javascript's Swiss Army Knife"
tags:
  - reduce
  - JavaScript
  - functional
  - functional programming
---

Much has been written of JavaScript's [reduce function][mdn], but it seems to still not be readily understood nor readily used. This is concerning, because the `reduce` function is perhaps one of the most powerful and useful `function`s available in any JavaScript developer's utility belt. Let's take a deep dive into this function, explaining some common use cases for when to use it (and importantly, when _not_ to use it!), and giving some pragmatic examples of interesting patterns in which reduce can increase code clarity and usefulness.

## A Definition

The `reduce` function is a function available on the `Array` prototype provides as a means to iteratively reduce an array of values into a single value, oftentimes using what many call an "accumulator function." For example, the classic example is a sum function, which given an array of values, will `reduce` the array of values down into a single value, i.e. the sum. However, before we can begin to understand the value of the `reduce` function, it can first be helpful to take a step back and look at a different way of calculating sum, using a classic `for` loop.

```javascript
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}

calculateSum(values); // 45
```

This _works_, but we've introduced local variables and in general, it feels like this could be slightly cleaner. Let's look at the equivalent functionality, but refactored to use `reduce`. 

```javascript
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculateSum(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

calculateSum(values); // 45
```

Now this seems better! We've eliminated any local variables, and our function is pure, and also quite concise. There is something to be said regarding perhaps the increased complexity (for someone new to functional programming, or the `reduce` method itself), but this seems like we're going in the right direction.

## Other examples

The classic sum problem is perhaps the prototypical example of functionality offered with the `reduce` method, but let's take a look at some more.

### Re-building the `filter` method

Did you know that you can effectively re-build any functional array method with `reduce`? Let's re-build the `filter` method. If not aware, `filter` iterates over an array, invoking a callback every iteration. If that callback returns a non-truthy value, then that item is not included in the resulting array. For example:

```javascript
const colors = ['red', 'green', 'blue'];

const colorsWithoutGreen = colors.filter(color => color !== 'green'); // ['red', 'blue']
```

As `reduce` is so powerful, we can easily build this in. Note: I do not recommend doing this, but it can be a fun exercise to see just how useful `reduce` can be.

```javascript
const filter = (arr, include) => {
  return arr
    .reduce((filtered, element) => {
      if (include(element)) {
        filtered.push(element);
      }
      return filtered;
    }, []);
};

const colors = ['red', 'green', 'blue'];

const colorsWithoutGreen = filter(colors, color => color !== 'green'); // ['red', 'blue']
```

### Re-creating the `map` method

Conversely, the `map` method, which iterates over a collection, and invokes a callback mutating each item in the collection, can _also_ be created with `reduce`. Let's take a look! First, let's show an example of existing `map` functionality, and how it works!

```javascript
const values = [0, 1, 2, 3, 4, 5];
const valuesSquared = values.map(num => num * num); // [0, 1, 4, 9, 16, 25]
```

Quite simply, a map function invokes the given callback, and the resulting value is then applied in place of the existing value. Let's re-create with `reduce`. Once-more and with repeated emphasis, don't do this! Merely provided to edify knowledge of `reduce`.

```javascript
const map = (arr, mutate) => {
  return arr
    .reduce((mutatedArr, element) => {
      mutatedArr.push(mutate(element));
      return mutatedArr;
    }, []);
};
const values = [0, 1, 2, 3, 4, 5];
const valuesSquared = map(values, num => num * num);
```

At this point, the power of `reduce` has been made apparent. But a powerful method should not just be used because it is powerful. A truly _useful_ method is one that is both useful, powerful, _and_ descriptive, so let's go through some examples where `reduce` truly shines, and can provide some clarity and utility to any application.

### Creating an object from an array

Given an array of objects, it can oftentimes be useful to `reduce` them down into a single collection, i.e. a JavaScript object. For example, let's say that an HTTP endpoint returns an array of books, each with a unique ISBN, e.g.

```json
{
  "books": [
    {
      "isbn": 1234,
      "title": "The Cat in the Hat",
      "author": "Dr. Seuss"
    },
    {
      "isbn": 12345,
      "title": "A Storm of Swords",
      "author": "George R. R. Martin"
    },
    {
      "isbn": 12356,
      "title": "Moby Dick",
      "author": "Herman Melville"
    }
  ]
}
```

This is great! However, to retrieve a book, we oftentimes will have to filter through the entire collection, which is an O(N) lookup. For example, to retrieve a book by ISBN, we would do:

```javascript
function retrieveByISBN(books, isbn) {
  return books.find(book => book.isbn === isbn);
}
```

However, using our `reduce` method, we can first reduce the array of books into a JavaScript object, like so:

```javascript
const books = fetch('/books')
  .then(response => response.json())
  .then(json => {
    return json.books.reduce((books, book) => {
      books[book.isbn] = book;
      return books;
    }, {});
  });
```

books now has the structure of the following:

```json
{
  "1234": {
    "isbn": 1234,
    "title": "The Cat in the Hat",
    "author": "Dr. Seuss"
  },
  "12345": {
    "isbn": 12345,
    "title": "A Storm of Swords",
    "author": "George R. R. Martin"
  },
  "12356": {
    "isbn": 12356,
    "title": "Moby Dick",
    "author": "Herman Melville"
  }
}
```

this means that we now have constant time (i.e. `O(1)`) lookups for books by ISBN, rather than having to iterate through an array. In effect, we've normalized our data structure, and made it work a bit more cleanly and efficiently for our most common lookup.


[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
