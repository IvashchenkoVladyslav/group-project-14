$(document).ready(function() {
  // Replace the default date with the current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  $('#theCalendar').val('Today');
  // Show the datepicker when the input field is clicked
  $('#theCalendar').click(function() {
    $(this).val(today);
    $(this).datepicker({
      dateFormat: 'yy-mm-dd', // Set the format of the selected date
      minDate: 0, // Disable past dates
      onSelect: function(dateText) {
        // Do something when a date is selected, such as submitting the form
        $('.modal-form').submit();
      }
    }).datepicker('show');
  });
});
