# Day 13 Slide In on Scroll Feature

[Walkthru of Code](add.url.here)

## Task

> - Slide in images from off screen when user scrolls down the page

## JavaScript Logic

> - Grab all \<img> from DOM
> - Add event listener that triggers when the user scrolls
> - ![event listener](https://i.imgur.com/eozEVcc.png)
> - debounce function
>   - delays another function
>   - set timeout to undefined
>   - the first time debounce is run
>     - run the function passed down as an argument
>     - set timeout to the same function and a time delay
>   - debounce will wait for the time delay to run the function again
>   - clearTimeout() clears a time set with the setTimeout() method
>   - ![debounce](https://i.imgur.com/Cim68Jo.png)
> - checkSlide function
>   - loop over images from the DOM
>     - locate the point on the page to slide in the image
>     - locate the bottom of the image
>     - determine when the image is half shown
>     - determine the image has not been scrolled passed
>     - if the image is half shown & has not been scrolled passed
>       - add the class .active to display the image
>     - else
>       - remove the class .active to hide the image
> - ![check slide](https://i.imgur.com/gmYdI96.png)

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
