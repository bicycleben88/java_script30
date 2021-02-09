# Day 6 Type-ahead Feature

[Walkthru of Code](https://youtu.be/lEtzC9KYWq8)

## Task

> - Using value from a search bar to filter thru an array of data and display results

## JavaScipt Logic

> - Grab DOM elements & add event listeners to them
> - Using both event listeners at the same time will update DOM while the user is typing
> - ![event-listeners](https://i.imgur.com/SEDGcNA.png)
> - fetch data asynchronously from API endpoint
>   - .then() method will wait for fetch to return a promise before executing the next function
>   - convert data into json & add to array of cities
>   - ![fetch](https://i.imgur.com/cQixSwR.png)
> - findMatches()
>   - use .filter() to find elements in the array that match the value from the search bar
>   - convert search term into regular expression
>   - MDN: Regex are patterns used to match character combinations in strings
>   - ![findMatches](https://i.imgur.com/8CKt39y.png)
> - displayMatches()
>   - will run everytime the value of the search bar is updated(i.e. everytime a key is pressed)
>   - invoke findMatches() with value from search bar
>   - create HTML elements w/ results from findMatches()
>     - convert value to regular expression
>     - add CSS class .hl to city & state
>     - create new \<li>
>   - Add HTML elements to DOM
