function runFilePlus() {
  //get properties
  SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('P2').setValue("Reports Running");
  SpreadsheetApp.flush();
  // this runfile runs when updating the report card dates at a 2 week interval
  // in this case farWeek represents the week behind the current reporting date
  // therefore the farWeek is to be updated and is the lagging report cycle
  
  // if the date upon execution is the 8/04/19 the expected input is 1/04/19-7/04/19 && 25/03/19-31/03/19
  // and the file to be renamed is 25/03/19-31/03/19
  
  // Plus idetifies the reverse relationship between near and far weeks
  var Plus = 1;
  
  // get current date and find out last day of week
  // this is the new date range to set the prior report card behind the lagging report
  var currentDate = new Date();
  var lastWeekDay = new Date();
  lastWeekDay.setDate(currentDate.getDate()+6);
  
  // get the date range from the prior week
  // this identifies the the lagging report card date range so not to overwrite it
  var priorDate = new Date();
  var priorLastDay = new Date();
  priorDate.setDate(priorDate.getDate()-7);
  priorLastDay.setDate(priorLastDay.getDate()-1);
  
  // format the date for renaming the targeted report card
  var fCurrentDate = Utilities.formatDate(currentDate, "GMT+11", "dd/MM/yy - ");
  var fLastWeekDay = Utilities.formatDate(lastWeekDay, "GMT+11", "dd/MM/yy");
  var nearDate = fCurrentDate + fLastWeekDay;
  Logger.log("near date " + nearDate);
  
  //format the date for the lagging week
  var fPriorDate = Utilities.formatDate(priorDate, "GMT+11", "dd/MM/yy - ");
  var fPriorLastDay = Utilities.formatDate(priorLastDay, "GMT+11", "dd/MM/yy");
  var farDate = fPriorDate + fPriorLastDay;
  Logger.log("far date " + farDate);
  
  // set near and far dates
  PropertiesService.getScriptProperties().setProperty('nearWeek', nearDate);
  PropertiesService.getScriptProperties().setProperty('farWeek', farDate);
  PropertiesService.getScriptProperties().setProperty('current', currentDate );
  PropertiesService.getScriptProperties().setProperty('prior', priorDate );
  PropertiesService.getScriptProperties().setProperty('Plus', Plus );
  
  if(currentDate.valueOf()>priorDate.valueOf()){Logger.log("yes");}
  
  var token = 1;
  
  archiveOldreports(token);
  
  //copyReportTemplate();
  //get properties
  SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('P2').setValue("Reports Complete");
  SpreadsheetApp.flush();
}
