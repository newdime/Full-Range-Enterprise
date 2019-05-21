function fetch(staff){
  
  Logger.log("---------------- FETCH -----------------");
  var staff = staff;
  
  // get the active resolver
  var resolver = SpreadsheetApp.getActiveSpreadsheet();
  var id = resolver.getId();
  var sheetIDX = resolver.getSheetId();
  var sheets = resolver.getSheets();
  //  var name = resolver.getName();
  var name = resolver.getActiveSheet().getName();
  var namedRange = resolver.getRangeByName('data');
  var domain = staff + '@fullrange.com.au';
  Logger.log(domain);
  
  // get the correct database entries
  var report = SpreadsheetApp.openById(match(2, 0, name));
  Logger.log('report = ' + report.getName());
  var schedule =  SpreadsheetApp.openById(match(0, 0, name));
  Logger.log('schedule = ' + schedule.getName());
  
  // get the correct report sheet
  var reportSheet = report.getSheets();
  Logger.log('getting report data');
  for (var i in reportSheet)
  {
    if (reportSheet[i].getSheetName() == domain)
    {
      Logger.log(reportSheet[i].getSheetName());
      break;
    }
  }
  
  // get the correct schedule sheet
  var schedSheet = schedule.getSheets();
  Logger.log('getting schedule data');
  for (var n in schedSheet)
  {
    if (schedSheet[n].getSheetName() == domain)
    {
      Logger.log(schedSheet[n].getSheetName());
      break;
    }
  }
  
  // capture report data into array
  var data1 = reportSheet[i].getRange(1, 1, 7*7, 12).getValues();
  //  Logger.log(data1[0]);
  
  // capture schedule data into array
  var data2 = schedSheet[n].getRange(1, 2, 7*7, 1).getValues();
  //  Logger.log(data2[0]);
  
  Logger.log('length = ' + data1.length);
  
  // splice the two data sets together
  var t = 0;
  while (t < data1.length)
  {
    //data1[0].splice(8,3);
    data1[t].splice(1,0, data1[t][7], data1[t][6], data1[t][5], data1[t][3], data1[t][4], data1[t][1], data1[t][2], data1[t][11]);
    Logger.log(data1[t]);
    data1[t].splice(9,data1[t].length - 8 - 1, data2[t][0]);
    Logger.log(data1[t]);
    //data1[t].splice(9,0, data2[t][0]);
    //  Logger.log(data1[t]);
    t++
  }
  
  // paste report data into sheet
  var staffRange = resolver.getRangeByName(staff);
  var index = staffRange.getRowIndex();
  var col = staffRange.getColumn();
  var divider = staffRange.getNumColumns()/staffRange.getNumRows();
  
  var l = data1.length;
  var colInc = 0;
  var paste = ([]);
  
  while (!(l < 1))
  {
    l = l - 7;
    Logger.log('loop test');
    //Logger.log(data1.slice(l, l+7));
    Logger.log('index ' + index);
    Logger.log('staffRange ' + staffRange.getNumRows());
    Logger.log('divider ' + divider);
    Logger.log('column: ' + col);
    
    paste = data1.slice(l, l+7);
    
    Logger.log(paste);
    
    sheets[sheetIDX].getRange(index, col, staffRange.getNumRows(), divider).setValues(paste); 
   
     
    col+= divider;
    //colInc += divider;
    
  }
  
  Logger.log(staffRange.getNumRows());
  Logger.log(staffRange.getNumColumns());
  Logger.log(staffRange);
  
  Logger.log("---------------- EXIT FETCH -----------------");
  return 0;
}
