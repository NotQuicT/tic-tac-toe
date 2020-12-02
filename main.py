def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("New Game")
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(69)