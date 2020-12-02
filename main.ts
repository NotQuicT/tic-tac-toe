input.onButtonPressed(Button.AB, function () {
    radio.sendString("New Game")
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(69)
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Not ready")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Ready")
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
    	
    }
}
