// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      console.log(`${this.name} has received points of ${damage}`)
    } else {
      console.log(`${this.name} has died in act of combat`)
    }
  }
  battleCry() {
    let string = "Odin Owns You All!"
    return string
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      console.log(`A Saxon has received ${damage} points of damage`)
    } else {
      console.log(`A Saxon has died in act of combat`)
    }
  }
}

// War
class War {
this.vikingArmy = []
this.saxonArmy = []

addViking(viking) {

this.vikingArmy.push(viking)
}


addSaxon()

vikingAttack()

saxonAttack()
showStatus()
class
}

