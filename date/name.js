function name(reportID) {
  
  var reportID = reportID;
  
  var ss = SpreadsheetApp.openById(reportID);
  
  // get the previous week date
  var token = 2;
  var previousWeek = date(token, 0);
  Logger.log(previousWeek);
  
  // change the name of the previous week
  if (ss.getName() == previousWeek)
  {
    token = 1;
    var name = date(token, 0);
    var sheetNames =  date(token, 1);
    Logger.log(name);
    Logger.log(sheetNames);
    
    DriveApp.getFileById(reportID).setName(name);
    
    var sheets = ss.getSheets();
    for (var i in sheets)
    {
      sheets[i].setName(sheetNames[i]);
    }   
  }
  
  // get the current date
  if (ss.getName() == 'reportTemplateNear')
  {
    var token = 3;
    var currentWeek = date(token, 0);
    Logger.log(currentWeek);
    
    // change the name of the previous week
    if (ss.getName() == currentWeek)
    {
      token = 3;
      var name = date(token, 0);
      var sheetNames =  date(token, 1);
      Logger.log(name);
      Logger.log(sheetNames);
      
      DriveApp.getFileById(reportID).setName(name);
      
      var sheets = ss.getSheets();
      for (var i in sheets)
      {
        sheets[i].setName(sheetNames[i]);
      }   
    }
  }
  
  // get the forward date
  if (ss.getName() == 'reportTemplateFar')
  {
    var token = 1;
    var farWeek = date(token, 0);
    Logger.log(farWeek);
    
    // change the name of the previous week
    if (ss.getName() == farWeek)
    {
      token = 1;
      var name = date(token, 0);
      var sheetNames =  date(token, 1);
      Logger.log(name);
      Logger.log(sheetNames);
      
      DriveApp.getFileById(reportID).setName(name);
      
      var sheets = ss.getSheets();
      for (var i in sheets)
      {
        sheets[i].setName(sheetNames[i]);
      }   
    }
  }
  
  // return 0 for complete
  return 
}
