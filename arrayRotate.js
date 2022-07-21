



// Array rotation
//  right rotation
  newFunction();

function newFunction() {
    b[(len + i - (k % len)) % len] = a[i];
    //left rotation
    c[(i + k) % len] = a[i];
}
    //  where k is the number of rotation
    //  len is the array of length




    // let a = [1,2,3,4,5]
// let k = 1;
// let len = a.length
// let b = [];

// k = k%len;
// for(let i=0;i<len;i++){
// if(i<k)
// {
//     b[len+i-k] = a[i];
// }
// else
// {
//     b[i-k] = a[i];
// }
// }

// console.log(b);




// let a = [1,2,3,4,5];
// let b = [];
// let len = a.length

// let k = 3;

// k = k%len;

// for(let i=0;i<len;i++)
// {
// if(i<k){
//     b[len+i-k] = a[i];
//     // 5+0-3 =2
//     // 5+1-3 =3
//     // 5+2-3 =4
    
// }
// else{
//     b[i-k] = a[i]
//     // 3-3 =0
//     // 4-3 =1
// }




// }

// console.log(b)

// let a = [1,2,3,4,5];
// let b = [];
// let len = a.length

// let k = 3;


// for(let i=0;i<len;i++)
// {
//     b[(len+i-k)%len] = a[i];
//     // 5+0-3 =2
//     // 5+1-3 =3
//     // 5+2-3 =4
// }

// console.log(b)

//  valid solution

// let a = [1,2,3];
// let b = [];
// let len = a.length
// let  k = 4;

// if(k <= len){
// for (let i = 0; i < len; i++){
    
//     b[(len+i -k)%len] = a[i];


// }
// }
// else{
//     console.log("error")
// }



let a = [1,2,3,4,5,6];
let b = [];
let len = a.length
let  k = 4;
let c =[]; 

for (let i = 0; i < len; i++){
    
    b[(len+i - (k%len))%len] = a[i];
    c[(i+k)%len] = a[i];
    


}


console.log(`array right rotation is  ${b}`)
console.log(`array left rotation is  ${c}`)







