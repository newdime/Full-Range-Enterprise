function toDataBase() {
  
  // resolve database
  var resolveDataBase = "1yy409Wm6N0hGmWDHZBsON38I1DHxqdE4";
  
  // get the folder of staff folders
  var folder = DriveApp.getFolderById('16ehxTEzP7QaUA99KiewpRXioU8L_mHzA').getFolders();

  // get the name of the folders
  var emails = ([]);
  var user;
  var i = 0;

  while (folder.hasNext())
  {
    var folderName = folder.next();
    user = folderName.getName();
    Logger.log(user.slice(0, -17));
    emails[i] =  user.slice(0, -17);
    i++
  }
  
  for(var n in emails)
  {
   DataBase.snapShot(emails[n], resolveDataBase);
  }
}
