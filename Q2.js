var obj=process.argv[2];
var path= process.argv[3];
var arr=new Array();

for(i=0;i<path.length;i++)
{
    
        arr.push(path[i]);
    
}
var sumi;
for(i=0;i<arr.length;i++)
{
        sumi+=arr[i];
}
console.log(sumi);
/*

var l=obj.name;
if(l===undefined)
{
    console.log("Sorry");
}
else
{
    console.log(l);
}
console.log(process.argv);
*/