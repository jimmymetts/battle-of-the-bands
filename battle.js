// console.log("test");

let bandNumber = 0

const takeNumber = function (bandName) {
    bandNumber += 1
    console.log(bandNumber + " " + bandName)


}

const scum = takeNumber("Galactic Scum")
  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
 // This should print "2. Underdogs" in the console

const strays = takeNumber("Strays")

const reds = takeNumber("The Reds")

