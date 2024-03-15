# Exercise 5: Mapping Through A List And Rendering

To get comfortable with React, you must learn declarative programming.

React is declarative. So you need to think in "declarative programming" whenever you work with React, and this exercise is perfect for that. This is the "opposite" of imperative programming which is the paradigm used in Vanilla JavaScript.

In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.

Given an array:

['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

Use the map function to render them in an unordered list:

dog
cat
chicken
cow
horse
Once you learn the concept of rendering declaratively, you'll see how much life becomes easier (overstatement).

But think of it this way...

Our example list is not that big, but imagine if the list contains thousands of items, which is true when working with real-life data and real-world applications. You wouldn't want to manually code each <li> one thousand times, right?

And what if the data changes? This is the case when working with data in production environment. You'll have to change the code again.

But not when you rendered the list declaratively. When the data changes, and you rendered your data presentation declaratively, a.k.a. the smart way, then your declarative code does the change for you.

**_ Helpful Links _**
Declarative programming vs. imperative programming: https://learn.co/lessons/react-declarative-programming

map() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

rendering lists in React: https://reactjs.org/docs/lists-and-keys.html
