// Q1. Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.

const Find_Prod = (array, N) => 
{
    let product = 1;
    for(let k = 0; k < N; k++)
    {
        product = product * array[k];
    }
    return product;
};
console.log(Find_Prod( [1, 2, 3, 4, 5] , 5) );