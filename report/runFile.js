function runFile() {
  var Plus = 0;
  // get current date and find out last day of week
  var currentDate = new Date();
  var lastWeekDay = new Date();
  lastWeekDay.setDate(currentDate.getDate()+6);
  
  // get the date range from the prior week
  var priorDate = new Date();
  var priorLastDay = new Date();
  priorDate.setDate(lastWeekDay.getDate()+1);
  priorLastDay.setDate(lastWeekDay.getDate()+7);
  
  // format the date for naming current
  var fCurrentDate = Utilities.formatDate(currentDate, "GMT+11", "dd/MM/yy - ");
  var fLastWeekDay = Utilities.formatDate(lastWeekDay, "GMT+11", "dd/MM/yy");
  
  var nearDate = fCurrentDate + fLastWeekDay;
  Logger.log("near date " + nearDate);
  
  //format the date for naming prior week
  var fPriorDate = Utilities.formatDate(priorDate, "GMT+11", "dd/MM/yy - ");
  var fPriorLastDay = Utilities.formatDate(priorLastDay, "GMT+11", "dd/MM/yy");
  var farDate = fPriorDate + fPriorLastDay;
  Logger.log("far date " + farDate);
  
  // set near and far dates
  PropertiesService.getScriptProperties().setProperty('nearWeek', nearDate);
  PropertiesService.getScriptProperties().setProperty('farWeek', farDate);
  PropertiesService.getScriptProperties().setProperty('current', currentDate );
  PropertiesService.getScriptProperties().setProperty('Plus', Plus );
  var token = 1;
  archiveOldreports(token);
  
  //copyReportTemplate();
}
