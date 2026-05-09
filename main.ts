function RESET_MICROBIT () {
    control.reset()
}
input.onButtonPressed(Button.A, function () {
    Number2 += randint(1, 6)
    basic.showNumber(Number2)
    if (Number2 == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
    basic.pause(1000)
    Number2 = 0
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
})
input.onButtonPressed(Button.B, function () {
    Number2 += randint(1, 20)
    basic.showNumber(Number2)
    if (Number2 == 20) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
    basic.pause(1000)
    Number2 = 0
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    RESET_MICROBIT()
})
let timer = 0
let Number2 = 0
led.setBrightness(255)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 60) {
        music.setVolume(0)
    }
})
