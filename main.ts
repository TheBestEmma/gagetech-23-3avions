let Compte_avion_1 = 0
let Compte_Avion_3 = 0
let Compte_avion_2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showNumber(Compte_avion_1)
    while (input.pinIsPressed(TouchPin.P0)) {
        if (input.buttonIsPressed(Button.A)) {
            Compte_avion_1 += 1
            basic.showNumber(Compte_avion_1)
        } else if (input.buttonIsPressed(Button.B)) {
            Compte_avion_1 += -1
            basic.showNumber(Compte_avion_1)
        } else if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(Compte_avion_1)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # # # .
        . . . # .
        . . # . .
        # . . # .
        . # # . .
        `)
    basic.showNumber(Compte_Avion_3)
    while (input.pinIsPressed(TouchPin.P2)) {
        if (input.buttonIsPressed(Button.A)) {
            Compte_Avion_3 += 1
            basic.showNumber(Compte_Avion_3)
        } else if (input.buttonIsPressed(Button.B)) {
            Compte_Avion_3 += -1
            basic.showNumber(Compte_Avion_3)
        } else if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(Compte_Avion_3)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . # . . .
        # # # # .
        `)
    basic.showNumber(Compte_avion_2)
    while (input.pinIsPressed(TouchPin.P1)) {
        if (input.buttonIsPressed(Button.A)) {
            Compte_avion_2 += 1
            basic.showNumber(Compte_avion_2)
        } else if (input.buttonIsPressed(Button.B)) {
            Compte_avion_2 += -1
            basic.showNumber(Compte_avion_2)
        } else if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(Compte_avion_2)
        }
    }
})
