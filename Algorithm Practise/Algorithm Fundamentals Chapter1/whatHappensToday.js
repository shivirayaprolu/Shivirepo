/*Kenny tries to stay safe, but somehow everyday something happens.
If there is a
10% chance of volcano,
15% chance of tsunami,
20% chance of earthquake,
25% chance of blizzard, and
30% chance of meteor strike, write function whatHappensToday() to print the outcome.
*/

function whatHappensToday()
{
  var chances=Math.floor(Math.random()*100);
  //console.log(chances);
    if(chances>=0 && chances<=10)
    {
      console.log("Kenny stuck in a Volcano!!!");
    }
    else if(chances>10 && chances<=25)
    {
      console.log("Kenny stuck in a Tsunami!!!");
    }
    else if(chances>25 && chances<=45)
    {
      console.log("Kenny stuck in a Earthquake!!!");
    }
    else if(chances>45 && chances<=70)
    {
      console.log("Kenny stuck in a Blizzard!!!");
    }
    else
    {
      console.log("Kenny stuck in a Meteor!!!");
    }
}

poorKenny();
