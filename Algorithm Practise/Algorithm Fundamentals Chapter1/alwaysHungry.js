function alwaysHungry(array1)
{
  var count=0;
      for(var i=0;i<array1.length;i++)
      {
        if(array1[i]=='food')
        {
          console.log("Yummy!!!!");
          count++;
        }
      }
  if(count==0)
    {
      console.log("Im Hungry");
    }
}

alwaysHungry(['eat','your','apple','food'])
