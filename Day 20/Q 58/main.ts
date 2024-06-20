// Q 58: Write a simple program that can take lots of scores and find their average.


function averageScors(...scores: number[]): number {
  let total = scores.reduce((sum , score) => sum + score , 0);
  return total / scores.length
}
console.log(averageScors(90 , 100 , 80 , 60));
