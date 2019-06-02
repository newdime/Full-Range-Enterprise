function archiveAllDocs() {
  var staffFoldersId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                        "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "17qnCBk-WiQsraBPW_Esnga8cqKTAFXBu", 
                        "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  var staffFolderArchive = ["1zDXNWy2GERhE7R7xAYvl5cS6LTrBu3-z", "1Yp06lwPM3v8hZ861YsLtuCWeWE5Kccgv", "1e1KJBhschXPB7ADrA6umQT_acx3WgZxy", 
                            "1LexvI3ExOR3u8qRD_v_qj-QZGHruKPF7","1VeiGbTO_v4cz39w1DexWnqHtI_DAnAsj", "1ciCbIGKThFpPXURsgfJvaAbVg870l8Zm", 
                            "1fROxe1CsXOWebcc5gqAYdOl1zau-dQYJ", "1nEpdY_pr9w-qLknsJYE6zhuQkIXmwmdn"];
  
  // loop through array of staff folders
  for (var i in staffFoldersId)   
  {
    Logger.log(staffFoldersId[i]);
    //navigate to folder
    var folder = DriveApp.getFolderById(staffFoldersId[i]);
    //navigate to archive
    var archiveFolder = DriveApp.getFolderById(staffFolderArchive[i]);
    
    // set file to be coppied
    var files = folder.getFiles();
    while (files.hasNext()) 
    {
      var fileName = files.next();
      
      var fileToCopy = fileName.getId();
      // copy file
     // DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),archiveFolder);
      // wipeData(fileToCopy);
      // nameReports(fileToCopy);
      
      // delete old file
      Drive.Files.remove(fileToCopy);      
    }
  }   
}
