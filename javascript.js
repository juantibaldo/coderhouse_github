function showDate() {
    var myDate = document.getElementById("currentDate");
  
    var date = new Date();
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    
    var mm = monthNames[date.getMonth()];
    var today = `${mm} ${date.getDate()}, ${date.getFullYear()}`;
  
    myDate.innerText = `${today}`;
  }
  
  setInterval(showDate, 1000);
  

 