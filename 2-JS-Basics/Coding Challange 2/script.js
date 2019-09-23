/**
 John and Mike both play basketball in different teams. In the latest three games
 John,s team scored 89,120 and 103 points, while Mike,s team scored 116 ,94 and 123 points.


 1. Calculate the average score for each team 
 2. Decide which teams wins in average(highest average score), and winner to the console.
    Also include the average score in the output.
 3. Then changes the scores to show different winners. Don,t forget to take into account
    there might be a draw(the same average score)

 4. Extra: Marry Also plays basketball, and her team Scored 97,134 and 105 points. Like
    before, Log the average winner to the console. HINT: you will need the && operator to
    take the decesion. If you can not solve this one, just watch the solution, its 
    no problem :)
 5. Like before, change the scores to generate different winners, keeping in mind there might be draw
 */

 JohnTeamAverage =(89+120+103)/3;

 MikeTeamAverage =(116+94+123)/3;

 MarryTeamAverage =(97+134+105)/3;

 if(JohnTeamAverage>MikeTeamAverage && JohnTeamAverage>MarryTeamAverage)
    {
        console.log('John team win '+JohnTeamAverage+' scored');
    }
    else if(MikeTeamAverage>JohnTeamAverage && JohnTeamAverage>MarryTeamAverage)
    {
        console.log('Mike team win '+MikeTeamAverage+' scored'); 
    }
    else if(MarryTeamAverage>JohnTeamAverage && MarryTeamAverage>MikeTeamAverage)
    {
    console.log('Marry team win '+MarryTeamAverage+' scored');
    }
    else{
     console.log('There is draw');
 }


