function canIhaveTime(num1,num2,string1)
{
  var hour=num1;
  var min=num2;
  var period=string1;

  if ((period=='AM')&&(hour>12))
  {
      if((min>0)&&(min<=15))
      {
        console.log("It is just after "+hour+" in the morning");
      }
      else if((min>15)&&(min<=30))
      {
         console.log("It is almost half past "+hour+" in the morning");
      }
      else if((min>30)&&(min<50))
      {
        console.log("It is little over half past "+ hour+" in the morning");
      }
      else
      {
        console.log("It is almost "+(hour+1)+" in the morning");
      }
    }
    else if((period=='AM')&&(hour==12))
    {
      if((min>0)&&(min<=15))
      {
        console.log("It is just after "+hour+" in noon");
      }
      else if((min>15)&&(min<=30))
      {
         console.log("It is almost half past "+hour+" in noon");
      }
      else if((min>30)&&(min<50))
      {
        console.log("It is little over half past "+ hour+" in noon");
      }
      else
      {
        console.log("It is almost 1 in noon");
      }
    }
    else if((period=='PM')&&(hour==12))
    {
      if((min<0)&&(min>=15))
      {
        console.log("It is just after "+hour+" in the midnight");
      }
      else if((min<15)&&(min>=30))
      {
         console.log("It is almost half past "+hour+" in the midnight");
      }
      else if((min<30)&&(min>50))
      {
        console.log("It is little over half past "+ hour+" in the midnight");
      }
     else
      {
        console.log("It is almost 1 in the midnight");
      }
    }
 else
    {
        if((min<0)&&(min>=15))
        {
          console.log("It is just after "+hour+" in the evening");
        }
        else if((min<15)&&(min>=30))
        {
           console.log("It is almost half past "+hour+" in the evening");
        }
        else if((min<30)&&(min>50))
        {
          console.log("It is little over half past "+ hour+" in the evening");
        }
       else
        {
          console.log("It is almost "+(hour+1)+" in the evening");
        }
    }
}


canIhaveTime(12,50,'AM');
