# Day 26 Strip Follow Along Dropdown

[Walkthru of Code](add.url.here)

## Task

> - Use JavaScript & CSS to programmatically update the background of a dropdown menu

## CSS

> - Trigger-enter & trigger-enter-active: displays content of the list item
> - ![css trigger classes](images/trigger.png)
> - Open displays the \<div> which will act as the background to the dropdown menu
> - ![css open class](images/open.png)

## JavaScript

> - Grab DOM elements & add event listeners to them
> - ![dom elements and there listeners](images/dom-listeners.png)
> - handleEnter()
>   - add css class to event listener w/ setTimeout to give css transition time to animate effect
>   - ![add css classes](images/trigger-js.png)
>   - grab the dom element to add a background to & get its coordinates
>   - create coordinates object to account for location of the nav bar & use them for css property values
>   - set css for background
> - ![dropdown css values](images/dropdown.png)
> - handleLeave(): remove css classes to hide \<li> content & background

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
