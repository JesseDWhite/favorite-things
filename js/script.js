$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        let city = $("#favorite-city").val();
        let car = $("#favorite-car").val();
        let holiday = $("#favorite-holiday").val();
        let food = $("#favorite-food").val();
        let favoraiteThings = [city, car, holiday, food];


        console.log(favoraiteThings);
        $("#citySelect").text(favoraiteThings[0]);
        $("#carSelect").text(favoraiteThings[1]);
        $("#holidaySelect").text(favoraiteThings[2]);
        $("#foodSelect").text(favoraiteThings[3]);
        $("#form-result").show();
    });
});










