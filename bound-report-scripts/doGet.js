function doGet() {
  
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getDoc()
{
  var id = SpreadsheetApp.getActive().getId();
  
  Logger.log(id);
  return id;
}

