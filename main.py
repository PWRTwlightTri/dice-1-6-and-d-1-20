def RESET_MICROBIT():
    control.reset()

def on_button_pressed_a():
    global Number2
    Number2 += randint(1, 6)
    basic.show_number(Number2)
    if Number2 == 6:
        music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
            music.PlaybackMode.IN_BACKGROUND)
    basic.pause(1000)
    Number2 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("Twlight")
    music.set_volume(255)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Number2
    Number2 += randint(1, 20)
    basic.show_number(Number2)
    if Number2 == 20:
        music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
            music.PlaybackMode.IN_BACKGROUND)
    basic.pause(1000)
    Number2 = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    RESET_MICROBIT()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

timer = 0
Number2 = 0
led.set_brightness(255)
music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.IN_BACKGROUND)

def on_forever():
    global timer
    basic.pause(1000)
    timer += 1
    if timer == 60:
        music.set_volume(0)
basic.forever(on_forever)
