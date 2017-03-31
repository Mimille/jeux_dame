var tour = 'rose';

$(document).ready(function () {
  $("body").append(creationDamier());
  survolSouris();
  jeuxPossible();
  SelectionPion();
  DeplacementPions();

  afficherTour();
  jouerTour();
});

function afficherTour() {
  if (tour == 'rose') {
    $('#tour').text("Tour : Rose").toggleClass("texte");

  } else {
    $('#tour').text("Tour : Vert");
  }
}

function changerTour() {
  if (tour == 'rose') {
    tour = 'vert';
  } else {
    tour = 'rose';
  }

  jouerTour();
}

function jouerTour() {
  if (tour == 'rose') {
    tourDesRoses();
  } else {
    tourDesVerts();
  }
}

function tourDesRoses() {
  var $jeu = $('#jeu');

  $jeu.find("[id^=rose]").draggable({
    grid: [50, 50],
    revert: 'invalid',
    opacity: .5,
    stop: function (e, ui) {
      if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
        $(this).draggable('destroy');
      }
    }
  });
}

function tourDesVerts() {
  var $jeu = $('#jeu');

  $jeu.find("[id^=vert]").draggable({
    grid: [50, 50],
    revert: 'invalid',
    opacity: .5,
    stop: function (e, ui) {
      if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
        $(this).draggable('destroy');
      }
    }
  });
}

function creationDamier() {
  var html = "<table id='jeu'>";
  var compteur = 0;

  for (var i = 0; i < 10; i++) {
    html += "<tr>";

    for (var j = 0; j < 10; j++) {

      if ((i + j) % 2 == 0) {
        html += "<td class='caseBlanche' id='cell-l" + i + "-c" + j + "'>";
      }
      else {
        if (i == 0 || i == 1 || i == 2 || i == 3) {
          html += "<td class='caseNoire' id='" + i + j + "'><img class=vert id=vert" + compteur + " src='images/vert.png' alt='image'>";
        }
        else if (i == 6 || i == 7 || i == 8 || i == 9) {
          html += "<td class='caseNoire' id='" + i + j + "'><img class=rose id=rose" + compteur + " src='images/rose.png' alt='image'>";
        }
        else {
          html += "<td class='caseNoire' id='" + i + j + "'>";
        }
        compteur++;
      }
    }
  }

  html += "</table>";

  return html;
}


function survolSouris() {
  $("#jeu").on("mouseover", '.vert, .rose', function () {
    $(this).parent().css("background", "red");
  }).on("mouseout", '.vert, .rose', function () {
    $(this).parent().css("background", "");
  });
}

function jeuxPossible() {
  var $jeu = $("#jeu");

  $jeu.find(".vert").on("mouseover", function () {
    var idligne9 = parseInt($(this).parent().attr("id")) + 9;
    var idligne11 = parseInt($(this).parent().attr("id")) + 11;

    if ($jeu.find("#" + idligne9 + ":empty").val() == '' || $jeu.find("#" + idligne11 + ":empty").val() == '') {
      $jeu.find("#" + idligne9).css("background", "green");
      $jeu.find("#" + idligne11).css("background", "green");
    }
  }).on('mouseout', function () {
    $jeu.find(".caseNoire").css('background', '');
  });

  $jeu.find(".rose").on("mouseover", function () {
    var idligne9 = parseInt($(this).parent().attr("id")) - 9;
    var idligne11 = parseInt($(this).parent().attr("id")) - 11;

    if ($jeu.find("#" + idligne9 + ":empty").val() == '' || $jeu.find("#" + idligne11 + ":empty").val() == '') {
      $jeu.find("#" + idligne9).css("background", "green");
      $jeu.find("#" + idligne11).css("background", "green");
    }
  }).on('mouseout', function () {
    $jeu.find(".caseNoire").css('background', '');
  });
}


function SelectionPion() {
  /*var count = 0;

   $(".vert").on("click", function(){
   count ++ ;
   var idligne9 = parseInt($(this).parent().attr("id")) + 9;
   var idligne11 = parseInt($(this).parent().attr("id")) + 11;
   if($("#" + idligne9 + ":empty").val() == '' || $("#" + idligne11 + ":empty").val() == ''){
   if(count == 1){
   $(this).css("width", "60%");
   $(this).css("height", "60%");
   $(this).parent().css("background", "#F4D17B");
   }
   else  {
   $(this).css("width", "50%");
   $(this).css("height", "50%");
   $(this).parent().css("background", "red");
   count = 0;
   }
   }

   console.log(count);
   });*/
}


function DeplacementPions() {
  var $jeu = $("#jeu");

  $jeu.find('.caseNoire').droppable({
    accept: function ($pion) {
      var $case = $(this);
      var ancienneCase = $pion.parent();
      var ancienneCaseId = parseInt(ancienneCase.attr('id'));
      var caseId = parseInt($case.attr('id'));

      if (/^vert/.test($pion.attr('id'))) {
        return ancienneCaseId + 9 == caseId || ancienneCaseId + 11 == caseId
      } else {
        return ancienneCaseId - 9 == caseId || ancienneCaseId - 11 == caseId
      }
    },
    drop: function (e, ui) {
      var $case = $(this);

      if (!$case.is(':empty')) {
        var $pionAdverse = $case.find(':first');
        console.log(ui.draggable.attr('id') + ' vient de prendre ' + $pionAdverse.attr('id'));

        if (/^vert/.test($pionAdverse.attr('id'))) {
          $('#score-roses').append($pionAdverse);
        } else {
          $('#score-verts').append($pionAdverse);
        }

        $pionAdverse.css({
          height: 24,
          width: 24,
        });
      }

      $(this).append(ui.draggable);
      // à cause du .draggable()
      ui.draggable.css('position', '');
      ui.draggable.css('top', '');
      ui.draggable.css('left', '');
      // reset les cases colorées par survoleSouris() et jeuxPossibles()

      $jeu.find(".vert, .rose").each(function () {
        $(this).parent().css('background', '');
      });

      changerTour();
      afficherTour();
      jouerTour();
    }
  });
}
