# Day 3 Update CSS Variables

[Walkthru of Code](https://www.youtube.com/watch?v=2JbkFdWlbh0)

## Task

> - Use JavaScript to change the values of CSS variables

## HTML

> - \<input type="range" with min & max boundaries> provide for user input
>   - Input value will replace CSS variable value
> - data-sizing="suffix of CSS variable"
> - name="name of CSS variable"
> - ![html-input](https://i.imgur.com/bS6d8U9.png)

## CSS

> - Define variables in :root making them available to all HTML elements
> - Use variable for CSS property value
> - ![CSS-vars](https://i.imgur.com/mgahD4P.png)

## JavaScript Logic

> - Grab all DOM elements with class .control
> - Add two event listeners to those elements so CSS variables update as user moves range input
> - Function
>   - get value suffix from data-set
>   - pass suffix and input value to setProperty to update value of CSS Variable
> - ![js-function](https://i.imgur.com/5yroRuC.png)

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
