//business logic

var firstRunPrice = 12.00;
var secondRunPrice = 6.00;

function Ticket(movie, showtime, age, firstRun, student) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
  this.firstRun = firstRun;
  this.student = student;
}

Ticket.prototype.getTicketPrice = function() {
  if (this.firstRun === true) {
    var ticketPrice = firstRunPrice;
  } else {
    var ticketPrice = secondRunPrice;
  }
  if (this.showtime === true) {
    ticketPrice = ticketPrice - 2;
  }
  if ((this.age >= 65) ||  (this.age <= 12) || (this.student === true)) {
    ticketPrice = ticketPrice * 0.85;
  }
  return ticketPrice;
}


//UI logic

$(document).ready(function() {

  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    if ($("input:radio[name=showtime]:checked").val() === "matinee") {
      var showtime = true;
    } else {
      var showtime = false;
    }
    var age = $("#age").val();
    if ($("option:selected").attr("class") === "first-run") {
      var firstRun = true;
    } else {
      var firstRun = false;
    }
    if ($("input:checkbox[name=student]:checked").val() === "true"){
      var student = true;
    } else {
      var student = false;
    }

    var newTicket = new Ticket(movie, showtime, age, firstRun, student);
    console.log(newTicket);
    console.log(newTicket.getTicketPrice());

    var result = newTicket.getTicketPrice();
    $("#result").append("Your Ticket Price is: " + result);
  })
})
