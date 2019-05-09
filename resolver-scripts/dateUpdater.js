function monthlyDateUpdate(Plus, token) {
  var Plus = Plus;
  var token = token;
  // format date to match naming convention of schedule
  // get current dat and find out last day of week
  var currentDate = new Date();
  var lastDate = new Date();
  lastDate.setDate(currentDate.getDate()+27);
  
  // format the date
  var fCurrentDate = Utilities.formatDate(currentDate, "GMT+10", "dd/MM/yy - ");
  PropertiesService.getScriptProperties().setProperty("NEAR", fCurrentDate);
  var fLastWeek = Utilities.formatDate(lastDate, "GMT+10", "dd/MM/yy");
  // string to name to schedule
  var docName = fCurrentDate + fLastWeek;
  
  
  // if naming the far month when starting fresh
  if (Plus == 0 && token == 0)
  {
   // Logger.log("nameing far");
    var farDate = new Date();
    var lastDayFar = new Date();
    farDate.setDate(farDate.getDate()+28);
    lastDayFar.setDate(lastDayFar.getDate()+(27*2+1));
    var fFarDate = Utilities.formatDate(farDate, "GMT+10", "dd/MM/yy - "); 
    PropertiesService.getScriptProperties().setProperty("FAR", fFarDate);
    var fFarLastWeek = Utilities.formatDate(lastDayFar, "GMT+10", "dd/MM/yy");
    // string to name to schedule
    var docNameFar = fFarDate + fFarLastWeek;
    return docNameFar;
  }
  
  if (Plus == 1 && token == 0)
  {
    var farDate = new Date();
    var lastDayFar = new Date();
    farDate.setDate(farDate.getDate()+28);
    lastDayFar.setDate(lastDayFar.getDate()+(27*2+1));
    var fFarDate = Utilities.formatDate(farDate, "GMT+11", "dd/MM/yy - "); 
    PropertiesService.getScriptProperties().setProperty("FAR", fFarDate);
    var fFarLastWeek = Utilities.formatDate(lastDayFar, "GMT+10", "dd/MM/yy");
    // string to name to schedule
    var docNameFar = fFarDate + fFarLastWeek;
    return docNameFar; 
  }
  
  //Logger.log(docName);
  
  return docName;
}

function weeklyDateUpdate(Plus, token) {
   var Plus = Plus;
  var token = token;
  
  var date = new Date ();
  var newDate = [];

  var i = 0;
  var j = 0;
  var totalWeeks = 4;
  
  var allWeeks = [];
  
  var Weeksx4 = 28;
  
  
   // if naming the far month when starting fresh
  if (Plus == 0 && token == 0)
  {
    date.setDate(date.getDate()+28);
  }
  /* if (Plus == 1 && token == 0)
  {
    date.setDate(date.getDate()+28);
  }*/
  
  //  var loopDate = new Date();
  var loopDate = date;
  
// iterate through weeks in 2d array  
 for (j = 0; j < 4; j++)
      
    { 
      allWeeks[j] = [];
      // iterate through days in weeks in 2d array
      for (i = 0; i < 7; i++)
      {
        //format date for nameing
        newDate[i] = Utilities.formatDate(loopDate, "GMT+10", "dd/MM/yy");
       // Logger.log(date);
        allWeeks[j][i] = newDate[i];
        //Logger.log(allWeeks[j][i]);
        // increment date
        loopDate.setDate(date.getDate()+1);
       
      }
    }
  Logger.log(allWeeks);
  return allWeeks;
}