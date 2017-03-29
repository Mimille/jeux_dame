$(document).ready(function(){
    $("body").append(creationDamier());
    survolSouris();
});

function creationDamier() {
    var html = "<table>";

    for (var i = 0; i < 10 ; i++){
        html += "<tr>";

        for(var j = 0; j < 10 ; j++){
            var casePlusJ = j+1;
            var casePlusI = i+1;

            if ((j % 2) == (i % 2)){
                html += "<td id='cell-c" + casePlusJ + "-l" + casePlusI + "'></td>";
            }else{
                if(i == 0 || i == 1 || i == 2 || i == 3){
                    html += "<td class='caseNoire' id=cell-c" + casePlusJ + "-l" + casePlusI + "><img class=vert id=vert" + (i + j) + " src='images/vert.png' alt='image'></td>";
                }else if(i == 6 || i == 7 || i == 8 || i == 9){
                    html += "<td class='caseNoire' id=cell-c" + casePlusJ + "-l" + casePlusI + "><img id=rose" + (i + j) + " src='images/rose.png' alt='image'></td>";
                }else{
                    html += "<td class='caseNoire' id=cell-c" + casePlusJ + "-l" + casePlusI + "></td>";
                }
            }
        }
    }

    html +="</table>";

    return html;
}

//survol de la souris : background red
function survolSouris(){
    $(".vert").on("mouseover", function () {
       $(this).css("background", "red");
    });

    $(".vert").on("mouseout", function () {
        $(this).css("background", "");
    });
}