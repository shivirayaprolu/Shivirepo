function mostAcurateGrade(num1)
{
    if(num1>=90)
    {
      console.log("Score: "+num1+". Grade: A");
    }
    else if(num1>=80 && num<=89)
    {
          if((num1==88)||(num1==89))
          {
            console.log("Score: "+num1+". Grade: B+");
          }
          else if((num1==81)||(num1==82))
          {
            console.log("Score: "+num1+". Grade: B-");
          }
          else
          {
            console.log("Score: "+num1+". Grade: B");
          }
    }
    else if(num1>=70 && num<=79)
    {
        if((num1==78)||(num1==79))
        {
          console.log("Score: "+num1+". Grade: C+");
        }
        else if((num1==71)||(num1==72))
        {
          console.log("Score: "+num1+". Grade: C-");
        }
        else
        {
          console.log("Score: "+num1+". Grade: C");
        }
    }
    else if(num1>=60 && num1<=69)
    {
        if((num1==68)||(num1==69))
        {
          console.log("Score: "+num1+". Grade: D+");
        }
        else if((num1==61)||(num1==62))
        {
          console.log("Score: "+num1+". Grade: D-");
        }
        else
        {
          console.log("Score: "+num1+". Grade: D");
        }
    }
    else
    {
      console.log("Score: "+num1+". Grade: F");
    }
}

letterGrade(63)
