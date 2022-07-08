// Q2. Find the Sum.

// Write a program which takes an array as input from the user and find out the sum of the array elements.

// Note: You have to complete Find_Sum. No need to take any input.

const Find_Sum = (array, N) => 
{
    let sum = 0;
    for(k = 0; k < N; k++)
    {
        sum = sum + array[k]
    }
    return sum;
};
console.log(Find_Sum( [1,2,3,4,5], 5 ));