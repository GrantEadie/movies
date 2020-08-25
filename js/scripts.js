function Movie(name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

function price(selectedTime, selectedAge) {
  if (selectedTime === "noon" && selectedAge === "senior") {
    let price = 5;
    return price;
  } else if ((selectedTime === "noon" && selectedAge === "adult") || (selectedTime === "afternoon" && selectedAge === "senior")) {
    let price = 7;
    return price;
  } else {
    let price = 10;
    return price;
  }
}

// UI Logic
$(document).ready(function() {
  $("form#tron-select").submit(function(event) {
    event.preventDefault();
    const selectedTime = $("input:radio[name=time]:checked").val();
    const selectedAge = $("input:radio[name=age]:checked").val();
    let newMovie = new Movie("TRON", selectedTime, selectedAge);


    $(".show-price").show();
    $(".price").html("$" + price(newMovie.time, newMovie.age));
  });
});