function dataEntry(data) {
  
  var dataIn = [];
  dataIn[0] = data;
  
  /*var scheduleID = '1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA';
  var serviceSchedule = SpreadsheetApp.openById(scheduleID);
  var serviceSheets = serviceSchedule.getSheetByName('schedule');*/
  
  /*var scheduleID = '1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA';
  var serviceSchedule = SpreadsheetApp.openById(scheduleID);
  var serviceSheets = serviceSchedule.getSheetByName('schedule');*/
  
  // get the database sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var site = ss.getRangeByName('SITE').getValues();
  
  // insert a row if need 
  if (site[1][0] !== null)
  {
    Logger.log(site[1]);
    ss.insertRowBefore(2);
  }
  
  Logger.log(data);
  
  // set the values 
  var range = ss.getActiveSheet().getRange(2, 1, 1, 6);
  range.setValues(dataIn);
  
  // prepare data for scheduling
  var details = ss.getActiveSheet().getRange(2, 1, 1, 11).getValues();
  
  // set due dates
  
  
  // schedule 
  //makeEvents(details);
  
}

function dueDates(){
}
