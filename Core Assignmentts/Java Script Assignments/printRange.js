function printRange(num1,num2,num3)
{
 var startpoint=num1;
 var endpoint=num2;
 var skipamount=num3;

 if (endpoint==0)
 {
   endpoint=startpoint;
   startpoint=0;
 }
 if(skipamount==0)
 {
   skipamount=1;
 }

 for(var i=startpoint;i<endpoint;i=i+skipamount)
 {
   console.log(i);
 }
}

printRange(-25,10,2);
