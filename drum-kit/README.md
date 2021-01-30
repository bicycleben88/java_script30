# Day 1 Drum Kit

## Task:

> - Play audio file after pressing a key

## JavaScript Logic:

> - Play Audio
>   - use keyCode triggered by "keydown" event to select \<audio> & \<div class="card"> tags w/ matching "key-code" values
>   - if a key is pressed for which there isn't an audio file
>     - return to exit function
>   - set the current time of the audio file to the beginning
>   - play the audio file
>   - add css class to play animation
> - Remove Transition
>   - skip CSS properties that aren't transform
>   - remove css class to end animation
> - Select all \<div class="card"> tags
> - For each selected \<div class="card"> tag add event listener that invokes function when transition ends
> - Create event listener that invokes a function after a key is pressed

## Notes:

> - \<kbd> used to define keyboard input
> - Audio Files - https://bigsoundbank.com/
> - keyCodes - http://keycode.info/
