function onOpen()
{
  SpreadsheetApp.getUi()
  .createMenu('Service Controls') // Or DocumentApp or SlidesApp or FormApp.
  .addItem('Control Panel', 'prompt')
  .addToUi();
  
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('index')
  .setTitle('Control Panel')
  .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showSidebar(html);
}

function prompt(){
  Logger.log('------ PROMPT ------');

  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
      .addItem('Show dialog', 'showDialog')
      .addToUi();
  
  /*  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Getting to know you', 'May I know your name?\n joo', ui.ButtonSet.YES_NO,);
 
  
  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.YES) {
    Logger.log('The user\'s name is %s.', response.getResponseText());
  } else if (response.getSelectedButton() == ui.Button.NO) {
    Logger.log('The user didn\'t want to provide a name.');
  } else {
    Logger.log('The user clicked the close button in the dialog\'s title bar.');
  }*/
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'NEW DATABASE ENTRY');
}