enum RadioMessage {
    message1 = 49434
}
function Draw_Card () {
    if (Score > 21) {
        Bust = 1
        basic.showString("BUST")
    }
}
let Bust = 0
let Score = 0
let DECK = ["a", "b", "c"]
let DRAWN_CARDS: number[] = []
Score = 0
Bust = 0
basic.showString("Welcome")
basic.forever(function () {
    let Stand = 0
    if (input.buttonIsPressed(Button.A) && (Bust != 1 && Stand != 1)) {
        Draw_Card()
    }
})
