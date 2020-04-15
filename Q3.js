
//Function expression
 var result=function strContains(string,character)
            {

                var check;
                var arr=new Array();
                for(i=0;i<string.length;i++)
                {
                    arr[i]=string[i];
                }



                //Creating a Map
                let myMap=new Map();
                for(i=0;i<arr.length;i++)
                {   var c=arr[i];
                        if(myMap.has(c))                //checks if the given key is present
                {
                        var v=myMap.get(c);             //gets the value for key
                        myMap.set(c,++v);
                }
                        else
                {   myMap.set(c,1);                     //sets the value for key

                }
                }

                if(myMap.has(character))
                    {

                        check=true;
                    }                   
                else{
                        check=false;
                    }
            return check;
            }

//printing the result
console.log(result("I name is yashi",'@'));