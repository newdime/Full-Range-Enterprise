function name2() {
  
  //get properties
  // SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('P2').setValue("Reports Running");
  // SpreadsheetApp.flush();
  
  var staffFoldersId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                        "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "17qnCBk-WiQsraBPW_Esnga8cqKTAFXBu", 
                        "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  
  
  var token = 0;
  
  for (var i in staffFoldersId)   
  {
    var folder = DriveApp.getFolderById(staffFoldersId[i]);
    
    // set file to be coppied ie the prior lagging report card
    var files = folder.getFiles();
    while (files.hasNext()) 
    {
      var fileName = files.next();
      
      if (fileName.getName() == "29/04/19 - 05/05/19")
      {
        
        var dates = date(token);
        var name = dates[dates.length-1];
        dates.splice(-1,1);
        var sheetNames =  dates;
        Logger.log(name);
        Logger.log(sheetNames);
        
        
        var ss = SpreadsheetApp.openById(fileName.getId());
        var sheets = ss.getSheets();
        for (var i in sheets)
        {
          sheets[i].setName(sheetNames[i]);
        }       
      }
    }
  }
  
  var token = 0;
  var dates = date(token);
  
  var name = dates[dates.length-1];
  dates.splice(-1,1);
  var sheetNames =  dates;
  Logger.log(name);
  Logger.log(sheetNames);
  
}
