function fetch() {

  // get the folder of staff folders
  var folder = DriveApp.getFolderById('16ehxTEzP7QaUA99KiewpRXioU8L_mHzA').getFolders();

  // get current sheet name
  var currentDoc = SpreadsheetApp.getActiveSpreadsheet().getName();

  // get the name of the folders
  var emails = ([]);
  var i = 0;

  while (folder.hasNext()) {
    var folderName = folder.next();
    emails[i] = folderName.getName();
    i++
  }

  // get the data base file
  var databaseFolder = '1SVYaRTIsECLnpppT4QLAb2026wduL62C';
  var database = DriveApp.getFolderById(databaseFolder).getFiles();

  // go through files in database
  while(database.hasNext())
  {
    var file = database.next();
    //Logger.log(file.getName());
    //Logger.log(sheetName);
    if (file.getName() == sheetName)
    {
      var dataEntry = SpreadsheetApp.openById(file.getId()).getSheets();
      for (var s in dataEntry)
      {
        if(dataEntry[s].getName() == domain)
        {
          var index = s;
          Logger.log('s = ' + index);
          break;
        }
      }
      Logger.log(file.getName());
      break;
    }
  }

}
