  // JavaScript program
  // document.addEventListener('DOMContentLoaded', function() {
  //   var button = document.querySelector('.btn-primary');
  //   button.addEventListener('click', function() {
  //     event.preventDefault();
  //       var movieTitle = button.parentNode.querySelector('.card-title').textContent;
  //     alert('Button clicked!');
  //   });
  // });

  document.addEventListener('DOMContentLoaded', function() {
    var watchNowButtons = document.querySelectorAll('.btn-primary');
    watchNowButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        var movieTitle = button.parentNode.querySelector('.card-title').textContent;
        alert('You clicked the "Watch Now" button for ' + movieTitle);
      });
    });
  });
