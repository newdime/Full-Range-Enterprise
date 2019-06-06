function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .createMenu('Custom Menu')
  .addItem('Show sidebar', 'showSidebar')
  .addToUi();

  //runFile();
 // createHeaders();
  //trig();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
  .setTitle('Control Panel')
  .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showSidebar(html);
}
