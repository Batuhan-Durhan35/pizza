game.splash("Pizza Order. ")
diameter = game.ask_for_number("Enter the diameter of the Pizza (inch).")
cost = 0.75 + (1 + 0.5 * diameter)
game.splash("The cost for " + str(diameter) + " inch pizza is $" + str(cost * 1.13) + str(Math.round(cost)))