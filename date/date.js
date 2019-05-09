function date(token, returnData) {

  var token = token;
  var returnData = returnData;
  var week = 7;

  // get current date and day of the week
  var date = new Date();
  var day = date.getDay();
  Logger.log(date);
  Logger.log(day);

  // change the date to monday
  if(day != 1)
  {
    var difference = day - 1;
    Logger.log(difference);
  }

  // set date to forward week if necessary
  if(token == 1)
  {
    date.setDate(date.getDate()+week);
  }

  // set date to previous week * 2
  if(token == 2)
  {
    date.setDate(date.getDate()-(week*2));
  }

  // create the document name
  date.setDate(date.getDate()-difference);
  var startDate = Utilities.formatDate(date, "GMT+11", "dd/MM/yy");
  date.setDate(date.getDate()+(week-1));
  var endDate = Utilities.formatDate(date, "GMT+11", "dd/MM/yy");
  date.setDate(date.getDate()-(week-1));
  var reportName = (startDate + " - " + endDate);

  // return the doc name
  if (returnData == 0)
  {
    return reportName
  }

  Logger.log(startDate);
  Logger.log(endDate);
  Logger.log(reportName);

  // fill array with new sheet names
  var i = 1;
  var sheetArr = [];
  sheetArr[0] = Utilities.formatDate(date, "GMT+11", "dd/MM/yy");
  while (i < week)
  {
    var sheetNames = date.setDate(date.getDate()+(1));
    sheetArr[i] = Utilities.formatDate(date, "GMT+11", "dd/MM/yy");
    i++
  }
  Logger.log(sheetArr);

  // return the sheet name
  if (returnData == 1)
  {
    return sheetArr
  }

  // concatenate and return
  var data = sheetArr.concat(reportName);
  Logger.log(data);
  return data

}
