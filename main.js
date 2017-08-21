var days = document.getElementById("days");
for(i=1; i<=31; i++){
 var day = document.createElement("option");
  day.setAttribute("value", i);
  var day_text= document.createTextNode(i);
  day.appendChild(day_text);
  days.appendChild(day);
}

var months = document.getElementById("months");
for(i=1; i<=12; i++){
  var month = document.createElement("option");
  month.setAttribute("value", i);
  var month_text = document.createTextNode(i);
  month.appendChild(month_text);
  months.appendChild(month);
}
var years = document.getElementById("years");
for(i=1980;i<=2000;i++){
  var year = document.createElement("option");
  year.setAttribute("value", i);
  var year_text = document.createTextNode(i);
  year.appendChild(year_text);
  years.appendChild(year);
}

document.getElementById("btn").addEventListener("click", function(){

  if(days.options[days.selectedIndex].value ==0 || months.options[months.selectedIndex].value ==0 || years.options[years.selectedIndex].value ==0){
    alert("musisz wybrać datę swojego urodzenia, gamoniu...");
  }
  else{
    var x = new Date();
    var get_year = x.getFullYear();
    var get_month = x.getMonth()+1;
    var get_day = x.getDate();
    
   
   var selected_day = days.options[days.selectedIndex].value;
    
   var selected_month = months.options[months.selectedIndex].value;
  
   var selected_year = years.options[years.selectedIndex].value;
   
    var minus_day =(get_day-selected_day);
    
    var minus_month = (get_month-selected_month);
  
    var minus_year = (get_year-selected_year);
    
    var how_much_month = (minus_month + (minus_year*12));
    
    var how_much_days=(minus_day + (minus_month*31) + (minus_year*365));
    
    var how_much_hours=((minus_day*24) + (minus_month*744) + (minus_year*8928));
    
    var how_much_minutes=((minus_day*1440) +(minus_month*44640) + (minus_year*535680));
    
    var how_much_seconds = ((minus_day*86400) + (minus_month*5184000) + (minus_year*62208000));
    
    
    alert("Żyjesz na tym padole:\n"+how_much_month + " miesięcy. \n" +how_much_days +" dni. \n" +how_much_hours +" godzin \n" + how_much_minutes +" minut. \n" + how_much_seconds +" sekund.");
  }
})