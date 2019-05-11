function yytoDatabase() {
  
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
  var dataIDset = dataBase.getSheetByName(dataBaseName).getRange(2, 1, totalJobsPC);
  var vals = dataIDset.getValues();
  
  if (vals[0][0] != "")
  {
    dataIDset = dataBase.getSheetByName(dataBaseName).getRange((totalJobsPC+2), 1, totalJobsPC);
    vals = dataIDset.getValues();
  }
  
  vals.forEach(function (val, index) {val[0] = sourceDoc;});
  dataIDset.setValues(vals); 
  var vallength = vals.length;
  Logger.log('vallength: ' + vallength);
 
  
  // The schedule sheet names * the total number of jobs on each sheet
  var sheetName = new Array ();
  var jobs = vallength/totalWeeksScheduled;
  var jobit = jobs;
  var t = 0;
  
  // put the sheet names in an array
  sourceSheets.forEach(function (sheet, index){sheetName[index] = sheet.getSheetName(); 
                                             index+1;});
  
  var dayRange = dataBase.getSheetByName(dataBaseName).getRange(2, 2, vallength);
  var dayVals = dayRange.getValues();
  
  var i = 0;
  Logger.log(vals[0][0]);
  
  if(dataBase.getSheetByName(dataBaseName).getRange(2, 1).getValue()  != sourceDoc)
  {
    var dayRange = dataBase.getSheetByName(dataBaseName).getRange(vallength+2, 2, vallength);
    var dayVals = dayRange.getValues();
    i = vallength;
    jobit = i + jobs;
    vallength = vallength*2;
  }
  
  Logger.log(dayVals);
  var n = 0;
  for (i; i < vallength; i++)
  {
    if (i < jobit)
    {
      dayVals[n][0] = sheetName[t]; 
      n++
    }
    else
    {
      jobit = jobit + jobs;
      i = i - 1;
      t++
    }
  }
  
  dayRange.setValues(dayVals);
}

