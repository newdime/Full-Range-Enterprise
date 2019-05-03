function createHeaders() {
  
  var activeworkbook = SpreadsheetApp.getActiveSpreadsheet();
  var activesheet = activeworkbook.getSheets();
  
  // loop through sheets in workbook
  for (var i in activesheet) 
  {  
    // Freezes the first row
    activesheet[i].setFrozenRows(1); 
    activesheet[i].setFrozenColumns(1); 
  }
}


                        