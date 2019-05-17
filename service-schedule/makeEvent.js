function makeEvents(details){
  // function makeEvents(token, details, serviceType){
  // token = 0 MONTHLY
  // token = 1 6MONTHLY
  // token = 2 ANNUAL
  //var token = token;
  // var details = details;
  //var serviceType = serviceType;
  var directions = directions;
  var site = site;
  
  var token = 0;
  
  // get the calendar
  var calendar = CalendarApp.getCalendarById('service@fullrange.com.au');
  
  var monthlySeries = CalendarApp.createEventSeries('Monthly Service Run', new Date() , new Date(),CalendarApp.newRecurrence().addMonthlyRule().interval(1) ,
    {location: site});
  
  // make monthly service event
  // make six monthly service event
  // make annual service event
  
  

}
