function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .createMenu('Custom Menu')
  .addItem('Show sidebar', 'showSidebar')
  .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
  .setTitle('Control Panel')
  .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showSidebar(html);
}

/*function snapShot(staff){
  
  // get id of the matching range
  var staff = staff;
  var id, i = 0;
  var staffId = ["1-BaaZ1ZabGYFDdQY3_lga29Vh9k6Jjuh", "1DdHEbcmKyaCdWKF4gTFVa5YxZCYvBxI2", "1oHs8YgTiPlUSGaGvTEx5jMYsFYMkrEMM", 
                 "1P6N9Yel8QQPsXc71J3fuucTE4EsuHupW", "1Kqywy1WC92YCFD7pOJBZHJ_7WSZ04Ga3", "1I8IC5yvkZvUqIXk5gW7a2loyi_9-84pd", 
                 "1J6W4wY0-GWDggHJVF1tiwvX1ojNJmMYZ", "1K_vSl7HTe2JNMcWDzNpoTKq2Jxaj5g8T"];
  
  var ss = SpreadsheetApp.getActive().getRangeByName(staff);
  var vals = ss.getValues();
  var rowDex = ss.getRowIndex();
  var id = SpreadsheetApp.getActiveSheet().getRange(ss.getRowIndex(), 1).getValue();
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  
  
  
  var dataBase = SpreadsheetApp.openById("1Aogl4f6PmiBfuaEK_1E45nT_8E9LrR2Zv-ATXSy8Gf0").getSheets();
  while (dataBase[i].getName() != id){i++}
  //ss.setValue(i);
  //ss.setValue(sheetName.substring(0,8));
  //ss.setValue(sheetName);  
  // ss.setValue(ss.getRowIndex());
  
  var rows = ss.getNumRows();
  var cols = ss.getNumColumns();
  
  var start = 2;
  
  var days = 7;
  var jobs = 7;
  var colsdiv = cols/days;
  //ss.setValue(rows);
  var data = new Array ([]);
  var n = 0;
  var colIt = 0;
  Logger.log(vals);
  
  var k = vals[0].length/days;
  if(dataBase[i].getRange(2, 2).getValue() == sheetName.substring(0,8))
  {
    // go through each day of data
    while(n < days)
    {
      // slice each day into a new 2d array
      var m = 0;
      
      while (m < jobs)
      {
        // Logger.log(m);
        Logger.log(k);
        data[m] = vals[m].slice(colIt, k);
        Logger.log(colIt);
        
        m++;
      }
      Logger.log(data);
      
      dataBase[i].getRange(start,9,rows, colsdiv).setValues(data);
      start = start + rows;
      //  jobs = jobs + days;
      k = k + vals[0].length/days;
      n++
        colIt = colIt + 4;
    }
  }
  
  var n = 0;
  var colIt = 0;
  var start = days * jobs + 2;
  
  if(dataBase[i].getRange(3, 2).getValue() == sheetName.substring(0,8))
  {
    // go through each day of data
    while(n < days)
    {
      // slice each day into a new 2d array
      var m = 0;
      
      while (m < jobs)
      {
        // Logger.log(m);
        Logger.log(k);
        data[m] = vals[m].slice(colIt, k);
        Logger.log(colIt);
        
        m++;
      }
      Logger.log(data);
      
      dataBase[i].getRange(start,9,rows, colsdiv).setValues(data);
      start = start + rows;
      //  jobs = jobs + days;
      k = k + vals[0].length/days;
      n++
        colIt = colIt + 4;
    }  
  }
  
  
}*/