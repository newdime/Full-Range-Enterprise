function onOpen()
{
  SpreadsheetApp.getUi()
  .createMenu('Service Controls') // Or DocumentApp or SlidesApp or FormApp.
  .addItem('New Site', 'newSite')
  .addItem('Set Monthly', 'setMonthly')
  .addToUi();
  
}

function newSite() {
  var html = HtmlService.createHtmlOutputFromFile('NEWSITE')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'NEW DATABASE ENTRY');
}

function setMonthly() {
  var html = HtmlService.createHtmlOutputFromFile('SETMONTHLY')
      //.setWidth(800)
      //.setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'SET MONTHLY SERVICE');
}