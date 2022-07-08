// Q9. Unique Color Shirt

// The first line of the input contains an integer Ndenoting the number of shirts in the wardrobe.

// The second line of the input contains N integers C1,C2,C3,C4,...,CN color of shirts (separated by space).

// Note: As there are many shades of a color so consider integers as a color name.
// i.e, color of shirt is 0,1,2, … , N.

function Unique_Shirts (arr,N) {
    let shirts = 0;
    for(let x=0; x<N; x++)
    {
        let same = 0;
        for(let y=0; y<N; y++ )
        {
            if(arr[x] === arr[y])
            {
                same++
            }
        }
    if(same === 1)
        {
            shirts++
        }
    }
    return shirts;
}
console.log(Unique_Shirts( [3,2,4,1,2,3], 6 ));