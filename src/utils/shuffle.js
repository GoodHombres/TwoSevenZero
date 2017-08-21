export default function shuffle(list) {
  let counter = list.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = list[counter];
    list[counter] = list[index];
    list[index] = temp;
  }

  return list;
}
