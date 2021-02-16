# Day 14 Referencing, Copying Arrays & Objects

<!-- [Walkthru of Code](https://www.youtube.com/watch?v=lRuZEltTHLc) -->

## Task

> - Copy and change data inside arrays & objects

## JavaScript

> - Arrays
>   - Saving an existing array to a new variable will alter the original array if changes are made
>   - .slice() || let newArray = [].concat(originalArray) || let newArray = Array.from(originalArray)
>     - copy the original array into a new variable
>     - will not alter the original array
>   - [...spread operator] is the es6 version of creating a new array from an existing array
> - Objects
>   - Saving an existing object to a new variable will alter the original object if changes are made
>   - let newObject = Object.assign({}, originalObject)
>     - copies the existing object one layer deep
>     - changing the new object
>       - will not change the existing object one layer deep
>       - will change the existing object beyond one layer deep

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
