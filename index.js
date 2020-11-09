console.log("this is our second time application");

function updateTime() {
    time = new Date();

    let currentHour = time.getHours();

    let currentMinute = time.getMinutes();

    let currentSecond = time.getSeconds();

    let dayTime = (currentHour < 12) ? "AM" : "PM";

    currentHour = (currentHour == 00) ? 12 : currentHour;
    currentHour = (currentHour == 12) ? 12 : currentHour;
    currentHour = (currentHour>12) ? currentHour-12 : currentHour;

    currentHour = (currentHour<10) ? "0"+currentHour : currentHour;
    currentMinute = (currentMinute<10) ? "0"+currentMinute : currentMinute;
    currentSecond = (currentSecond<10) ? "0"+currentSecond : currentSecond;

    let timeSection = document.getElementById("time");
    timeSection.innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond + " " + dayTime

    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednessday", "Thursday", "Friday", "Saturday"]

    let month = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]

    let currentDay = time.getDay();
    let currentDate = time.getDate();
    let currentMonth = time.getMonth();
    let currentYear = time.getFullYear();
    // console.log(days[currentDay])
    let dayHtml = document.getElementById("days");
    dayHtml.innerHTML = days[currentDay]
    let dateHtml = document.getElementById("date");
    dateHtml.innerHTML = currentDate;
    let monthHtml = document.getElementById("month");
    monthHtml.innerHTML = month[currentMonth]
    let yearHtml = document.getElementById("year");
    yearHtml.innerHTML = currentYear

}
