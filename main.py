"""

Si A+B appuyer : mode attente nouveau pair (x seconde)

En mode A+B :: 

A : Envoi Pair

B : Quitte Pair

A+B : Reset Table (faire validation)

"""
def MenuPair():
    while not (input.button_is_pressed(Button.B)):
        basic.show_icon(IconNames.TARGET)
    if input.button_is_pressed(Button.AB):
        basic.show_string("Reset?A=ok|B:quit")
        while not (input.button_is_pressed(Button.B) or input.button_is_pressed(Button.A)):
            basic.show_string("?")
        if input.button_is_pressed(Button.AB):
            basic.show_icon(IconNames.SKULL)

def on_button_pressed_ab():
    MenuPair()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

radio.set_group(1)

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.NO)
basic.forever(on_forever)
