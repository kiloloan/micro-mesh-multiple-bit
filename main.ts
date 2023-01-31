/**
 * Si A+B appuyer : mode attente nouveau pair (x seconde)
 * 
 * En mode A+B :: 
 * 
 * A : Envoi Pair
 * 
 * B : Quitte Pair
 * 
 * A+B : Reset Table (faire validation)
 */
function MenuPair () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.showIcon(IconNames.Target)
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Reset?A=ok|B:quit")
        while (!(input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
            basic.showString("?")
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Skull)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    MenuPair()
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.No)
})
