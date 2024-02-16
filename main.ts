input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("hi!")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
