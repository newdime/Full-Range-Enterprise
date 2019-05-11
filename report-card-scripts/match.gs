function match (token, id) {

  var token = token;
  var id = id;

  // get the folder of staff folders
  var folder = DriveApp.getFolderById('16ehxTEzP7QaUA99KiewpRXioU8L_mHzA').getFolders();

  // get the name of the folders
  var emails = ([]);
  var i = 0;

  while (folder.hasNext()) {
    var folderName = folder.next();
    emails[i] = folderName.getName();
    i++
  }


  // if connecting to the schedule databaseFolder
  if (token == 0)
  {
    // get the data base file
    var databaseFolder = '1SVYaRTIsECLnpppT4QLAb2026wduL62C';
    var database = DriveApp.getFolderById(databaseFolder).getFiles();

  }


}
