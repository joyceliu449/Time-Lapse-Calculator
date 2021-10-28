$(".cal").click(function() {
    let name = $(".name").val();
    let monthly = $(".monthly").val();
    let money = (monthly * 12 * 29);
    let most = $(".most").val();
    $(".results").text(name + " will have spent $" + money + " on " + most + " by 2050.");
});

$(".reset").click(function() {
    location.reload();
});