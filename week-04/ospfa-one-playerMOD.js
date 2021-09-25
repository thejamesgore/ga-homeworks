// This is a class
class NotEldersScrollsFantasyFighter {
  // Classes always have constructors
  constructor(name, moves, maxHitPoints) {
    this.name = name
    this.moves = moves
    this.hitPoints = maxHitPoints
    this.maxHitPoints = maxHitPoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.hitPoints <= 0
  }
  toString() {
    return `${this.name} (${this.hitPoints}/${this.maxHitPoints})`
  }
  takeDamage(hit) {
    this.hitPoints -= hit
  }
  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    opponent.takeDamage(move.hit)
    console.log(opponent.toString())
  }
}

// We can extend OpenSourcePocketFightingAnimal with a specific species
class Darknight extends NotEldersScrollsFantasyFighter {
  constructor(moves, maxHitPoints) {
    super('Darknight', moves, maxHitPoints)
  }
}

const myOspfa = new Darknight(
  [
    { name: 'Sword Swipe', hit: 25 },
    { name: 'Shield Bash', hit: 15 },
    { name: 'Sword Lunge', hit: 30 },
  ],
  100
)
// or we can use the main class
const theirOspfa = new NotEldersScrollsFantasyFighter(
  'Frost Mage',
  [
    { name: 'Ice Ball', hit: 20 },
    { name: 'Frost Daggers', hit: 35 },
    { name: 'Hail Shower', hit: 15 },
  ],
  75
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(' Your Character '.padStart(20, '=').padEnd(40, '='))
console.log(myOspfa)
console.log(' Their Character '.padStart(20, '=').padEnd(40, '='))
console.log(theirOspfa)

function promptUserForMove() {
  rl.question(
    `Which move would you like your ${myOspfa.name} to use against ${
      theirOspfa.name
    }?
Options are:
  ${myOspfa.moves.map(({ name }, i) => i + '. ' + name).join('\n  ')}
Indicate 0-${myOspfa.moves.length - 1}.
> `,
    function (index) {
      // The user has chosen a move — we'll now perform that move.
      myOspfa.useMoveAgainstOpponent(index, theirOspfa)

      if (theirOspfa.isFainted()) {
        // If the opponent has fainted, we win
        console.log(
          `Congratulations, you have successfully felled your opponent!`
        )
        return
      } else {
        // If the opponent hasn't fainted, they can now move
        executeRandomOpponentMove()
      }

      if (myOspfa.isFainted()) {
        // If we have fainted, it's game over
        console.log(
          `Congratulations, you have successfully felled your opponent!`
        )
        console.log(`Game Over! You died.`)
      } else {
        // After the opponent's move, we move again as long as we're not fainted
        promptUserForMove()
      }
    }
  )
}

function executeRandomOpponentMove() {
  const index = Math.floor(myOspfa.moves.length * Math.random())
  theirOspfa.useMoveAgainstOpponent(index, myOspfa)
}

promptUserForMove()
