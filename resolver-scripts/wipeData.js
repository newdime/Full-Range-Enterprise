function wipeData(fileToCopy) {
  
  //get the google sheet and declare variables
  var fileToCopy = fileToCopy;
 // var fileToCopy = '123SRIzdWqyCXlA2hFFj2y90KQgJEfNfXwdTpqHNPN_A';
  var ranges, formulas, hours;
  var sheet = fileToCopy.getSheets();
  var i = 0, n = 0, po;
  
  //loop through sheets 
  for(i in sheet)
  {
  if (sheet[i].getName() != "properties")
    {
      
    
    //get the range of data to wipe
    sheet[i].getNamedRanges().forEach(function(item)
           {
           //  Logger.log(item.getName());
             if(item.getName() == 'Data')
             {
              ranges = item; 
             // Logger.log(ranges);
             }
           });
    
    //save the formulas, wipe the data and load the formulas again
   // formulas = hours.getRange().getFormulas();
    ranges.getRange().clearContent();
    }
  }
}
