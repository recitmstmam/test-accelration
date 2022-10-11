basic.forever(function () {
    serial.writeValue("a", Math.sqrt(input.acceleration(Dimension.X) * input.acceleration(Dimension.X) + input.acceleration(Dimension.Y) * input.acceleration(Dimension.Y) + input.acceleration(Dimension.Z) * input.acceleration(Dimension.Z)) * 9.81 / 1024)
    basic.pause(100)
})
