// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  
  // gets current time and date and displays it
  var currentTime = dayjs().format("dddd, MMMM D h:mm A");
  var timeDate = $(`<div class="bold date">${currentTime}</div>`);
  $("#head").append(timeDate);

  // Create the div element
  $(document).ready(function() {

    // build calendar
    for(let time of [8,9,10,11,12,13,14,15,16,17,18,19]){
      
      // declare variables
      var currentHour12 = parseInt(dayjs().format("h"));
      var currentHour24 = parseInt(dayjs().format("H"));
      var timeClass;
      var amPM = " AM";

      //compare timeblock time to current time
      if (time<currentHour24){
        timeClass = "past";
      }
      else if (time == currentHour24){
        timeClass = "present";
      }
      else {
        timeClass = "future";
      }

      // convert hour label to 12hour time
      if (time>12){
        time -= 12;
        amPM = " PM"
      }

      // Build timeboxes
      var divElement = $(`<div id="hour-${time}" class="row time-block ${timeClass}"></div>`);
      $("#container").append(divElement);
      $(`#hour-${time}`).append(`<div class= 'col-2 col-md-1 hour text-center py-3'>${time+amPM}</div>`);
      $(`#hour-${time}`).append("<textarea class= 'col-8 col-md-10 description' rows='3'> </textarea>");
      $(`#hour-${time}`).append("<button class='btn saveBtn col-2 col-md-1' aria-label='save'> <i class='fas fa-save' aria-hidden='true'></i> </button>");
      
      // read from local storage to populate textareas

      //let #hour-${time}.textarea = localStorage.getItem(#hour-${time});

      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      // local storage search function - call local storage search for each timeblock to find hour and text values, then 
      // json parse last entry's time(key) and text(value)
      // let `#hour-${time}.textarea` = localStorage.getItem(#hour-${time});
    }
  
  
  

    // Append the div element to the body or any other element

  }
  );


  // save button - on click, set timeblock hour as key and entered text (with appended current time) 
  // as value to local storage 
  localStorage.setItem(key, value);
  //const button = document.getElementById('hour-10');

  button.addEventListener('click', function() {
    
  });
  
  // TODO: Add code to display the current date in the header of the page.

});
