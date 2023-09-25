// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // This code should use the id in the containing time-block as a key to save the user input in local storage.
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  


  // time block creation function - use for loop to create a timeblock ex-"hour-9" html element inside
  // container div for every hour 9-18 containing columns for hour, text area, save button compare each
  // time block time value to current time and add classes for past, present, and future to timeblock object
  // Create the div element
  $(document).ready(function() {

    for(let time of [8,9,10,11,12,13,14,15,16,17,18,19]){
      console.log(time);
      var currentHour12 = parseInt(dayjs().format("h"));
      console.log(currentHour12);
      var currentHour24 = parseInt(dayjs().format("H"));
      console.log(currentHour24);
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

      var divElement = $(`<div id="hour-${time}" class="row time-block ${timeClass}"></div>`);
      $("#container").append(divElement);
      $(`#hour-${time}`).append(`<div class= 'col-2 col-md-1 hour text-center py-3'>${time+amPM}</div>`);
      $(`#hour-${time}`).append("<textarea class= 'col-8 col-md-10 description' rows='3'> </textarea>");
      $(`#hour-${time}`).append("<button class='btn saveBtn col-2 col-md-1' aria-label='save'> <i class='fas fa-save' aria-hidden='true'></i> </button>");
      
      // read from local storage to populate textareas
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
  // localStorage.setItem(key, value);
  //const button = document.getElementById('hour-10');

  //button.addEventListener('click', function() {
  //  const currentDate = dayjs();
  //  console.log(currentDate.format('YYYY-MM-DD HH:mm:ss'));
  //  var formattedDate = currentDate.format("h:mm A");
  //  console.log(formattedDate);
  //});
  
  // TODO: Add code to display the current date in the header of the page.

});
