
// filter selects elements based on a condition and returns an array with the elements that fullfilled the condition.

const numbers = [1,5,6,9,10]

const players = [78,79,80,81,58,46,47,89,45,56];
// const selected = players.filter(n=>n>70);
// const selected = players.filter(n=>n>50);
const selected = players.filter(n=>n%2 ===1);
console.log(selected)

const friends=['TON','TOMMy','NAFy','FILLyy','UPdd','THEfff'];
const oddFriends = friends.filter(f=> f.length >4);
console.log(oddFriends);

