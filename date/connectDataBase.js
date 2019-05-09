function connectDataBase(Date, fileToCopy, staffFoldersId, token) {
  Logger.log("start");
  var token = token;
  var currentdoc = fileToCopy;
  var rdocSheets = SpreadsheetApp.openById(currentdoc).getSheets();
  var staffId = staffFoldersId;
  var current = PropertiesService.getScriptProperties().getProperty('current');
  var prior = PropertiesService.getScriptProperties().getProperty('prior');
  var Plus = PropertiesService.getScriptProperties().getProperty('Plus');
  
  //get properties
  var Tjobs = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('G2').getValue();
  // get the database file and open it
  var reportDB = SpreadsheetApp.openById('1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ');
  var nearWeek = 0;
  var farWeek = 0;
  
  // check if the current file is the far week or near week
  if (token == 0)
  {
    Logger.log(token);
    nearWeek = Date;
  }else
  {
    farWeek = Date;
  }
  
  // put the sheet names in an array
  var sheetName = new Array ([]);
  rdocSheets.forEach(function (sheet, index){
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
  
  // set the far range depending on runfile type
  if (Plus == 1)
  {
    var farRange =  reportDB.getSheetByName(staffId).getRange(3, 2, 1,sheetName[0].length);
    var fardocIdRange = reportDB.getSheetByName(staffId).getRange(3, 1);
    var nearRange = reportDB.getSheetByName(staffId).getRange(2, 2, 1,sheetName[0].length);
    var neardocIdRange = reportDB.getSheetByName(staffId).getRange(2, 1);
  }else
  {
    var farRange = reportDB.getSheetByName(staffId).getRange(2, 2, 1,sheetName[0].length);
    var fardocIdRange = reportDB.getSheetByName(staffId).getRange(2, 1);
    var nearRange = reportDB.getSheetByName(staffId).getRange(3, 2, 1,sheetName[0].length);
    var neardocIdRange = reportDB.getSheetByName(staffId).getRange(3, 1);
  }
  
  //
  if (farWeek != 0)
  {    
    farRange.setValues(sheetName);
    fardocIdRange.setValue(currentdoc);
  }
  
  if (nearWeek != 0)
  {    
    nearRange.setValues(sheetName);
    neardocIdRange.setValue(currentdoc);
  }
  
  Logger.log("finish");
  /*  Logger.log(jobs);
  Logger.log(vallength);
  Logger.log(sheetName);*/
}
