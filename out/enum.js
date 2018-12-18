"use strict";
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 3] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THURS"] = 4] = "THURS";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 5] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 6] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var DaysOfTheWeek100;
(function (DaysOfTheWeek100) {
    DaysOfTheWeek100[DaysOfTheWeek100["SUN"] = 100] = "SUN";
    DaysOfTheWeek100[DaysOfTheWeek100["MON"] = 101] = "MON";
    DaysOfTheWeek100[DaysOfTheWeek100["TUE"] = 102] = "TUE";
    DaysOfTheWeek100[DaysOfTheWeek100["WED"] = 103] = "WED";
    DaysOfTheWeek100[DaysOfTheWeek100["THURS"] = 104] = "THURS";
    DaysOfTheWeek100[DaysOfTheWeek100["FRI"] = 105] = "FRI";
    DaysOfTheWeek100[DaysOfTheWeek100["SAT"] = 106] = "SAT";
})(DaysOfTheWeek100 || (DaysOfTheWeek100 = {}));
var day;
day = DaysOfTheWeek.SUN;
if (day === DaysOfTheWeek.SUN) {
    console.log("DONT NEED TO GO");
}
