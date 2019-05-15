function match (token, id, name) {
  
  //set token to 0 to fetch from schedule databasae
  //set token to 1 to post to report databasae
  //set token to 2 to fetch from report database
  
  var token = token;
  var id = id;
  var name = name;
  var returnData = [];
  
  // get the folder of staff folders
  var folder = DriveApp.getFolderById('16ehxTEzP7QaUA99KiewpRXioU8L_mHzA').getFolders();
  
  // get the name of the folders
  var emails = ([]);
  var i = 0;
  
  while (folder.hasNext())
  {
    var folderName = folder.next();
    emails[i] = folderName.getName();
    i++
  }
  
  Logger.log("got emial list");
  
  if (token == 1)
  {
    // get the name of the parent staff folder
    var thisParent = DriveApp.getFileById(id).getParents();
    var i = 0;
    
    while (thisParent.hasNext())
    {
      var folderName = thisParent.next().getParents().next().getName();
      var owner = folderName;
      Logger.log(owner);
      i++
    }
  }
  
  // fetch from report data base
  if (token == 2)
  {
    var reportData = DriveApp.getFolderById("1voKAFD9y3o3vB5HznegAfnSnGiGopCZi").getFiles();
    while(reportData.hasNext())
    {
      var file = reportData.next();
      Logger.log('database name ' + file.getName());
      Logger.log('resolver name ' + name);
      if (file.getName() == name)
      {
        var dataEntry = file.getId();
        Logger.log(file.getName());
        if (id == 0)
        {
           Logger.log('data entry ' + name);
          return dataEntry;
        }
        break;
      }
    }
  }
  
  Logger.log("found parent");
  Logger.log(name);
  
  // if fetching from schedule database
  if (token == 0)
  {
    // get the data base file
    var databaseFolder = '1SVYaRTIsECLnpppT4QLAb2026wduL62C';
    var database = DriveApp.getFolderById(databaseFolder).getFiles();
    
    // find the correct date range
    while(database.hasNext())
    {
      var file = database.next();
      Logger.log(file.getName());
      Logger.log(name);
      if (file.getName() == name)
      {
        var dataEntry = SpreadsheetApp.openById(file.getId());
        returnData[0] = file.getId();
        if (id == 0)
        {
          return returnData[0];
        }
        break;
      }
    }
    
    Logger.log("found data range");
    
    if (id != 0)
    {
      // find the right sheet
      var dataSheets = dataEntry.getSheets();
      for (var t in dataSheets)
      {
        if (dataSheets[t].getName() == folderName)
        {
          returnData[1] = t;
          break;
        }
      }
    }
    
    Logger.log("found sheet");
    
    return returnData;  // return the matching database entry and correct sheet
  }
  
  return "match error check inputs";
}
