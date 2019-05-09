function initial(){
  
  ScriptApp.newTrigger("trigger")
  .timeBased()
  .atDate(2019, 4, 29)
  .create();
}


function trigger(){
  
  ScriptApp.newTrigger("runFilePlus")
  .timeBased()
  .everyWeeks(2)
  .onWeekDay(ScriptApp.WeekDay.MONDAY)
  .atHour(0)
  .create();
}
