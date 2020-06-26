// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(function () {

    // When the page loads, auto-load the first note
    loadScratchpadNote();
    var timer;

    $("#ctlScratchpad").on('input', function () {
        // On text input change, save after 1 seconds has passed
        clearTimeout(timer);

        timer = setTimeout(function () {
            //this will be executed if there is a gap of .5 second between 2 keyup events
            saveScratchpadNote();
        }, 500);
    });

    function loadScratchpadNote() {
        // Function loads the scratchpad notes from the cache
        let note = localStorage.getItem("Scratchpad.Note");

        if (note)
            $("#ctlScratchpad").val(note);

        $("#ctlScratchpad").attr("placeholder", "Enter any notes here and it will auto-save!");
    }

    function saveScratchpadNote() {
        // Function auto-saves the scratchpad note to the cache
        localStorage.setItem("Scratchpad.Note", $("#ctlScratchpad").val());

    }

});