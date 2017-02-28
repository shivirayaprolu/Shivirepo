function getAndprintAverage(array1)
{   var sum=0;
    var average=0;
    for(var x=0;x<array1.length;x++)
    {
        sum=sum+array1[x];
    }
    average=sum/(array1.length);
    console.log("The average of the values in this array "+array1+" is "+average);
}

getAndprintAverage([2,3,4,5,6,7])
