window.onload = function () {
    var memeform = document.getElementById("memeform");

    memeform.addEventListener("submit", function (event) {
        //prevent reloading the site on form submit
        event.preventDefault();

        //get all three form values
        var urlStr = document.getElementById("memeurl").value;
        var texttopStr = document.getElementById("text-top").value;
        var textbottomStr = document.getElementById("text-bottom").value;

        //New element with the memerow content
        var memerow = document.getElementById("memerow");

        memerow.innerHTML += "<div class='meme' id=" + getLastDivID() + "><div class='col meme-text'><img class='img-container rounded' src='" + urlStr + "' alt='...'><div class='centered-top'>" + texttopStr + "</div><div class='centered-bottom'>" + textbottomStr + "</div></div><div class='mt-2'><p class='text-center'><button type='button' class='btn btn-secondary btn-sm' name='removebutton'>Remove Meme</button></p></div></div>"

        addRemoveListener();
        document.getElementById("memeform").reset();

    }, false);

    function getLastDivID() {
        return document.querySelectorAll('#memerow .meme').length + 1;
    }

    function addRemoveListener() {
        var removeButtons = document.getElementsByName("removebutton");

        for (var i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener("click", function () {
                var currentbutton = event.target;
                var memeRemove = currentbutton.parentElement.parentElement.parentElement;

                memeRemove.parentNode.removeChild(memeRemove);
            });
        }
    }
}