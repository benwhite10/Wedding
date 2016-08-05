function setCountdownTimerFor(dateString) {
    updateInterval(dateString);
    setInterval(function() {
        checkTime(dateString);
    }, 1000);
}

function checkTime(dateString) {
    var date = new Date(Date.now());
    if (date.getSeconds() === 0) {
        updateInterval(dateString);
    }
}

function updateInterval(dateString) {
    var countdownDate = new Date(Date.parse(dateString));
    var currentDate = new Date(Date.now());
    currentDate = calculateMinutes(countdownDate, currentDate);
    currentDate = calculateHours(countdownDate, currentDate);
    currentDate = calculateDays(countdownDate, currentDate);
    currentDate = calculateMonths(countdownDate, currentDate);
}

function calculateMinutes(countdownDate, currentDate) {
    var minutes;
    var countdownMinutes = countdownDate.getMinutes();
    var currentMinutes = currentDate.getMinutes();
    if (countdownMinutes < currentMinutes) {
        minutes =  60 + countdownMinutes - currentMinutes;
        currentDate.setMinutes(countdownMinutes);
        currentDate.setHours(currentDate.getHours() + 1);
    } else {
        minutes = countdownMinutes - currentMinutes;
        currentDate.setMinutes(countdownMinutes);
    }
    updateMinutes(minutes);
    return currentDate;
}

function calculateHours(countdownDate, currentDate) {
    var hours;
    var countdownHours = countdownDate.getHours();
    var currentHours = currentDate.getHours();
    if (countdownHours < currentHours) {
        hours =  24 + countdownHours - currentHours;
        currentDate.setHours(countdownHours);
        currentDate.setDate(currentDate.getDate() + 1);
    } else {
        hours = countdownHours - currentHours;
        currentDate.setHours(countdownHours);
    }
    updateHours(hours);
    return currentDate;
}

function calculateDays(countdownDate, currentDate) {
    var days;
    var countdownDays = countdownDate.getDate();
    var currentDays = currentDate.getDate();
    if (countdownDays < currentDays) {
        days =  daysInMonth(currentDate.getMonth(), currentDate.getFullYear()) + countdownDays - currentDays;
        currentDate.setDate(countdownDays);
        currentDate.setMonth(currentDate.getMonth() + 1);
    } else {
        days = countdownDays - currentDays;
        currentDate.setDate(countdownDays);
    }
    updateDays(days);
    return currentDate;
}

function calculateMonths(countdownDate, currentDate) {
    var months;
    var countdownMonths = countdownDate.getMonth();
    var currentMonths = currentDate.getMonth();
    if (countdownMonths < currentMonths) {
        months =  12 + countdownMonths - currentMonths;
        currentDate.setMonth(countdownMonths);
        currentDate.setYear(currentDate.getYear() + 1);
    } else {
        months = countdownMonths - currentMonths;
        currentDate.setYear(countdownMonths);
    }
    updateMonths(months);
    return currentDate;
}

function updateMinutes(minutes) {
    var text = minutes > 1 ? "minutes" : "minute";
    $('#countdownMinutes').html('<span class="countdown_amount">' + minutes + '</span><br>' + text);
}

function updateHours(hours) {
    var text = hours > 1 ? "hours" : "hour";
    $('#countdownHours').html('<span class="countdown_amount">' + hours + '</span><br>' + text);
}

function updateDays(days) {
    var text = days > 1 ? "days" : "day";
    $('#countdownDays').html('<span class="countdown_amount">' + days + '</span><br>' + text);
}

function updateMonths(months) {
    var text = months > 1 ? "months" : "month";
    $('#countdownMonths').html('<span class="countdown_amount">' + months + '</span><br>' + text);
}

function daysInMonth(month, year) {
    var date = new Date(year, month + 1, 0);
    console.log(date);
    return date.getDate();
}