function nameReports(fileToCopy, token) {
  var token = token;
  var nearWeek = PropertiesService.getScriptProperties().getProperty('nearWeek');
  var farWeek = PropertiesService.getScriptProperties().getProperty('farWeek');
  var Plus = PropertiesService.getScriptProperties().getProperty('Plus');
  var currentDate = new Date();
  
  var fileToName = fileToCopy;
  
  var staffFoldersId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                        "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "1I8IC5yvkZvUqIXk5gW7a2loyi_9-84pd", 
                        "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  // Get active book and sheet
  var ss = SpreadsheetApp.openById(fileToName);
  //var activeworkbook = ss;
  var sheets = ss.getSheets();
  
  // when token is 0 set name to near week
  if (token == 0)
  {
    ss.rename(nearWeek);
    var fLoopDate = new Date();
    var newDate
    var sheetName
    var dateInc = 1;
    var i = 0, n = 0;
    
    for (n in sheets)
    {
      if(sheets[n].getName() == 'properties')
      {break;}
      sheets[n].setName('name' + n);
    } 
    // loop through sheets in workbook
    for (i in sheets) 
    {   
      if(sheets[i].getName() == 'properties')
      {break;}
      
      //format date for nameing
      newDate = Utilities.formatDate(fLoopDate, "GMT+11", "dd/MM/yy");
      
      // get active sheet name
      sheetName = sheets[i].getSheetName();
     // Logger.log("name" + sheetName);
    //  Logger.log("date" + newDate);
      
      //compare sheet name to date
      // if(sheetName != newDate)
      //{ 
      //name the sheet
      //activesheet[i].setName("name"); 
      
      sheets[i].setName(newDate); 
      //}
      
      // increment date
      fLoopDate.setDate(currentDate.getDate()+dateInc);
      dateInc++
        //Logger.log(i);
        
    }
  }
  
  if (token == 1)
  {
    ss.rename(farWeek);
    var fLoopDate = new Date();
    fLoopDate.setDate(fLoopDate.getDate()+7);
    var newDate
    var sheetName
    var dateInc = 1;
    var i = 0, n = 0;
    
    for (n in sheets)
    {
      if(sheets[n].getName() == 'properties')
      {break;}
      sheets[n].setName('name' + n);
    } 
    // loop through sheets in workbook
    for (i in sheets) 
    {   
      
      //format date for nameing
      newDate = Utilities.formatDate(fLoopDate, "GMT+11", "dd/MM/yy");
      
      // get active sheet name
      sheetName = sheets[i].getSheetName();
     // Logger.log("name" + sheetName);
     // Logger.log("date" + newDate);
      
      //compare sheet name to date
      // if(sheetName != newDate)
      //{ 
      //name the sheet
      //activesheet[i].setName("name"); 
      if(sheets[i].getName() == 'properties')
      {break;}
      sheets[i].setName(newDate); 
      //}
      
      // increment date
      fLoopDate.setDate(currentDate.getDate()+7+dateInc);
      dateInc++
        //Logger.log(i);
        
    }
  }
  
  
  
}
