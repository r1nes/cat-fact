$(document).ready(function() {

    getFact();
    setInterval(getFact, 3000);

    function getFact() {
        $.get("https://catfact.ninja/fact", function(data, status) {
            $("#catFact").html(data.fact);
        });
    }
});