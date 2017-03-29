function creationDamier() {
    document.write('<table>');
    for (var i = 0; i < 10; i++) {
        document.write('<tr>');
        for (var j = 0; j < 10; j++) {
            document.write('<td id=cell-l' + i + '-c' + j + '>');

            if ((i + j) % 2 != 0) {
                document.getElementById('cell-l' + i + '-c' + j).className = 'caseNoir';
            }

            switch (i) {
                default:
                    break;
                case 0 :
                    switch (j) {
                        default:
                            break;
                        case 1 :
                            document.write('<img id="vert1" src="images/vert.png"/>');
                            break;
                        case 3 :
                            document.write('<img id="vert2" src="images/vert.png"/>');
                            break;
                        case 5 :
                            document.write('<img id="vert3" src="images/vert.png"/>');
                            break;
                        case 7 :
                            document.write('<img id="vert4" src="images/vert.png"/>');
                            break;
                        case 9 :
                            document.write('<img id="vert5" src="images/vert.png"/>');
                            break;
                    }
                    break;
                case 1 :
                    switch (j) {
                        default:
                            break;
                        case 0 :
                            document.write('<img id="vert6" src="images/vert.png"/>');
                            break;
                        case 2 :
                            document.write('<img id="vert7" src="images/vert.png"/>');
                            break;
                        case 4 :
                            document.write('<img id="vert8" src="images/vert.png"/>');
                            break;
                        case 6 :
                            document.write('<img id="vert9" src="images/vert.png"/>');
                            break;
                        case 8 :
                            document.write('<img id="vert10" src="images/vert.png"/>');
                            break;
                    }
                    break;
                case 2 :
                    switch (j) {
                        default:
                            break;
                        case 1 :
                            document.write('<img id="vert11" src="images/vert.png"/>');
                            break;
                        case 3 :
                            document.write('<img id="vert12" src="images/vert.png"/>');
                            break;
                        case 5 :
                            document.write('<img id="vert13" src="images/vert.png"/>');
                            break;
                        case 7 :
                            document.write('<img id="vert14" src="images/vert.png"/>');
                            break;
                        case 9 :
                            document.write('<img id="vert15" src="images/vert.png"/>');
                            break;
                    }
                    break;
                case 3 :
                    switch (j) {
                        default:
                            break;
                        case 0 :
                            document.write('<img id="vert16" src="images/vert.png"/>');
                            break;
                        case 2 :
                            document.write('<img id="vert17" src="images/vert.png"/>');
                            break;
                        case 4 :
                            document.write('<img id="vert18" src="images/vert.png"/>');
                            break;
                        case 6 :
                            document.write('<img id="vert19" src="images/vert.png"/>');
                            break;
                        case 8 :
                            document.write('<img id="vert20" src="images/vert.png"/>');
                            break;
                    }
                    break;
                case 6 :
                    switch (j) {
                        default:
                            break;
                        case 1 :
                            document.write('<img id="rose1" src="images/rose.png"/>');
                            break;
                        case 3 :
                            document.write('<img id="rose2" src="images/rose.png"/>');
                            break;
                        case 5 :
                            document.write('<img id="rose3" src="images/rose.png"/>');
                            break;
                        case 7 :
                            document.write('<img id="rose4" src="images/rose.png"/>');
                            break;
                        case 9 :
                            document.write('<img id="rose5" src="images/rose.png"/>');
                            break;
                    }
                    break;
                case 7 :
                    switch (j) {
                        default:
                            break;
                        case 0 :
                            document.write('<img id="rose6" src="images/rose.png"/>');
                            break;
                        case 2 :
                            document.write('<img id="rose7" src="images/rose.png"/>');
                            break;
                        case 4 :
                            document.write('<img id="rose8" src="images/rose.png"/>');
                            break;
                        case 6 :
                            document.write('<img id="rose9" src="images/rose.png"/>');
                            break;
                        case 8 :
                            document.write('<img id="rose10" src="images/rose.png"/>');
                            break;
                    }
                    break;
                case 8 :
                    switch (j) {
                        default:
                            break;
                        case 1 :
                            document.write('<img id="rose11" src="images/rose.png"/>');
                            break;
                        case 3 :
                            document.write('<img id="rose12" src="images/rose.png"/>');
                            break;
                        case 5 :
                            document.write('<img id="rose13" src="images/rose.png"/>');
                            break;
                        case 7 :
                            document.write('<img id="rose14" src="images/rose.png"/>');
                            break;
                        case 9 :
                            document.write('<img id="rose15" src="images/rose.png"/>');
                            break;
                    }
                    break;
                case 9 :
                    switch (j) {
                        default:
                            break;
                        case 0 :
                            document.write('<img id="rose16" src="images/rose.png"/>');
                            break;
                        case 2 :
                            document.write('<img id="rose17" src="images/rose.png"/>');
                            break;
                        case 4 :
                            document.write('<img id="rose18" src="images/rose.png"/>');
                            break;
                        case 6 :
                            document.write('<img id="rose19" src="images/rose.png"/>');
                            break;
                        case 8 :
                            document.write('<img id="rose20" src="images/rose.png"/>');
                            break;
                    }
                    break;
            }
        }
    }
    document.write('</table>');
}
creationDamier();

//survol de la souris : background red
/*function survolSouris(){
    for(var i = 0; i < 21; i++){
        for(var j = 0; j < 21; j++){

			//oeufs verts
			document.getElementById("vert" + (j+1)).addEventListener("mouseover", backgroundRouge);
			document.getElementById("vert" + (j + 1)).addEventListener("mouseout", backgroundNormal);

			//oeufs roses
			document.getElementById("rose" + (j + 1)).addEventListener("mouseover", backgroundRouge);
			document.getElementById("rose" + (j + 1)).addEventListener("mouseout", backgroundNormal);

        }
    }
}
survolSouris();

//fontion pour que ça devienne rouge au passage de la souris
function backgroundRouge(){
    document.getElementById(this.id).className = "caseRouge";
}

//fonction pour que ça redevienne normal lorsque la souris est passée
function backgroundNormal(){
    document.getElementById(this.id).className = "";
}*/
