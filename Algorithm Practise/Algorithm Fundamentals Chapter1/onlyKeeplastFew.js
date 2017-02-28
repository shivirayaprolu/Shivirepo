function onlyKeeplastFew(array1,num)
{
    array1.splice(array1,array1.length-num);  
    console.log(array1);
}

onlyKeeplastFew([2,4,6,8,10],4)
