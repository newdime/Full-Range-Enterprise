function toDatabase() {
  
  //get properties
  var properties = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing')
  var DaysPW= properties.getRange('H2').getValue();
  var JobsPD = properties.getRange('I2').getValue();
  var staff = properties.getRange('O2').getValue();
  var totalWeeksScheduled = properties.getRange('M2').getValue();
  Logger.log('DaysPW: ' + DaysPW);
  Logger.log('JobsPD: ' + JobsPD);
  Logger.log('staff total: ' + staff);
  
  // calculate total jobs per week (per sheet)
  var totalJobsPC = staff*JobsPD*DaysPW*totalWeeksScheduled;
  Logger.log('total jobs per cycle: ' + totalJobsPC);
  
  // get the database file and open it
  var dataBase = SpreadsheetApp.openById('1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q');
  var dataSheets = dataBase.getSheets();
  var dataBaseName = 'schedule';
  
  // get the id of the current schedule doc.. get the sheets
  var sourceDoc = SpreadsheetApp.getActive().getId();
  var sourceSheets = SpreadsheetApp.openById(sourceDoc).getSheets();
  
  // set the total range of jobs on all sheets to this file id 
  // if there is already data from a previous schedule assigned to the first range go to range two
  var dataIDset = dataBase.getSheetByName(dataBaseName).getRange(2, 1);
  var vals = dataIDset.getValues();
  
  if (vals[0][0] != "")
  {
    dataIDset = dataBase.getSheetByName(dataBaseName).getRange(3, 1);
    vals = dataIDset.getValues();
  }
  Logger.log(vals);
  dataIDset.setValue(sourceDoc); 
  
  // The schedule sheet names * the total number of jobs on each sheet
  var sheetName = new Array ([]);
  sourceSheets.forEach(function (sheet, index){
    if (sheet.getName() == 'properties')
    {
      index + 1;
    }
    else
    {
      sheetName[0][index] = sheet.getSheetName(); 
      index+1;
    }
  });
  
  if(dataBase.getSheetByName(dataBaseName).getRange(2, 1).getValue()  != sourceDoc)
  {
    var dayRange = dataBase.getSheetByName(dataBaseName).getRange(3, 2, 1,sheetName[0].length);
    Logger.log(dayRange.getValues());
    dayRange.setValues(sheetName);
  }
  else
  {
    var dayRange = dataBase.getSheetByName(dataBaseName).getRange(2, 2, 1,sheetName[0].length);
    Logger.log(dayRange.getValues());
    dayRange.setValues(sheetName);
  }
  
}

