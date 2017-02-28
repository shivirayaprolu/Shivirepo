function fitThefirstValue(array1)
{
  if(array1[0]<array1.length)
  {
    console.log("Too small");
  }
  else if(array1[0]>array1.length)
  {
      console.log("Too Big");
  }
  else
  {
    console.log("Just right");
  }
}

fitThefirstValue([3,4,]);
