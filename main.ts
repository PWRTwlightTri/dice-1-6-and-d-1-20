function RESET_MICROBIT() {
    control.reset()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Number2 += randint(1, 6)
    basic.showNumber(Number2)
    if (Number2 == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
    
    basic.pause(1000)
    Number2 = 0
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showString("twlight")
    music.setVolume(255)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Number2 += randint(1, 20)
    basic.showNumber(Number2)
    if (Number2 == 20) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
    
    basic.pause(1000)
    Number2 = 0
})
input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    RESET_MICROBIT()
})
let timer = 0
let Number2 = 0
led.setBrightness(255)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.forever(function on_forever() {
    
    basic.pause(1000)
    timer += 1
    if (timer == 60) {
        music.setVolume(0)
    }
    
})
