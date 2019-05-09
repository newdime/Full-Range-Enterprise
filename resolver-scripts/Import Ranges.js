function importReportRanges() {
  
  // wait for any other scripts to stop running
  var status = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('P2').getValue();
  while (status == "Running")
  {
    status = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM/edit?usp=sharing').getRange('P2').getValue();
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// RESOLVE FOLDER ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var resolveFolder = "109Sgt4zyE5aSYVuh-2sIcp12NHyM4dka";
  var folder = DriveApp.getFolderById(resolveFolder);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// REPORT DATA BASE /////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var dataBase = SpreadsheetApp.openById("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ");
  DriveApp.getFileById("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ").setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  var reportDataB = dataBase.getSheets();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// SHCEDULE DATA BASE ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var SDBase = SpreadsheetApp.openById("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q");
  DriveApp.getFileById("1anImLqZlqZY1FkSZJpJav_tiA7VzyncN99w9D3RWe8Q").setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  var SDataBase = SDBase.getSheets();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// PROPERTIES ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var properties = SpreadsheetApp.openById("1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM");
  var staffNum = properties.getRange("O2").getValue();
  var jobs = properties.getRange("I2").getValue();
  var Days = properties.getRange("H2").getValue();
  var totalJobs = properties.getRange("G2").getValue();
  
  // go through schedules and put ids in array
  var files = folder.getFiles();
  while (files.hasNext()) 
  {   
    var fileName = files.next();
    ///////////////
    // SCHEDULES //
    var doc = fileName.getId();
    var ss = SpreadsheetApp.openById(doc);
    var sheets = ss.getSheets();
    ///////////////
    ///////////////
    
    /////////////////////
    // STACK VARIABLES //
    /////////////////////
    var dateA, dateB;
    var range = 0;
    var data = 0;
    var t = 0;
    // schedule id array
    var fileIdArr = ([]);
    /////////////////////
    /////////////////////
    
    for (t in reportDataB)
    {
      // go through the schedule sheets
      var i = 0;
      for(i in sheets)
      {
        // get the named ranges in schedule
        var sheduleRanges = sheets[i].getNamedRanges();
        
        // get staff id range
        sheduleRanges.forEach(function(item){if (item.getName() == 'Id'){range = item.getRange();}
                                             if (item.getName() == 'Data'){data = item.getRange();}
                                            }); 
        
       // Logger.log("" + range.getValues());
        
        fileIdArr = range.getValues();
        
        var uniques = range.getValues().length/staffNum;
        // Logger.log(uniques);
        
        // id with database sheet
        for (var n = 0; n < range.getValues().length; n = n + uniques)
        {
          
          //  Logger.log(fileIdArr[49][0]);
          // does it match ?
          if (fileIdArr[n][0] == reportDataB[t].getName())
          {
            //Logger.log(fileIdArr[n][0]);
            //  Logger.log(reportDataB[t].getName());
            //  Logger.log(n);
            // get the named ranges
            var matchTo = ['JobNo','PO','Materials','Status','Report','CriticalComm', 'Site', 'TaskDesc' ,'Hours'];
            
            var start = n + 3;
            Logger.log(start);
            // Logger.log('start = ' + start);
            //Logger.log(Utilities.formatDate(reportDataB[t].getRange(2,2).getValue(), dataBase.getSpreadsheetTimeZone(), "MM/dd/YY"));
            //var date = Utilities.formatDate(reportDataB[t].getRange(2,2).getValue(), dataBase.getSpreadsheetTimeZone(), "MM/dd/YY");  
            Logger.log(reportDataB[t].getRange(2,2).getValue());
            
            if (reportDataB[t].getRange(2,2).getValue() == sheets[i].getName().substring(0,8))
            //if (Utilities.formatDate(reportDataB[t].getRange(2,2).getValue(), dataBase.getSpreadsheetTimeZone(), "MM/dd/YY") == sheets[i].getName().substring(0,8))
            {
              var dataStart = 1;
              // Logger.log("datastart " + dataStart);
              var counter = 0;
              var k = 0;
              var row = 3;
              var col = 4;
              while (counter < Days)
              {
                Logger.log("Near");
                //set formulas incement uniques
                var formulas = [['=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                  '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+1] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                    '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+2] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                      '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+3] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                        '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+4] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                          '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+5] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                            '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+6] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                              '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+7] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                              '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+8] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )']];        
                
                // Logger.log('n = ' + n);
                sheets[i].getRange(start, col, 1, 9).setValues(formulas);
                col = col + 10;
                dataStart = dataStart + jobs;
                counter++
              }
            }
            if (reportDataB[t].getRange(3,2).getValue() == sheets[i].getName().substring(0,8))
            //if (Utilities.formatDate(reportDataB[t].getRange(3,2).getValue(), dataBase.getSpreadsheetTimeZone(), "MM/dd/YY") == sheets[i].getName().substring(0,8))
            {
              var dataStart = (totalJobs/2) + 1;
              //Logger.log("datastart " + dataStart);
              var counter = 0;
              var k = 0;
              var row = 3;
              var col = 4;
              while (counter < Days)
              {
                
                //set formulas incement uniques
                var formulas = [['=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                  '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+1] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                    '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+2] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                      '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+3] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                        '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+4] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                          '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+5] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                            '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+6] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                              '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+7] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )',
                                '=query(importrange("1Nab_AOAn1YAwwUX-Tzafz2uCaiDh2NZNb8PuGdGYIHQ", "'+ reportDataB[t].getName() +'!'+ matchTo[k+8] +'"), "SELECT * limit ' + uniques + ' OFFSET '+ dataStart +'", 0 )']];        
                
                
                sheets[i].getRange(start, col, 1, 9).setValues(formulas);
                col = col + 10;
                dataStart = dataStart + jobs;
                counter++
                  
              }
         
            }
            
          }       
        }
        //var dataVals = data.getValues();
        //data.setValues(dataVals);
      }
      
    }
  }
}