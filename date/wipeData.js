function wipeData(fileToCopy) {
  
  //get the google sheet and declare variables
  var fileToCopy = fileToCopy;
 // var fileToCopy = '123SRIzdWqyCXlA2hFFj2y90KQgJEfNfXwdTpqHNPN_A';
  var ranges, formulas, hours;
  var sheet = SpreadsheetApp.openById(fileToCopy).getSheets();
  var i = 0, n = 0, po;
  
  //loop through sheets 
  for(i in sheet)
  {
  /*  if (sheet[i].getName() == "properties")
    {
      i++;
    }*/
    
    //get the range of data to wipe
    sheet[i].getNamedRanges().forEach(function(item)
           {
           //  Logger.log(item.getName());
             if(item.getName() == 'Data')
             {
              ranges = item; 
             // Logger.log(ranges);
             }
           if (item.getName() == 'Hours')
           {
             hours = item;
           }
             if (item.getName() == 'PORaised')
             {
             po = item;
             }
           });
    
    //save the formulas, wipe the data and load the formulas again
    formulas = hours.getRange().getFormulas();
    ranges.getRange().clearContent();
    
    var vals = po.getRange().getValues();
    
    Logger.log(vals);

   /* var space = vals.map(function(row, index){
      
      for(var index in row)
      {
        row[index] = "PO:";
      }
      //row = row.map(function (item){item = 0;
                                  // item++});
      
      return row;});
    
    Logger.log(space);
    
    po.getRange().setValues(space);*/
   
    hours.getRange().setFormulas(formulas);
    //Logger.log(formulas);
  }
}
