# Day 2 Clock

[Walkthru of Code](https://www.youtube.com/watch?v=lRuZEltTHLc)

## Task

> - Create Clock w/ moving hands
> - Use CSS transform to reposition the hands according to the time of day & CSS transition to give 'ticking' effect
> - Use JavaScript to get the current time & to update the CSS transform

## CSS

> - transform-origin: gives the effect that the hands are rotating from the middle of the clock
> - transform: rotate(90) - rotates the horizontal div 90 degrees to give the effect of starting @ 12:00
> - .transition: class added to .hand to mimic 'ticking' effect
>   - this class is removed when the second hand reaches 0 to prevent the hand from skipping forward temporarily
>     ![css](https://i.imgur.com/ZBlkfVV.png)

## JavaScript Logic

> - select DOM element: \<div .hand> Second, Minute, & Hour hand
> - setInterval to run function every second
> - Function
>   - get the current time
>   - use math to position hand(s) at correct time
>   -  ![js-math](https://i.imgur.com/Pn98nSO.png)
>   - get current seconds
>     - if (the second hand hits 0)
>       - remove transition to prevent the hand from skipping forward before resetting
>     - else - add transition class to give the 'ticking' effect to the second hand
>   - grab DOM element & add transform rotate(degrees calculated above)
>   - ![js-remove-class](https://i.imgur.com/Pk3Ypya.png)
>   - repeat the same logic for minute and hour hands w/o adding or removing transition class.

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
