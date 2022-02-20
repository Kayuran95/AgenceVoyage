document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".btnPart").addEventListener("click", event => {
            // Create an XMLHttpRequest object
            var xhttp = creerrequete();

            function creerrequete() {
                var xhttp;

                if (window.ActiveXObject) {
                    try {
                        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        xhttp = false;
                    }
                } else {
                    try {
                        xhttp = new XMLHttpRequest();
                    } catch (e) {
                        xhttp = false;
                    }
                }

                if (!xhttp)
                    alert("cant create that object")
                else
                    return xhttp;
            }

// Define a callback function
            xhttp.onload = function () {

                const response = JSON.parse(xhttp.responseText);

                console.log(response)
                for (let i = 0; i < response.participantsajax.nom.length; i++) {

                    const newDiv = document.createElement("div");

                    const newCont = document.createTextNode("participant " + (i + 1) + " " + response.participantsajax.nom[i] + " dit ");
                    const cont = document.createTextNode(response.participantsajax.message[i]);
                    newDiv.appendChild(newCont);
                    newDiv.appendChild(cont);
                    console.log(i);


                    const post = document.getElementById('#nom-post')
                    document.body.insertBefore(newDiv, post)

                }

            }

            // Send a request
            xhttp.open("GET", '/participantsAjax', true);
            xhttp.send();

            const btn = document.getElementById('btnPart');

            function random(number) {
                return Math.floor(Math.random() * (number + 1));
            }

            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            btn.style.backgroundColor = rndCol;
        }
    )
    ;


});