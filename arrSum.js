const arr=[4,8,7,33,5,89,100,35,5];
let sum=0
function SumArr(arr)
{
    arr.forEach(el => {
        sum=sum+el
    });
    return sum;
}

console.log(`The sum of the array is: ${SumArr(arr)}`);
