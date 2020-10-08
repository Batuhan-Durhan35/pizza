// Created by: Batuhan
// Created at: 8 October 2020
game.splash("Pizza Order. ")
let diameter = game.askForNumber("Enter the diameter of the Pizza (inch).")
let cost = 0.75 + (1 + 0.5 * diameter)
game.splash("The cost for " + diameter + " inch pizza is $" + cost * 1.13 + "(HST included).")
