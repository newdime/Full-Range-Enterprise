function copytoDatabase() {
  
  //get properties
  var Tjobs = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('G2').getValue();
  // Logger.log(Tjobs);
  
  // get the database file and open it
  var reportDB = SpreadsheetApp.openById('1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ');
  // get the id of the current report doc
  var currentdoc = SpreadsheetApp.getActive().getId();
  var rdocSheets = SpreadsheetApp.openById(currentdoc).getSheets();
  // get the correlating staff id folder
  var staffId = DriveApp.getFileById(currentdoc).getParents().next().getId();
  
  // set the total range of jobs on all sheets to this file id 
  var dataBS = reportDB.getSheetByName(staffId).getRange(2, 1, (Tjobs/2));
  var vals = dataBS.getValues();
  if (vals[0][0] != "")
  {
    dataBS = reportDB.getSheetByName(staffId).getRange(((Tjobs/2)+2), 1, (Tjobs/2));
    vals = dataBS.getValues();
  }
  vals.forEach(function (val, index) {val[0] = currentdoc;});
  dataBS.setValues(vals); 
  var vallength = vals.length;
  
  /*Logger.log(vallength); 
  Logger.log(dataBS.getValues());  
  Logger.log(vals);*/
  
  // The report sheet names * the total number of jobs on each sheet
  var sheetName = new Array ();
  var jobs = Math.sqrt(vallength);
  var jobit = jobs;
  var t = 0;
  
  // put the sheet names in an array
  rdocSheets.forEach(function (sheet, index){sheetName[index] = sheet.getSheetName(); 
                                             index+1;});
  
  
  var dayRange = reportDB.getSheetByName(staffId).getRange(2, 2, vallength);
  
  
  var dayVals = dayRange.getValues();
  var i = 0;
  Logger.log(vals[0][0]);
  if(reportDB.getSheetByName(staffId).getRange(2, 1).getValue()  != currentdoc)
  {
    var dayRange = reportDB.getSheetByName(staffId).getRange(vallength+2, 2, vallength);
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
  
  Logger.log(jobs);
  Logger.log(vallength);
  Logger.log(dayVals);
  Logger.log(sheetName);
}
