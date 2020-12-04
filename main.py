def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global A_ready
    ready = 0
    if ready:
        A_ready = 1
radio.on_received_string(on_received_string)

A_ready = 0
while not (input.button_is_pressed(Button.A)):
    if not (input.button_is_pressed(Button.A)):
        basic.show_string("PRESS A TO PAIR", 100)
radio.set_group(1)
radio.send_string("PRESS A+B TO PAIR")
while A_ready != 1:
    pass
while not (input.button_is_pressed(Button.B)):
    if not (input.button_is_pressed(Button.B)):
        basic.show_string("PRESS B TO PAIR", 100)
radio.set_group(2)
radio.send_string("PRESS A+B TO PAIR")