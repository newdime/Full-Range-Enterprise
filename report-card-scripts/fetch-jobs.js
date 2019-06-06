function fetch() {

  console.log('start');
  
  // get the active report card
  var reportCard = SpreadsheetApp.getActiveSpreadsheet();
  var id = reportCard.getId();
  var sheets = reportCard.getSheets();
  var name = reportCard.getName();
  var namedRange = reportCard.getRangeByName('import');

  
  // match the database
  var matched = [];
  matched = match(0, id, name);
  Logger.log(matched);

  // open the database entry
  var database = SpreadsheetApp.openById(matched[0]).getSheets();

  // get ranges 1, 3, 4
  var index = 1;
  var i = sheets.length - 2;
  while(!(i < 0))
  {
    if (sheets[i].getName() == 'properties')
    {
     i--
    }
    //console.log('fff');
    //console.log('sheet ' + sheets[i].getName());
    // set the schedule data into the reports
    var job = database[matched[1]].getRange(index , 1, namedRange.getNumRows(),  1).getValues();
    var descSite = database[matched[1]].getRange(index , 3, namedRange.getNumRows(),  2).getValues();
    sheets[i].getRange(2 , 2, namedRange.getNumRows(),  1).setValues(job);
    sheets[i].getRange(2 , 3, namedRange.getNumRows(),  2).setValues(descSite);
    console.log(descSite);

    index = index + 7;
    i--
  }
  console.log('end');
}
