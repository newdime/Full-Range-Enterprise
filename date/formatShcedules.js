function formatShcedules() {
  
  // get the monthly date range
  var dates = date(3);
 
  // slcie up the sheet names
  var sliced = dates.slice(dates.length/2, dates.length);
  Logger.log(sliced);
  
  // slice up the document name
  var docName = sliced[0].slice(0, sliced[0].length/2) + sliced[sliced.length-1].slice(sliced[sliced.length-1].length/2);
  Logger.log(docName);

}
