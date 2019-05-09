function emptyArchive() {
  
   var staffFolderArchive = ["1zDXNWy2GERhE7R7xAYvl5cS6LTrBu3-z", "1Yp06lwPM3v8hZ861YsLtuCWeWE5Kccgv", "1e1KJBhschXPB7ADrA6umQT_acx3WgZxy", 
                            "1LexvI3ExOR3u8qRD_v_qj-QZGHruKPF7","1VeiGbTO_v4cz39w1DexWnqHtI_DAnAsj", "1ciCbIGKThFpPXURsgfJvaAbVg870l8Zm", 
                            "1fROxe1CsXOWebcc5gqAYdOl1zau-dQYJ", "1nEpdY_pr9w-qLknsJYE6zhuQkIXmwmdn"];
  
  for ( var i in staffFolderArchive)
  {
  var archiveFolder = DriveApp.getFolderById(staffFolderArchive[i]);
    
    // set file to be coppied ie the prior lagging report card
    var files = archiveFolder.getFiles();
    while (files.hasNext()) 
    {
      var fileName = files.next();
      var fileId = fileName.getId();
      Logger.log(fileName);
       Drive.Files.remove(fileId); 
    }
  }
}
