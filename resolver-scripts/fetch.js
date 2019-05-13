function fetch(staff){

  var staff = staff;

  // get the active resolver
  var resolver = SpreadsheetApp.getActiveSpreadsheet();
  var id = resolver.getId();
  var sheets = resolver.getSheets();
  //  var name = resolver.getName();
  var name = resolver.getActiveSheet().getName();
  var namedRange = resolver.getRangeByName('data');
  var domain = staff + '@fullrange.com.au';
  Logger.log(domain);

  // get the correct database entries
  var report = SpreadsheetApp.openById(match(2, 0, name));
  var schedule =  SpreadsheetApp.openById(match(0, 0, name));
  Logger.log('report = ' + report.getName());
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
  var index = 1;
  while(index <= 7*7)
  {
    if (!(index > 7))
    {
    }
    var data1 = reportSheet[i].getRange(index, 1, 7, 12).getValues();
    
    //Logger.log(data1);
    //Logger.log(data2);
    
    
    index = index + 7;
  }
    Logger.log(data1[0]);
    //data1[0].splice(8,3);
  data1[0].splice(1,0, data1[0][7], data1[0][6], data1[0][5], data1[0][3], data1[0][4], data1[0][1], data1[0][2], data1[0][11]);
  data1[0].splice(8,data1[0].length - 8 - 1);
    Logger.log(data1[0]);
  
  // capture schedule data into arraygetActiveSheet()  // capture schedule data into array
 
  // paste report data into resolver sheet

  // paste schedule data into resolver sheet
}
