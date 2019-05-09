function scheduleDatabaseEntry() {

  // get the date of the current week to name database entry
  var dateRange = date.date(0, 0);
  Logger.log(dateRange);

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

  // calc sheets needed
  var sheetsNeeded = emails.length;
  Logger.log(sheetsNeeded);

  // get the report database folder
  var dataFolder = DriveApp.getFolderById('1SVYaRTIsECLnpppT4QLAb2026wduL62C');

  // create new entry into database
  var dataEntry = SpreadsheetApp.create(dateRange);
  var entryId = dataEntry.getId();

  // move entry into correct databas folder
  DriveApp.removeFile(DriveApp.getFileById(entryId));
  dataFolder.addFile(DriveApp.getFileById(entryId));

  // open the new database entry
  var entry = SpreadsheetApp.openById(entryId);

  // add a sheet for each staff memeber
  var i = 0;
  while (i < sheetsNeeded - 1)
  {
    entry.insertSheet();
    i++
  }

  // name the sheets with the email of each staff member
  var sheets = entry.getSheets();
  for (var t in sheets)
  {
    sheets[t].setName(emails[t]);
  }
  //folder.getEditors().forEach(function(item){Logger.log(item.getEmail())});

}
