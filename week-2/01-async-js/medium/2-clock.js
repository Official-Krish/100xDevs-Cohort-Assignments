// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const currentTime = new Date();

    // Format: HH:MM:SS
    const hhmmssFormat = currentTime.toLocaleTimeString('en-US', { hour12: false });

    // Format: HH:MM:SS AM/PM
    const hhmmssAmPmFormat = currentTime.toLocaleTimeString('en-US');

     // Display the time in both formats
    console.log(hhmmssFormat);
    console.log(hhmmssAmPmFormat);
   
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();