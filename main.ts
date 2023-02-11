input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(randint(1, 3))
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showNumber(randint(1, 6))
    }
})
basic.forever(function () {
	
})
