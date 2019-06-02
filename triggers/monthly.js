function monthlyTrigger() {
 ScriptApp.newTrigger('monthly')
.timeBased()
.atDate(2019, 6, 3)
.everyWeeks(4)
.onWeekDay(ScriptApp.WeekDay.MONDAY)
.create();
}

function monthly(){
}