enum DaysOfTheWeek {
    SUN, MON, TUE, WED, THURS, FRI, SAT
}

enum DaysOfTheWeek100 {
    SUN = 100, MON, TUE, WED, THURS, FRI, SAT
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.SUN;

if(day === DaysOfTheWeek.SUN){
    console.log("DONT NEED TO GO");
}