// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "morning" // could be "afternoon", "evening" and "night"

// challenge 1
if (time === "morning") {
    console.log("good morning")
} else if (time === "afternoon") {
    console.log("good afternoon")
} else if (time === "evening") {
    console.log("good evening")
} else {
    console.log("good night")
}

// challenge 2

// switch (time) {
//     case "morning":
//         console.log("good morning")
//         break
//     case "afternoon":
//         console.log("good afternoon")
//         break
//     case "evening":
//         console.log("good evening")
//         break
//     default:
//         console.log("good night")
// }