function trigger (){
ScriptApp.newTrigger('weekly')
.timeBased()
.onWeekDay(ScriptApp.WeekDay.MONDAY)
.create();
}

function weekly (){
  /* create new data base entries for:
      -  reports
      -  schedule
      -  resolver                   */
  // reports
  data_base_scripts().reportDatabaseEntry();
  // schedule
  data_base_scripts().scheduleDatabaseEntry();
  // resolver
  data_base_scripts().resolveDatabaseEntry(); 
  
  /* archive current data, wipe reports, schedules and resolver.
  rename for this week/month */
  // reports
  staff_reports().runFilePlus();
  // schedule
  //schedule_scripts().runFile();
  // resolver
  //resolve_scripts().runFile();
}
