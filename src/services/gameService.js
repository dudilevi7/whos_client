const shuffleArray = array => {
    let currentIndex = array.length , tempValue , randomIndex;
  
    while (currentIndex!== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
}
const removeRandomItem = (array,item) => {
    let rnd = Math.floor(Math.random()*4)
    while (array[rnd] === item){
        rnd = Math.floor(Math.random()*4)
    }
    return array[rnd];
}

export default {shuffleArray, removeRandomItem}