function nameSchedule(ss, token, Plus) {
  
  var token = token;
  var Plus = Plus;
  
  //Get active book and sheet
  var activeworkbook = ss;
  var activesheet = activeworkbook.getSheets();
  
  // reverse token state if starting fresh
  /* if (Plus == 0)
  {
  // nearMonth
  if (token == 0)
  {
  token = 1;
  }
  // farMonth
  if (token == 1)
  {
  token = 0;
  }
  }*/
  
  // get the date range from the prior week
  // this identifies the the lagging report card date range so not to overwrite it
  var priorDate = new Date();
  var priorLastDay = new Date();
  priorDate.setDate(priorDate.getDate()-28);
  priorLastDay.setDate(priorLastDay.getDate()-1);
  
  //format the date for the lagging week
  var fPriorDate = Utilities.formatDate(priorDate, "GMT+10", "dd/MM/yy - ");
  var fPriorLastDay = Utilities.formatDate(priorLastDay, "GMT+10", "dd/MM/yy");
  var farDate = fPriorDate + fPriorLastDay;
  // Logger.log("far date " + farDate);
  
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
       
      
      var range = activesheet[i].getRange("D1:BU1");
      Logger.log(arrLength);
      while (j < arrLength + 1)
      {
        
        cellTranspose[j] = nameCell[i][j];
        Logger.log("cell transpose" + cellTranspose[j]);
        //Logger.log("name cell " + nameCell[i][j]);
        //Logger.log(cellTranspose[j]);
        var cell = range.getCell(1, c);
        cell.setValue(cellTranspose[j]);
        c = c + 10;
        j++   
      }
      j = 0;
      c = 1;
      //Logger.log(i);
    }
    }
    return nameBook;
  }
  return token = 0;
}