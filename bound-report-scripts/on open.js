function createSpreadsheetOpenTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('Open')
      .forSpreadsheet(ss)
      .onOpen()
      .create();
}

function Open() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .createMenu('Control Panel')
  .addItem('Show sidebar', 'showSidebar')
  .addToUi();
  
  //runFile();
  createHeaders();
  trig();  
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
  .setTitle('Control Panel')
  .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showSidebar(html);
}


function snapShot(){
  
  var ss = SpreadsheetApp.getActive().getId();
  var staffID = DriveApp.getFileById(ss).getParents().next().getId();
  var pushData = "1Aogl4f6PmiBfuaEK_1E45nT_8E9LrR2Zv-ATXSy8Gf0";
  
  var dataBase = SpreadsheetApp.openById(pushData).getSheets();
  
  var maxJobs = 49;
  var jobs = 7;
  var start = 0;
  var end = 0;
  var n = 0;
  var i = 0;
  
  while (staffID != dataBase[n].getName())
  {  
    n++
  }
  
  var sheet = SpreadsheetApp.getActiveSheet().getName();
  
  var dateRange1 = dataBase[n].getRange(2, 2, 1, 7).getValues();
  var dateRange2 = dataBase[n].getRange(3, 2, 1, 7).getValues();
  
  for (var i = 0; i < dateRange1[0].length; i++)
  {
    if(sheet == dateRange1[0][i])
    {
      start = 2 + ((jobs*(i+1))-jobs);
      break;
    }
  }
  
  if (start == 0)
  {
    for (var i = 0; i < dateRange2[0].length; i++)
    {Logger.log(i);
     
     if(sheet == dateRange2[0][i])
     {
       Logger.log(i);
       start = (2 + 49) + ((jobs*(i + 1))-jobs);
       Logger.log(i);
       break;
     }
    }
  }
  //  Logger.log(inc);
  //   Logger.log(i);
  
  Logger.log(start);
  Logger.log(n);
  Logger.log(dataBase[n].getName());
  
  var dataVals = dataBase[n].getRange(start ,9, jobs,  4).getValues();
  Logger.log(dataVals);
  
  //Logger.log(SpreadsheetApp.getActiveSheet().getNamedRanges());
  var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('import');
  var arr = [[],[],[],[],[],[],[]];
  var l = 0;
  var k = 0;
  var m = 0;
  
  for (k = 0; k < dataVals.length; k++)
  {
    for ( m in dataVals[k])
    {
      if (m != 1)
      {
        arr[k][l] = dataVals[k][m];
        l++;
      }    
      m++; 
    }
    l = 0;
    m = 0;
  }
  
  Logger.log(arr);
  range.setValues(arr);
  
}