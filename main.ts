input.onPinPressed(TouchPin.P0, function () {
    KenjiTheRussianSpy.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    KenjiTheRussianSpy.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    KenjiTheRussianSpy.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    KenjiTheRussianSpy.change(LedSpriteProperty.Y, 1)
})
let enemy_move = 0
let KenjiTheRussianSpy: game.LedSprite = null
KenjiTheRussianSpy = game.createSprite(2, 2)
let lives = 3
let enemy = game.createSprite(randint(0, 10), randint(0, 10))
enemy.set(LedSpriteProperty.Blink, 2)
basic.forever(function () {
    if (KenjiTheRussianSpy.isTouching(enemy)) {
        game.removeLife(1)
    }
    if (lives == 0) {
        game.gameOver()
    }
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P0)))) {
        enemy_move = randint(1, 4)
        game.addScore(1)
        if (enemy_move == 1) {
            enemy.change(LedSpriteProperty.X, 1)
        } else if (enemy_move == 2) {
            enemy.change(LedSpriteProperty.X, -1)
        } else if (enemy_move == 3) {
            enemy.change(LedSpriteProperty.Y, 1)
        } else {
            enemy.change(LedSpriteProperty.Y, -1)
        }
    }
})
