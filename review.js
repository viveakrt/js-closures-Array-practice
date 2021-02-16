const newArray = [1,2,3,4,5,6,8]

// //Sum of the squires of the even numbers
// function squire(x){
//     return x*x
// } 
// let array=newArray.filter((i) => i%2 === 0).map((squire)).reduce((acc, next)=> acc+next)
// console.log(array)

let obj = {odd:0,even:0}

checkIs(newArray[0])

newArray.reduce((c,next) => checkIs(next))

function checkIs(next){
    
    if(next%2 == 0){
        obj.even = obj.even + next;
    }else{
    obj.odd += next;
    }
}

    
console.log(obj)