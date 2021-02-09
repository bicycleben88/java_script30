# Day 8 HTML-Canvas

[Walkthru of Code](https://youtu.be/wzKzaEb_63I)

## Task

> - Create a drawing canvas using \<canvas> & JavaScript

## JavaScript Logic

> - Grab DOM element
> - Get canvas context: i.e what you actually draw on
> - Size up canvas to the size of the window
> - Define base settings
> - Use boolean to control event listeners
> - Define end points for the line
> - Function
>   - Triggered when mouse moves & when boolean evaluates to true
>   - start a path
>   - start w/ an (x, y)
>   - move it to an (x, y)
>   - draw the line
>   - update lastX & lastY
>   - increment hue to change color
>     - hue = 0 when value exceeds 360
>   - change width of line
> - Event listeners
>   - mouse move: invoke draw() & update lastX & lastY
>   - mouse down: change boolean to true
>   - mouse up & mouse out: change boolean to false

## Notes

> - [Mother Effing HSL](https://mothereffinghsl.com/)
>   - (Hue, Saturation%, Light%)
> - Canvas
>   - getCanvas(): creates an instance of a canvas from HTML API
>   - .strokeStyle: color or style to use for the lines around shapes
>   - .lineJoin: defines the type of corners where two lines meet
>   - .lineCap: type of endings on the end of lines
>   - .beginPath(): call this method when you want to begin a path
>   - .moveTo(): moves the starting point of a new sub-path to the (x,y) points
>   - .lineTo(): connects the last point in the current sub-path to the specified point w/ a straight line
>   - .strokes(): strokes the current sub-paths with the current stroke style

## Source

> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://my-portfolio.benjamin-higginbotham.vercel.app/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
