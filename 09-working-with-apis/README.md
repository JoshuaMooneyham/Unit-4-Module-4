# Exercise 9: Working with an API

Last but definitely not the least, work with an API and build a simple frontend.

Every React or any frontend developer must learn how to work with an API. When building applications, you receive data from the backend or an outside source which you will have to present nicely in the UI.

Fetch from this API endpoint: https://random-data-api.com/api/users/random_user?size=10

This will return ten random users.

Here we'll put together everything we did from the previous examples:

Show each user's basic info in a card.
When a card is hovered upon, the card flips to show more information about the user.
There should also be a button that when clicked, will fetch another set of 10 random users, which updates the cards.
Here are the steps for this exercise:

Fetch the data from the URL. You also have to handle converting the JSON response into a JavaScript object in this process. (See Response.json() resource link below)
Store it in React state.
Render the data based on the state.
Take note that most APIs return data in the form of JSON. Good thing we already covered JSON in the previous exercise 😄

Hints:

Do the fetching inside a useEffect React hook
Create a custom component for the card, which accepts a user JSON object. Map through the data returned from the API and render each one using the custom component.

**_ Helpful Links _**

What is an API? : https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/

How to use Fetch API: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/

Response.json() function: https://developer.mozilla.org/en-US/docs/Web/API/Response/json

React useEffect hook: https://reactjs.org/docs/hooks-effect.html

We'll also be needing a lot more CSS, especially for the card hover effect:

Card flip effect: https://www.w3schools.com/howto/howto_css_flip_card.asp
