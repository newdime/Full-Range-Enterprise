function copyReportTemplate() {
  
  
  var staffFoldersId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                        "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "17qnCBk-WiQsraBPW_Esnga8cqKTAFXBu", 
                        "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  var template = "123SRIzdWqyCXlA2hFFj2y90KQgJEfNfXwdTpqHNPN_A";
  
  var i = 0;
  var token = 1;
 
    for (i in staffFoldersId)
    {
      var dest = DriveApp.getFolderById(staffFoldersId[i]);
      var fileToCopy = DriveApp.getFileById(template).makeCopy("reportTemplateNear", dest);
      var coppiedFile = fileToCopy.getId();
      var fileToCopy = DriveApp.getFileById(template).makeCopy("reportTemplateFar", dest);
      var coppiedFile2 = fileToCopy.getId();
      
      wipeData(coppiedFile);
      DriveApp.getFileById(coppiedFile).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
   //   nameReports(coppiedFile, token);
     // token = 0;
      wipeData(coppiedFile2);
      DriveApp.getFileById(coppiedFile2).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);

      //nameReports(coppiedFile2, token);
      //token = 1;
    }
   
}
