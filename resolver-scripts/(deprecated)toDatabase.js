function snapShot(staff)
{
  var staff = staff;
  var domain = staff + '@fullrange.com.au';
  Logger.log(domain);

  // get the staff range of the sheet being captured
  var ss = SpreadsheetApp.getActive().getRangeByName(staff);
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();

  // day name ranges
  var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  // get the data base file
  var databaseFolder = '1yy409Wm6N0hGmWDHZBsON38I1DHxqdE4';
  var database = DriveApp.getFolderById(databaseFolder).getFiles();

  // go through files in database
  while(database.hasNext())
  {
    var file = database.next();
    Logger.log(file.getName());
    Logger.log(sheetName);
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

  // go through all days in the captured sheet
  for (var d in days)
  {
    // get the range and values
    var day = SpreadsheetApp.getActive().getRangeByName(days[d]);
    var dayVals = day.getValues();

    var rows =  Math.abs(ss.getNumRows() -  day.getNumRows());
    var cols =  Math.abs(ss.getNumColumns() - day.getNumColumns());

    // get the appropriate row and column indexes
    var rowDex = ss.getRowIndex();
    var colDex = day.getColumn();

    // create the subset range to be captured
    var subset = SpreadsheetApp.getActiveSheet().getRange(rowDex, colDex, ss.getNumRows(), day.getNumColumns()).getValues();

    Logger.log(subset);
    Logger.log("column " + colDex);
    Logger.log(rowDex);
    Logger.log(rows);
    Logger.log(cols);
    Logger.log(ss.getNumRows());
    Logger.log(ss.getNumColumns());

    if (d != 0)
    {
      dataEntry[index].insertRowsBefore(1, ss.getNumRows());
    }
    dataEntry[index].getRange(1, 1, ss.getNumRows(), day.getNumColumns()).setValues(subset);
  }
}
