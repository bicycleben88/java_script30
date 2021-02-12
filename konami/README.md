# Day 12 KONAMI code

[Walkthru of Code](https://youtu.be/fIIb1m5hkZg)

## Task

> - Create Konami Code that triggers prize!

## JavaScript Logic

> - Create 2 variables
>   - empty array to contain the keys a user presses
>   - secret code
>   - ![variables](https://i.imgur.com/4OJwQ3Q.png)
> - Add event listener
>   - push the key the user pressed into array
>   - .splice()
>     - limit the size of the array & keep track of the keys last typed by the user
>     - takes three arguments (_index to start splicing_, _number of elements to delete_, _element to replace deleted elements_)
>     - creates new array
>   - if what user types matches the secret key
>     - add cornified icon to screen -![function](https://i.imgur.com/rRkPKLS.png)

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
