const positionFirstNic = string.toLocaleLowerCase().indexOf("nic")
const positionLastNic = string.toLocaleLowerCase().indexOf("cage")
const stringNic = string.slice(positionFirstNic, positionLastNic)
const positionFirstCage = string.toLocaleLowerCase().indexOf("cage")
const positionLastCage = string.toLocaleLowerCase().indexOf("cage") + 4
const stringCage = string.slice(positionFirstCage, positionLastCage).toLowerCase()
const stringNew = `${string.slice(0, positionLastNic)} ${stringNic[0].toLocaleUpperCase() + stringNic.slice(1)} ${stringCage[0].toLocaleUpperCase() + stringCage.slice(1)} ${string.slice(positionLastCage)}`
console.log("8)", stringNew.indexOf("Nic Cage"))