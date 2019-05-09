function archiveOldreports(token) {
  
  var token = token;
  var nearWeek = PropertiesService.getScriptProperties().getProperty('nearWeek');
  var farWeek = PropertiesService.getScriptProperties().getProperty('farWeek');
  var currentWeek = PropertiesService.getScriptProperties().getProperty('current');
  var Plus = PropertiesService.getScriptProperties().getProperty('Plus');
  
  var staffFoldersId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                        "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "17qnCBk-WiQsraBPW_Esnga8cqKTAFXBu", 
                        "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  var staffFolderArchive = ["1zDXNWy2GERhE7R7xAYvl5cS6LTrBu3-z", "1Yp06lwPM3v8hZ861YsLtuCWeWE5Kccgv", "1e1KJBhschXPB7ADrA6umQT_acx3WgZxy", 
                            "1LexvI3ExOR3u8qRD_v_qj-QZGHruKPF7","1VeiGbTO_v4cz39w1DexWnqHtI_DAnAsj", "1ciCbIGKThFpPXURsgfJvaAbVg870l8Zm", 
                            "1fROxe1CsXOWebcc5gqAYdOl1zau-dQYJ", "1nEpdY_pr9w-qLknsJYE6zhuQkIXmwmdn"];
  Logger.log("archiver");
  
  // loop through array of staff folders and make a copy of all the report cards and move them to the archive
  for (var i in staffFoldersId)   
  {
    var folder = DriveApp.getFolderById(staffFoldersId[i]);
    var archiveFolder = DriveApp.getFolderById(staffFolderArchive[i]);
    
    // set file to be coppied ie the prior lagging report card
    var files = folder.getFiles();
    while (files.hasNext()) 
    {
      var fileName = files.next();
      Logger.log("files");
      
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////// IF STARTING FRESH ///////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if(Plus != 1)
      {
      // set to near week
      if (fileName.getName() == 'reportTemplateFar')
      {
        token = 1;
        var fileToCopy = fileName.getId();
        // copy file
       // DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),archiveFolder);
        
        // copy contents
        var newSheet = SpreadsheetApp.create(fileName.getName());
        var newID = newSheet.getId();
        archiveFolder.addFile(DriveApp.getFileById(newID));
        var copyDat = SpreadsheetApp.openById(fileToCopy).getSheets();
        var toDat = SpreadsheetApp.openById(newID).getSheets();
         //Drive.Files.remove(newSheet);
        var setRange = 1;
        for (var sIndex in copyDat)
        {
          var vals = copyDat[sIndex].getRange(1, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).getValues();
          toDat[0].getRange(setRange, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).setValues(vals);
          setRange = toDat[0].getLastRow() +  1;
        }
        
        wipeData(fileToCopy);
        nameReports(fileToCopy, token);
        connectDataBase(farWeek, fileToCopy, staffFoldersId[i], token);
 
      }
      // set to nearWeek
      if (fileName.getName() == 'reportTemplateNear')
      {
        token = 0;
        var fileToCopy = fileName.getId();
        // copy file
       // DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),archiveFolder);
        
            // copy contents
        var newSheet = SpreadsheetApp.create(fileName.getName());
        var newID = newSheet.getId();
        archiveFolder.addFile(DriveApp.getFileById(newID));
        var copyDat = SpreadsheetApp.openById(fileToCopy).getSheets();
        var toDat = SpreadsheetApp.openById(newID).getSheets();
         //Drive.Files.remove(newSheet);
        var setRange = 1;
        for (var sIndex in copyDat)
        {
          var vals = copyDat[sIndex].getRange(1, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).getValues();
          toDat[0].getRange(setRange, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).setValues(vals);
          setRange = toDat[0].getLastRow() +  1;
        }
        
        wipeData(fileToCopy);
        nameReports(fileToCopy, token);
        connectDataBase(nearWeek, fileToCopy, staffFoldersId[i], token);
      }
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////// IF UPDATING /////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      if (Plus == 1)
       {
         if (fileName.getName() == farWeek)
         {
           token = 1;
           var fileToCopy = fileName.getId();
           connectDataBase(farWeek, fileToCopy, staffFoldersId[i], token);
         }
       }
      
      if (Plus == 1)
      {
        token = 0;
        if (fileName.getName() != farWeek && fileName.getName() != nearWeek)
        {
          var fileToCopy = fileName.getId();
        // copy file
        //DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),archiveFolder);
          
              // copy contents
        var newSheet = SpreadsheetApp.create(fileName.getName());
        var newID = newSheet.getId();
        archiveFolder.addFile(DriveApp.getFileById(newID));
        var copyDat = SpreadsheetApp.openById(fileToCopy).getSheets();
        var toDat = SpreadsheetApp.openById(newID).getSheets();
          // Drive.Files.remove(newSheet);
        var setRange = 1;
        for (var sIndex in copyDat)
        {
          var vals = copyDat[sIndex].getRange(1, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).getValues();
          toDat[0].getRange(setRange, 1, copyDat[sIndex].getLastRow(), copyDat[sIndex].getLastColumn()).setValues(vals);
          setRange = toDat[0].getLastRow() +  1;
        }
          
        wipeData(fileToCopy);
        nameReports(fileToCopy, token);
        connectDataBase(farWeek, fileToCopy, staffFoldersId[i], token);
        }
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } 
  }  
}
