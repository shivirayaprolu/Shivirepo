function letterGrade(num1)
{
    if(num1>=90)
    {
      console.log("Score: "+num1+". Grade: A");
    }
    else if(num1>=80 && num<=89)
    {
      console.log("Score: "+num1+". Grade: B");
    }
    else if(num1>=70 && num<=79)
    {
      console.log("Score: "+num1+". Grade: C");
    }
    else if(num1>=60 && num<=69)
    {
      console.log("Score: "+num1+". Grade: D");
    }
    else
    {
      console.log("Score: "+num1+". Grade: F");
    }
}

letterGrade(3)
