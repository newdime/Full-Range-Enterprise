function checkDueService() {
  
  // open the service database
  var service = SpreadsheetApp.openById('1EGGCOoYX3V6KLxdvUV_94eprvJWReOBQL8g4onyi4iA').getActiveSheet().getNamedRanges();
  
  // get the named range
  var ranges = service.slice(4);
 
  Logger.log('service ' + service);
  Logger.log('slice ' + ranges);  
  
  // 
  var type;
  for (var i in ranges)
  {
    type = ranges[i].getName();
    Logger.log(type);
    switch (type)
        {
      case 0:
        type = 'MONTHLY';
        Logger.log(ranges[i].getName() + " " + ranges[i].getRange().getValues());
        break;
      case 1:
        type = 'SIXMONTHLY';
        break;
      case 2:
        type = 'ANNUAL';
        break;
      case 3:
        type = 'OTHER';
        break;
      case 4:
        type = 'DUEMONTHLY';
        break;
      case 5:
        type = 'DUESIXMONTHLY';
        break;
      case 6:
        type = 'DUEANNUAL';
        break;
      case 7:
        type = 'DUEOTHER';
        break;   
    }
    
  }
  //service.forEach(function(item){if()});
  
  var date = new Date ('April 02, 2019');
  Logger.log(date);
  Logger.log(Utilities.formatDate(date,"Australia/Sydney" , 'dd-MM-yy'));
  
  
}
