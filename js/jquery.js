$(document).ready(function(){
    $("body").append(creationDamier());
    survolSouris();
    jeuxPossible();
    DeplacementPions();
});

function creationDamier() {
    var html = "<table>";
    var compteur = 0;

    for (var i = 0; i < 10 ; i++){
        html += "<tr>";

        for(var j = 0; j < 10 ; j++){

            if ((i + j) % 2 == 0) {
                html += "<td id='cell-l" + i + "-c" + j + "'>";
            }
            else{
                if(i == 0 || i == 1 || i == 2 || i == 3) {
                    html += "<td class='caseNoire' id='" + i + j + "'><img class=vert id=vert" + compteur + " src='images/vert.png' alt='image'>";
                }
                else if(i == 6 || i == 7 || i == 8 || i == 9){
                    html += "<td class='caseNoire' id='" + i + j + "'><img class=rose id=rose" + compteur + " src='images/rose.png' alt='image'>";
                }
                else{
                    html += "<td class='caseNoire' id='" + i + j + "'>";
                }
                compteur++;
            }
        }
    }

    html +="</table>";

    return html;
}


function survolSouris(){
    $(".vert").on("mouseover", function () {
       $(this).parent().css("background", "red");
    })
        .on("mouseout", function () {
        $(this).parent().css("background", "");
    });

    $(".rose").on("mouseover", function () {
        $(this).parent().css("background", "red");
    })
        .on("mouseout", function () {
        $(this).parent().css("background", "");
    });
}

function jeuxPossible(){

  $(".vert").on("mouseover", function () {
      var idligne9 = parseInt($(this).parent().attr("id")) + 9;
      var idligne11 = parseInt($(this).parent().attr("id")) + 11;

      if($("#" + idligne9 + ":empty").val() == '' || $("#" + idligne11 + ":empty").val() == ''){
          $("#" + idligne9).css("background", "green");
          $("#"+idligne11).css("background", "green");
      }
  })
      .on("mouseout", function () {
      var idligne9 = parseInt($(this).parent().attr("id")) + 9;
      var idligne11 = parseInt($(this).parent().attr("id")) + 11;

      $("#" + idligne9).css("background", "");
      $("#" + idligne11).css("background", "");
  });


    $(".rose").on("mouseover", function () {
        var idligne9 = parseInt($(this).parent().attr("id")) - 9;
        var idligne11 = parseInt($(this).parent().attr("id")) - 11;

        if($("#" + idligne9 + ":empty").val() == '' || $("#" + idligne11 + ":empty").val() == ''){
            $("#" + idligne9).css("background", "green");
            $("#"+idligne11).css("background", "green");
        }
    })
        .on("mouseout", function () {
            var idligne9 = parseInt($(this).parent().attr("id")) - 9;
            var idligne11 = parseInt($(this).parent().attr("id")) - 11;

            $("#" + idligne9).css("background", "");
            $("#" + idligne11).css("background", "");
        });
}


function DeplacementPions(){
  var count = 0;
  $(".vert").on("click", function(){
     count ++ ;
     if(count == 1){
       $(this).css("width", "60%");
       $(this).css("height", "60%");
       $(this).parent().css("background", "#F4D17B");
     }
     else {
       $(this).css("width", "50%");
       $(this).css("height", "50%");
       $(this).parent().css("background", "red");
       count = 0;
     }
     console.log(count);
  });
}
