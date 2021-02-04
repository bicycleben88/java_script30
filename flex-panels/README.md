# Day 5 Image Panels w/ Flexbox

[Walkthru of Code](https://youtu.be/mkIE7TSJ-g8)

## Task

> - Use Flexbox & JavaScript to expand & contract images w/in a panel of images

### HTML

> - \<div class="panels"> Container for image panels
> - \<div class="panel"> Flex item of .panels and container of child elements

### CSS

> - .panels { display: flex } - Flex container
> - .panel
>   - Flex item of .panels
>   - flex: 1 - occupy any extra white space evenly with all Flex items w/in .panels container
>   - Flex container for child elements inside of each panel
>   - Center items & arrange child elements in a column
>     ![panel-class](https://i.imgur.com/HSGUjRr.png)
>   - Add class of open to { transition: expand image panel & increase font }
>     ![transform](https://i.imgur.com/vQCDMyD.png)
> - .panel > \*
>   - the child elements of each .panel
>   - Flex item of .panel & Flex container
>   - { flex: 1 0 auto }
>     - _flex-grow flex-shrink flex-basis_
>     - grow to occupy extra white space, don't shrink, auto-width
> - .panel >\*:first-child &.panel >\*:last-child
>   - { transform: translateY(move text off of screen) }
>   - Add class of open-active to move text onto screen
>     ![open-class](https://i.imgur.com/VTB9o6j.png)

### JavaScript

> - Grab all .panel(s) from the DOM
> - Add to each .panel an event listener for when it is clicked and an event listener for when the transition has ended
> - Functions
>   - add or remove class .open
>   - add or remove .open-active
>     ![functions](https://i.imgur.com/x7DQJ8x.png)
