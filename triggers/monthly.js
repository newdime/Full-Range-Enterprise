function monthlyTrigger() {
 ScriptApp.newTrigger('weekly')
.timeBased()
.onWeekDay(ScriptApp.WeekDay.MONDAY)
.create();
}

function monthly(){
}