# Day 10 Select Multiple Checkboxes

[Walkthru of Code](https://youtu.be/NLKcCbM0-ug)

## Task

> - Select multiple checkboxes when the shift key is held down

## JavaScript Logic

> - Grab DOM elements \<input type="checkbox>
> - Add event listener to checkboxes that runs function checkAllBoxes()
> - Create variable to keep track of last checked item
> - ![event-listeners](https://i.imgur.com/EeAMXd9.png)
> - Function
>   - Create boolean variable that will evaluate to true for items in between checked boxes
>   - if the shift key is held & an item is being checked
>     - loop thru inputs
>       - toggle boolean values outside of endpoints
>     - if we're in between endpoints
>       - update status of input to 'checked'
>   - change value of last checked item
>   - ![function](https://i.imgur.com/MMbeUEW.png)

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
