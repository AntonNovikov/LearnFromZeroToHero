// https://learn.javascript.ru/generator

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
//   }
  
//   let generator = generateSequence();
  
//   let one = generator.next();

// console.log(JSON.stringify(one))  

function* makeRangeIterator(start = 0, end = Infinity, step = 1){
    let iteratorCount = 0;
    for(let i =  start; i< end; i+= step){
        iteratorCount++;
        yield i;
    }
    return iteratorCount;
}

let b = makeRangeIterator(1,12,2)

let three = b.next();


console.log(b.next())
console.log(b.next())
console.log(b.next())
