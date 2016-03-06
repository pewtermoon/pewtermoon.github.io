$(document).ready(function() {
    var environment = flock.init();
    x();
    
    function startEnv() {
	$(this).text("Stop");
	environment.start();
	$(this).one("click", stopEnv);
    }

    function stopEnv() {
	$(this).text("Play");
	environment.stop();
	$(this).one("click", startEnv);
    }

    $("#myButton").one("click", startEnv);
});
