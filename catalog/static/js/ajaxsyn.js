document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".btnPart2").addEventListener("click", event => {

        var xhttp = creerrequete();


        function creerrequete() {
            var xhttp;

            //requete Internet Explorer
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

            //reponseText : propriété renvoie le texte reçu d'un serveur
            const response = JSON.parse(xhttp.responseText);

            console.log(response)
            //for récupération nom et messages + création de la liste
            for (let i = 0; i < response.participantsajax.nom.length; i++) {

                const newDiv = document.createElement("div");

                const newCont = document.createTextNode("participant " + (i + 1) + " " + response.participantsajax.nom[i] + " dit ");
                const cont = document.createTextNode(response.participantsajax.message[i]);
                newDiv.appendChild(newCont);
                newDiv.appendChild(cont);


                const post = document.getElementById('#nom-post')
                document.body.insertBefore(newDiv, post)



                const btn = document.getElementById('btnPart2');

                function random(number) {
                    return Math.floor(Math.random() * (number + 1));
                }

                const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                btn.style.backgroundColor = rndCol;

            }

        }
                //  instancie une nouvelle requête et l envoie
        xhttp.open("GET", '/participantsAjax', false);
        xhttp.send();


    });


});