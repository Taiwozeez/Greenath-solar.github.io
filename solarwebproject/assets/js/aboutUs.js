function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    
    const now = new Date();
    
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);

   
    const time = now.toLocaleTimeString('en-US', { hour12: false });

    
    dateTimeElement.textContent = `${date} | ${time}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();

