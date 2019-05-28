function makeEvents(token, details){
  // function makeEvents(token, details, serviceType){
  // token = 0 MONTHLY
  // token = 1 6MONTHLY
  // token = 2 ANNUAL
  //var token = token;
  var details = details;
  Logger.log(details);
  //var serviceType = serviceType;
  var directions = directions;
  var site = site;
  
  var token = token;
  if (token != -1)
  {
    // get the calendar
    var calendar = CalendarApp.getCalendarById('service@fullrange.com.au');
    
    var monthlySeries = CalendarApp.createEventSeries('Monthly Service Run', new Date() , new Date(),CalendarApp.newRecurrence().addMonthlyRule().interval(1) ,
                                                      {location: site});
  }
  
  
  // set new monthly date
  if (token == -1) {  
    
    // check for a currently running monthly service event
    var val = PropertiesService.getScriptProperties().getKeys();
    Logger.log('current event ' + val);
    
    var currentId;
    for (var i in val)
    {
      if (val[i] == 'monthly')
      {
        currentId = PropertiesService.getScriptProperties().getProperty(val[i]);
        Logger.log('current event id' + currentId);
      }
    }
    
    // get the schedule table
    var schedule = SpreadsheetApp.openById('1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA').getSheetByName('schedule').getNamedRanges();
    
    // get the due date range 
    var i = 0;
    while (schedule[i].getName() != 'DUEMONTHLY')
    {
      i++
    }
    
    //get the include range
    var n = 0;
    while (schedule[n].getName() != 'MONTHLY')
    {
      n++
    }
    
    var monthly = schedule[i].getRange().getValues();
    var include = schedule[n].getRange().getValues();
    
    // add the new due date to the due range
    for(var t  = 1; t < include.length; t++)
    {
      if (include[t][0] != 0)
      {
        monthly[t].splice(0,1,details[0]);
      }
    }
    schedule[i].getRange().setValues(monthly);
    
    // get the calendar
    var calendar = CalendarApp.getCalendarById('service@fullrange.com.au');
    
    // delete old event if exists
    try {
      var event = calendar.getEventSeriesById(currentId);
      event.deleteEventSeries();
      PropertiesService.getScriptProperties().setProperty('monthly', 'null'); 
    } catch (e) {
      PropertiesService.getScriptProperties().setProperty('monthly', 'null');
    }
    
    // create a new monthly event
    if (PropertiesService.getScriptProperties().getProperty('monthly') === 'null')
    {
      Logger.log(PropertiesService.getScriptProperties().getProperty('monthly'));
      var monthlySeries =  CalendarApp.createEventSeries('Monthly Service Run', new Date(details[0]) , new Date(details[0]),CalendarApp.newRecurrence().addMonthlyRule().interval(1) ,
                                                         {location: "https://drive.google.com/open?id=1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA"});
      var monthlyId = monthlySeries.getId();
      PropertiesService.getScriptProperties().setProperty('monthly', monthlyId);
    }
    
  }
  
  // make monthly service event
  // make six monthly service event
  // make annual service event
  
  
  
}
