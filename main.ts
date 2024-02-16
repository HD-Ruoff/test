input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
