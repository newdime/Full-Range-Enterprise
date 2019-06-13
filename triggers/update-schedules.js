function schedule() {
  
  // schedule folder
  var sourcFolder = "1v7Vu-ATohdt_9QR0gRN1Abx7ovyGEaHv";
  // archive folder
  var archiveFolder = "1s1WIPMDyrNqFjx6-iQcPX0dJDIPIvPQH";
  // send to be updated
  updateSchedules(sourcFolder, archiveFolder);
  
}

function resolve() {
  
  // schedule folder
  var sourcFolder = "109Sgt4zyE5aSYVuh-2sIcp12NHyM4dka";
  // archive folder
  var archiveFolder = "1s1WIPMDyrNqFjx6-iQcPX0dJDIPIvPQH";
  // send to be updated
  updateSchedules(sourcFolder, archiveFolder);
  
}


function updateSchedules(sourcFolder, archiveFolder) {
  
  // get the current and next monthly date range
  var dates = date.date(3);
  for(var i in dates)
  {
    Logger.log('Monthly Date Range '+ i + ': ' + dates[i]);
  }  
  // slcie up the sheet names to isolate future month dates
  var sliced = dates.slice(dates.length/2, dates.length);
  for(var i in sliced)
  {
    Logger.log('Future Date Range ' + i + ': ' + sliced[i]);
  }
  
  // slice up the future document name
  var docName = sliced[0].slice(0, sliced[0].length/2) + sliced[sliced.length-1].slice(sliced[sliced.length-1].length/2);
  Logger.log('Future shcedule name: ' + docName);
  
  var Plus = 1;
  
  // Set destination folder
  var sourcFolder = sourcFolder;
  var folder = DriveApp.getFolderById(sourcFolder);
  
  var archiveFolder = archiveFolder;
  var dest = DriveApp.getFolderById(archiveFolder);
  
  // iterate through schedules
  var files = folder.getFiles();
  while (files.hasNext())
  {
  var fileName = files.next();
  var fileToCopy = fileName.getId();
  
  // make a copy of the schedule and move it to the archive
  DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),dest);
  
  //open the schedule send it to be renamed and
  var ss = SpreadsheetApp.openById(fileToCopy);
  DriveApp.getFileById(fileToCopy).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  var token = 0;
  nameSchedule(ss, token, Plus);
  // toDatabase(Plus,token, ss);
  }
  
  // set the formulas in the report schedule
  // importRanges();
  
  SpreadsheetApp.flush();
  }
  
  function nameSchedule(ss, token, Plus) {
  
  var token = token;
  var Plus = Plus;
  
  //Get active book and sheet
  var activeworkbook = ss;
  var activesheet = activeworkbook.getSheets();
  
  // get the date range from the prior week
  // this identifies the the lagging report card date range so not to overwrite it
  var day = new Date();
  day = day.getDay();
  Logger.log('day: ' + day);
  var priorDate = new Date();
  var priorLastDay = new Date();
  priorDate.setDate(priorDate.getDate()-56-day);
  priorLastDay.setDate(priorLastDay.getDate()-28-day);
  
  //format the date for the lagging week
  var fPriorDate = Utilities.formatDate(priorDate, "GMT+10", "dd/MM/yy - ");
  var fPriorLastDay = Utilities.formatDate(priorLastDay, "GMT+10", "dd/MM/yy");
  var farDate = fPriorDate + fPriorLastDay;
  //var nextDate =
  Logger.log("far date " + farDate);
  
  /*
  if (Plus == 0 || activeworkbook.getName() == farDate)
  {
  // name of the schedule book
  var nameBook =  monthlyDateUpdate(Plus, token);
  //name of the days cells
  var nameCell = weeklyDateUpdate(Plus, token);
  var cellTranspose = new Array ();
  
  // name of sheet denomiated in weeks
  var arrLength = (nameCell[1].length) - 1;
  var arrLengthi = nameCell.length;
  var nameSheet = new Array ();
  
  // iterators
  var i = 0;
  var j = 0;
  var c = 1;
  
  // name convention for sheets derived from days in the week
  while (i < arrLengthi)
  {
  nameSheet [i] = nameCell[i][0] + " - " + nameCell[i][arrLength];
  i++
  }
  
  // Name the book
  activeworkbook.rename(nameBook);
  // Logger.log(nameBook);
  // Name sheets
  for (j in activesheet)
  {
  if (activesheet[j].getName() != "properties")
  {
  activesheet[j].setName(nameSheet[j]);
  }
  }
  
  // Name day cells
  i = 0;
  j = 0;
  for (i in activesheet)
  {
  if (activesheet[i].getName() != "properties")
  {
  
  
  var range = activesheet[i].getRange("D1:AB1");
  Logger.log(arrLength);
  while (j < arrLength + 1)
  {
  
  cellTranspose[j] = nameCell[i][j];
  Logger.log("cell transpose" + cellTranspose[j]);
  //Logger.log("name cell " + nameCell[i][j]);
  //Logger.log(cellTranspose[j]);
  var cell = range.getCell(1, c);
  cell.setValue(cellTranspose[j]);
  c = c + 4;
  j++
  }
  j = 0;
  c = 1;
  //Logger.log(i);
  }
  }
  return nameBook;
  }
  return token = 0;*/
}
