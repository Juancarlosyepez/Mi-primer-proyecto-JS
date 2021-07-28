var notasJSON = [
  { "CODIGO":"0001","NOMBRE":"JUAN","NOTA":15},
  { "CODIGO":"0002","NOMBRE":"CARLOS","NOTA":18},
  { "CODIGO":"0003","NOMBRE":"YEPEZ","NOTA":19},
  { "CODIGO":"0004","NOMBRE":"CALLO","NOTA":17},
  { "CODIGO":"0005","NOMBRE":"STEVE","NOTA":15},
  { "CODIGO":"0006","NOMBRE":"ALESSANDRA","NOTA":19},
  { "CODIGO":"0007","NOMBRE":"INES","NOTA":12},
  { "CODIGO":"0008","NOMBRE":"JUDITH","NOTA":15},
  { "CODIGO":"0009","NOMBRE":"JESSICA","NOTA":16},
  { "CODIGO":"0010","NOMBRE":"HKRIS","NOTA":15}
];

    function leerJSON(json){
    var out="";
    var titulo="CODIGO "+"NOMBRE "+"NOTA ";
    for (i = 0; i < json.length; i++) {
      out+=json[i].CODIGO+"-" +json[i].NOMBRE+"-"+json[i].NOTA+"<br>";
    }
    document.getElementById("titulo").innerHTML=titulo;
    document.getElementById("tabla").innerHTML=out;
    }

    function calcularNota(json){
    var sum=0;

    for (i = 0; i < json.length; i++) {
      sum+=json[i].NOTA;

    }//alert("Nota Promedio: "+sum/i);
document.getElementById("resultado").innerHTML="Nota Promedio="+sum/i;
    }

    function NotaMayor(json){
        var myMatriz=[];
        var my=0;
        for (i = 0; i < json.length; i++) {
          myMatriz[i]=json[i].NOTA;
        } myMatriz.sort();
          myMatriz.reverse();
        my = myMatriz.shift(i);
        document.getElementById("resultado").innerHTML="Nota Mayor=  "+my;
    }

    function NotaMenor(json){
        var mnMatriz=[];
        var mn=0;
        for (i = 0; i < json.length; i++) {
          mnMatriz[i]=json[i].NOTA;
        } mnMatriz.sort();
        mn = mnMatriz.shift(i);
        document.getElementById("resultado").innerHTML="Nota Menor=  "+mn;
    }

function hacerTabla(){leerJSON(notasJSON)};
function promedio(){calcularNota(notasJSON)};
function Mayor(){NotaMayor(notasJSON)};
function Menor(){NotaMenor(notasJSON)};
