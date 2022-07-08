// Q3. Count Occurrences

// You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

// Note: You have to complete findCount function. No need to take any input.

const findCount = (N, K, Arr) =>
{
    let count = 0;
    for(let k = 0; k <= N; k++)
    {
        if( K == Arr[k])
        count++
    }
    return count;
}
console.log(findCount( 4, 3, [3,3,1,2] ));