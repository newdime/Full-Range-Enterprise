function importSheduleRanges() {
  
  // RESOLVE FOLDER 
  var resolveFolder = "109Sgt4zyE5aSYVuh-2sIcp12NHyM4dka";
  var folder = DriveApp.getFolderById(resolveFolder);
  
  // go through schedules and put ids in array
  var files = folder.getFiles();
  while (files.hasNext()) 
  {   
    var fileName = files.next();
    
    // SCHEDULES 
    var doc = fileName.getId();
    var ss = SpreadsheetApp.openById(doc);
    schedule(ss);
    
  }
}


function schedule(ss){
  
  var ss = ss;
  
  // PROPERTIES 
  var properties = SpreadsheetApp.openById("1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM").getRangeList(['o2','i2','h2','g2','m2']).getRanges();
  var staffNum = properties[0].getValue();
  var jobs = properties[1].getValue();
  var Days = properties[2].getValue();
  var totalJobs = properties[3].getValue();
  var totalScheduledWeeks = properties[4].getValue();
  totalJobs = ((totalJobs * 2) * 2) * staffNum;
  var uniques = jobs * staffNum;
  
  // REPORT DATA BASE 
  var dataBase = SpreadsheetApp.openById("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q");
  DriveApp.getFileById("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q").setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  var reportDataB = dataBase.getSheetByName('schedule');
  var nameRange = dataBase.getRangeByName("Names");
  var nameVals = reportDataB.getRange(nameRange.getA1Notation()).getValues();
  var hours = reportDataB.getRange(dataBase.getRangeByName("Hours").getA1Notation());
  var dateA = reportDataB.getRange(2, 2, 1, 4).getValues()
  var dateB = reportDataB.getRange(3, 2, 1, 4).getValues()
  
  var resolverNameRange = ss.getRangeByName("Name").getValues();
  var sheets = ss.getSheets();
  
  for (var i in sheets)
  {
    // match date ranges FAR
    if(sheets[i].getName() == dateA[0][i])
    {
      // start at top
      var start = 2;
      var k = 0;
      for(var n = 0; n < resolverNameRange.length; n = n + jobs )
      {
        if (resolverNameRange[n][0] == nameVals[k][0])
        {
          //Logger.log(nameVals[n][0]);
          var m = 0;
          var row = n + 3;
          var col = 13
          start = start + k;
          while(m < Days)
          {
            Logger.log("rows" + row);
            var formulas = [['=query(importrange("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q", "'+ reportDataB.getName() +'!'+ "Hours" +'"), "SELECT * limit ' + jobs + ' OFFSET '+ start +'", 0 )']];
            sheets[i].getRange(row, col, 1, 1).setValues(formulas);
            col = col + 10;
            m++
            start = start + uniques;
          }
        }
        k = k + jobs;
      }  
    }
    
    // match date ranges NEAR
    if(sheets[i].getName() == dateB[0][i])
    {
      // start at middle
     start = 2;
     // var start = totalJobs/2 + 2;
      k = (totalJobs/2) + 1;
      for(var n = 0; n < resolverNameRange.length; n = n + jobs )
      {
        if (resolverNameRange[n][0] == nameVals[k][0])
        {
          Logger.log(nameVals[k][0]);
           //Logger.log(nameVals[n][0]);
          var m = 0;
          var row = n + 3;
          var col = 13
          start = k; 
          while(m < Days)
          {
            Logger.log("rows" + row);
            var formulas = [['=query(importrange("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q", "'+ reportDataB.getName() +'!'+ "Hours" +'"), "SELECT * limit ' + jobs + ' OFFSET '+ start +'", 0 )']];
            sheets[i].getRange(row, col, 1, 1).setValues(formulas);
            col = col + 10;
            m++
            start = start + uniques;
          } 
        }
        k = k + jobs;
      }  
    } 
  }
}