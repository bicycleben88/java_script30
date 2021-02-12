# Day 11 Costume Video Player

[Walkthru of Code](https://youtu.be/bxGewHF6jhk)

## Task

> - Create a custome video player using JavaScript to run video methods & to update CSS

## HTML

> - \<video> methods, properties & event listeners:
>   - play() & pause()
>   - .paused
>   - .currentTimes
>   - .playbackRate
>   - .volume
>   - onpause
>   - onplay
>   - ontimeupdate
> - \<button data-skip="a value">
>   - use this value to update the current time
> - \<input type="range" name="video property">
>   - use value from range to update video property

## JavaScript Logic

> - Grab the DOM elements
> - Create variable to keep track of mouse events
> - Add event listeners
> - Functions:
>   - togglePlay(): play or pause video
>   - updateButton(): change icon to reflect play or pause
>   - skip(): change video time by \<button data-skip="this value">
>   - handleRangeUpdate(): change video property by value set from \<input type="range">
>   - handleProgress(): change width of progress bar to reflect current video time
>   - scrub(): change video time when user moves progress bar

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
