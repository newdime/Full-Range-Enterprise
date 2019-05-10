/*function onEdit(e) {
  
  var props = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getSheets();
  var JobsPD = props[0].getRange('I2');
  
  //var timeRange = SpreadsheetApp.getActive().getNamedRanges()
  var ss = SpreadsheetApp.getActive().getSheets();
  //var range = ss[1].getNamedRanges();
  var maxRows = ss[0].getLastRow();
  
  var cellEdited = e.range.getValue();
  
  Logger.log(cellEdited);
  
  for (var n in range)
  {
    if (range[n].getName() == 'Hours1')
    {
      Logger.log(range[n].getName());
    }
  }
  
  
  var cellEdited = e.range.getValue();
  
  
  
  
  var range = SpreadsheetApp.getActive().getActiveRange();
  var propSheet = SpreadsheetApp.getActive().getSheetByName('properties');
  var propRange = propSheet.getRange('B:B');
  var propVals = propRange.getValues();
  
  
  for (var n in propVals)
  {
  if (cellEdited == propVals[n])
  {
  
  }
  }
  
}*/
