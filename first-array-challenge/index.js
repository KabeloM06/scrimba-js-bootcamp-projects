// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [

]

favouriteSongs.push("Confessions");
favouriteSongs.push("Stan");
favouriteSongs.push("Ave Maria");



console.log(`log out last array: ${favouriteSongs[favouriteSongs.length-1]}`);

favouriteSongs.pop()

console.log(`log out last array after pop: ${favouriteSongs[favouriteSongs.length-1]}`);