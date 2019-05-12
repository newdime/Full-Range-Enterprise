function snapShot()
{
  // get the active report card
  var reportCard = SpreadsheetApp.getActiveSpreadsheet();
  var id = reportCard.getId();

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

  Logger.log("found parent");

  // get the folder of staff folders
  var folder = DriveApp.getFolderById('16ehxTEzP7QaUA99KiewpRXioU8L_mHzA').getFolders();

  // get the name of the folders
  var emails;
  var i = 0;
  while (folder.hasNext())
  {
    var folderName = folder.next();
    if (folderName.getName() == owner)
    {
      var match = 1;
      break;
    }
  }
  Logger.log(folderName.getName());

  Logger.log("got email list");
  
  // copy data to database
  if (match == 1)
  {
    // find the correct date range
    var currentCycle = date.date(0, 0);
    var reportData = DriveApp.getFolderById("1voKAFD9y3o3vB5HznegAfnSnGiGopCZi").getFiles();
    while(reportData.hasNext())
    {
      var file = reportData.next();
      Logger.log(file.getName());
      Logger.log(reportCard.getName());
      if (file.getName() == reportCard.getName())
      {
        var dataEntry = SpreadsheetApp.openById(file.getId());
        Logger.log(file.getName());
        break;
      }
    }

    // find the right sheet
    var dataSheets = dataEntry.getSheets();
    for (var t in dataSheets)
    {
      if (dataSheets[t].getName() == folderName)
      {
        break;
      }
    }

    // enter data into the database
    var sheets = reportCard.getSheets();
    var rows = 0;

    // var n = 0
    for(var n in sheets)
    {
      if (sheets[n].getName() == 'properties')
      {
        break;
      }
      if (n != 0)
      {
        dataSheets[t].insertRowsBefore(1, data.getNumRows());
      }
      var data = sheets[n].getRange(2, 2, sheets[n].getLastRow() - 1, sheets[n].getLastColumn() - 1);
      dataSheets[t].getRange(1,1,data.getNumRows(),data.getNumColumns()).setValues(data.getValues());
      Logger.log(data.getNumRows());
    }
  }

  Logger.log("finished");
  return;
}
