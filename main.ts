input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    radio.sendString("READY")
    radio.setGroup(2)
    radio.sendString("READY")
})
radio.onReceivedString(function (receivedString) {
    let readyB = 0
    let readyA = 0
    if (readyA) {
        A_ready = 1
    } else if (readyB) {
        B_ready = 1
    }
})
let B_ready = 0
let A_ready = 0
while (!(input.buttonIsPressed(Button.A))) {
    if (input.buttonIsPressed(Button.A)) {
        radio.setGroup(1)
        radio.sendString("PRESS A+B TO PAIR")
        while (A_ready != 1) {
        	
        }
    } else {
        basic.showString("PRESS A TO PAIR", 100)
    }
}
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.B)) {
        radio.setGroup(2)
        radio.sendString("PRESS A+B TO PAIR")
        while (B_ready != 1) {
        	
        }
    } else {
        basic.showString("PRESS B TO PAIR", 100)
    }
}
basic.showString("PRESS A+B TO START", 100)
