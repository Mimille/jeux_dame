
document.write('<table>');
	for(var i=0;i<10;i++){
		document.write('<tr>');
		for(var j=0;j<10;j++){
			document.write('<td id=cell-l'+i+'-c'+j+'>');

			if ((i+j)%2 !=0){
			    document.getElementById('cell-l'+i+'-c'+j).className='caseNoir';
			}

			switch (i){
				default: break;
				case 0 :
					switch(j){
						default: break;
						case 1 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 3 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 5 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 7 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 9 : document.write('<img id="vert" src="images/vert.png"/>');break;
					}
					break;
				case 1 :
					switch(j){
						default: break;
            case 0 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 2 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 4 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 6 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 8 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 10: document.write('<img id="vert" src="images/vert.png"/>');break;
					}
					break;
        case 2 :
					switch(j){
						default: break;
            case 1 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 3 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 5 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 7 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 9 : document.write('<img id="vert" src="images/vert.png"/>');break;
					}
					break;
        case 3 :
					switch(j){
						default: break;
            case 0 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 2 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 4 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 6 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 8 : document.write('<img id="vert" src="images/vert.png"/>');break;
						case 10: document.write('<img id="vert" src="images/vert.png"/>');break;
					}
					break;
          case 6 :
  					switch(j){
  						default: break;
              case 1 : document.write('<img id="rose" src="images/rose.png"/>');break;
  						case 3 : document.write('<img id="rose" src="images/rose.png"/>');break;
  						case 5 : document.write('<img id="rose" src="images/rose.png"/>');break;
  						case 7 : document.write('<img id="rose" src="images/rose.png"/>');break;
  						case 9 : document.write('<img id="rose" src="images/rose.png"/>');break;
  				  }
  				break;
				case 7 :
					switch(j){
						default: break;
            case 0 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 2 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 4 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 6 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 8 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 10: document.write('<img id="rose" src="images/rose.png"/>');break;
					}
				break;
				case 8 :
					switch(j){
						default: break;
            case 1 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 3 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 5 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 7 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 9 : document.write('<img id="rose" src="images/rose.png"/>');break;
				  }
				break;
        case 9 :
					switch(j){
						default: break;
            case 0 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 2 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 4 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 6 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 8 : document.write('<img id="rose" src="images/rose.png"/>');break;
						case 10: document.write('<img id="rose" src="images/rose.png"/>');break;
					}
				break;
			}
		}
	}
document.write('</table>');
