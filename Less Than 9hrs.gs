function lessThan9hrs() {
  
  var activeworkbook = SpreadsheetApp.getActiveSpreadsheet();
  var activesheet = activeworkbook.getActiveSheet();
  var redify, range, sum = 0;
  
  // Get total inputed hours
  activesheet.getNamedRanges().forEach(function(item){
    if (item.getName() == 'Hours')
    {
      redify = item.getRange();
      range = item.getRange().getValues();
    }
    item + 1;
    //break
  });
  
  // sum elements in the array
  range.forEach(function(item){
    sum = sum + item[0];
    //sum += Number(item);
  });
  
  Logger.log(redify);
  
  // if hours input total less than 9
  if(sum < 9)
  {
    // Set Range red
    redify.setBackground("red");
    
  }
  else
  {
    // set range white
    
    redify.setBackground("white");
  }  
}