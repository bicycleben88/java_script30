# Day 15 Local Storage & Event Delegation

[Walkthru of Code](https://youtu.be/0tDlLa_IltM)

## Task

> - Use local storage to persist data after refreshing the page
> - Use event delegation to add an event listener to elements added to the DOM

## JavaScript Logic

> - Grab DOM elements & add event listeners
> - Create array to hold items typed by the user
> - ![elements](https://i.imgur.com/daJr7uU.png)
> - addItem()
>   - preventDefault() stops the page from reloading
>   - grab the value of the input w/ a name of "item"
>   - create item object, provide it value of input & push it to array
>   - invoke populateList()
>   - store list of items in local storage
>   - clear the form
>   - ![add item](https://i.imgur.com/JKa9xEr.png)
> - populateItems()
>   - loop over items array & create HTML to add to items list
>   - provide each item with a unique data-set value
>   - ![populate items](https://i.imgur.com/ybyQPaD.png)
> - toggleDone()
>   - end the function if the element that triggered the event isn't an input
>   - grab the element that triggered the event and it's unique data-set value
>   - toggle that element to done or not done
>   - save the items list to local storage
>   - invoke populateItems();
>   - ![toggle done](https://i.imgur.com/oxMucgP.png)

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
