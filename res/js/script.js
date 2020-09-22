const EVERY_DAY_SPENDING = 15.3



let userName = "Andy"

let userAge = 45

let userBalance = 1200

let userIsAlive = true

let userPets = ["Cat", "Dog"]

let everyDaySpendingPerPet = 6



console.log("User Name", userName)

console.log("User Age", userAge)

console.log("User Balance", userBalance)

console.log("User Is Alive", userIsAlive)

console.log("User Pets", userPets)



userName = "Andrew"

userAge = 46

userBalance += 15.7;



// userPets.push("Hamster")

// everyDaySpendingPerPet += 7.1



// userPets.pop()

// userPets.pop()

// everyDaySpendingPerPet = 2.4



let daysSurvived = 0

while (userBalance > 0) {



	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length

	userBalance -= spending

	daysSurvived++

}

userIsAlive = false



console.log("User survived for " + daysSurvived + " days, RIP")