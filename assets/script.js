// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Get the current hour using Day.js
    var currentHour = dayjs().hour();

    // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  function updateColors() {
    $('.time-block').each(function () {

  var blockHour = parseInt($(this).attr("id").split("-")[1]);
 
  if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass('present future');
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
    $(this).removeClass('past future');
  } else {
    $(this).addClass("future");
    $(this).removeClass('past present');
   }
  });
  }
 
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  $('.saveBtn').on('click', function () {
    var block = $(this).parent();
    var blockHour = block.attr('id');
    var description = block.find('.description').val();

    localStorage.setItem(blockHour, description);
  });

  function loadDescriptions() {
    $('.time-block').each(function () {
      var blockHour = $(this).attr('id');
      var description = localStorage.getItem(blockHour);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
  }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Call the functions to update colors and load descriptions
  updateColors();
  loadDescriptions();

});
