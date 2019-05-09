function startFresh() {
  
  var status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').getValue();
  SpreadsheetApp.flush();
  while(status != "Schedules Complete")
  {
    //sleep(1000);
    status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').getValue();
    SpreadsheetApp.flush();
  }
  status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Resolve Running");
  SpreadsheetApp.flush();
  
  
  
  // the working location of the schedules
  var scheduleFolder = "109Sgt4zyE5aSYVuh-2sIcp12NHyM4dka";
  var folder = DriveApp.getFolderById(scheduleFolder);
  
  // the archive folder for the schedules
  var archiveFolder = "11kupIjywSvE-uXJSj1eaUwWukL3qYGsw";
  var dest = DriveApp.getFolderById(archiveFolder);
  
  // archive and delete files
  // set file to be coppied
  var files = folder.getFiles();
  while (files.hasNext()) 
  {   
    var fileName = files.next();
    var fileToCopy = fileName.getId();
    DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),dest);
    DriveApp.getFileById(fileToCopy).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
    Drive.Files.remove(fileToCopy);   
  }
  
  var Plus = 0;
  // copy the template into the schedule folder
  var coppiedShedule = copyScheduleTemplate(Plus, scheduleFolder);
  
  // set the formulas in the report schedule
  importReportRanges();
  importSheduleRanges();
}

function copyScheduleTemplate(Plus, scheduleFolder) {
  var sourceFolder = scheduleFolder;
  var Plus = Plus;
  // Set destination folder
  var scheduleFolder = DriveApp.getFolderById(sourceFolder); 
  // set file to be coppied
  var scheduleTemplate = DriveApp.getFileById("16I331_o8CY5mp0JTEdg50ozdj25SYeouHNasSXqonyY").makeCopy("nearMonth", scheduleFolder);
  var scheduleTemplate2 = DriveApp.getFileById("16I331_o8CY5mp0JTEdg50ozdj25SYeouHNasSXqonyY").makeCopy("farMonth", scheduleFolder);
  //get file id
  var coppiedShedule = scheduleTemplate.getId();
  DriveApp.getFileById(coppiedShedule).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  var coppiedShedule2 = scheduleTemplate2.getId();
  DriveApp.getFileById(coppiedShedule2).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  //Logger.log(coppiedShedule);
  // open coppied file
  var ss = SpreadsheetApp.openById(coppiedShedule);
  var ss2 = SpreadsheetApp.openById(coppiedShedule2);
  
  // near month
  var token = 0;
  var nameBook = nameSchedule(ss, token, Plus);
 // toDatabase(Plus,token, ss);
  wipeData(ss);
  // far month
  var token = 1;
  var nameBook2 = nameSchedule(ss2, token, Plus);
 // toDatabase(Plus,token, ss2);
  wipeData(ss2);
  
  SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Resolve Complete");
  SpreadsheetApp.flush();
  
  return coppiedShedule;
}
