//Taking input as Command line arguments.
const input=process.argv;
const arr=new Array();                   //Orginal Array
const sqaureNumb=new Array();            //Sqaured Array
var v;
for(i=2;i<input.length;i++)
{
    arr[i-2]=parseInt(input[i]);
}

let myMap=new Map();                    //Creating map instance
for(i=0;i<arr.length;i++)
{
    myMap.set(arr[i],arr[i]*arr[i]);   //setting the value in Hashmap
    v=myMap.get(arr[i]);
    sqaureNumb[i]=v;                    //Setting the sqaured number
    
}


console.log(arr);
console.log(sqaureNumb);