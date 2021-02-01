# Day 2 Clock

## Task

> - Create Clock w/ moving hands

## CSS

> - transform-origin: gives the effect that the hands are rotating from the middle of the clock
> - transform: rotate(90) - rotates the horizontal div 90 degrees to give the effect of starting @ 12:00
> - .transition: class added to .hand to mimic 'ticking' effect
>   - this class is removed when the second hand reaches 0 to prevent the hand from skipping forward temporarily

## JavaScript Logic

> - select all hands from DOM
> - setDate
>
>   - get the current time
>   - to get second hand to line up correctly on the clock face: (divide current second by 60 ) & multiply by number of degrees in a circle then add 90 to offset the rotate(90deg) in the css
>   - get current seconds
>     - if (the second hand hits 0)
>       - remove transition to prevent the hand from skipping forward before resetting
>     - else
>       - add transition class to give the 'ticking' effect to the second hand
>   - repeat the same logic for minute and hour hands
>
> - setInterval to run function once every second
