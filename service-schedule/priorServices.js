function priorServices() {
  ScriptApp.newTrigger("checkEvents")
  .timeBased()
  .everyDays(1)
  .create();
}

function checkEvents(){
  
  // get the schedule table
  var schedule = SpreadsheetApp.openById('1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA').getSheetByName('schedule').getNamedRanges();
  
  // get the due date range 
  var i = 0;
  while (schedule[i].getName() != 'DUEMONTHLY')
  {
    i++
  }
  
  //Logger.log(schedule[i].getRange(1, 1, schedule[i].getRange().getValues());
  
 /* //get the include range
  var n = 0;
  while (schedule[n].getName() != 'MONTHLY')
  {
    n++
  }
  
  var monthly = schedule[i].getRange().getValues();
  var include = schedule[n].getRange().getValues();
  
  // add the new due date to the due range
  for(var t  = 1; t < include.length; t++)
  {
    if (include[t][0] != 0)
    {
      monthly[t].splice(0,1,details[0]);
    }
  }
  schedule[i].getRange().setValues(monthly);*/
  
}
