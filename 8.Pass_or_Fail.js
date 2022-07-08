// Q8. Pass or Fail

// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.

// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).

// Note: You have to complete isAllPass function. No need to take any input.

const isAllPass = (N, Arr) => 
{
    let people=0;
    Arr.forEach(function(element) {
        if(element >= 32){
        people+=1;
        }
        });
        if(people === N){
            return 'YES';
        }
        else{
            return 'NO';
        }
};
console.log(isAllPass( 7, [11, 45, 65, 76, 87, 98, 88] ));