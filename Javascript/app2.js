var option=prompt("Elija una opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar");
//validamos que ingrese la opcion correcta, si es correcta evaluamos la frase que no contenga números ni espacios
  if (option!=="1" && option!=="2") {
      } else {
        var phrase = prompt("Ingrese su frase por favor");
      }
 for(var i=0; i<phrase.length;i++) {
    if (phrase.charCodeAt(i) === " ".charCodeAt()||isNaN(phrase[i]) === false) {
        alert("No ingrese números ni espacios en blanco");
         var option=null;
            }
      }
      
                                    //FUNCION PARA CIFRAR
function cipher(phrase){
  var strLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
 
  for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
      var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
      if(Asc>=65 && Asc<=90){                      //Rango para solo las mayusculas
         var NewAsc = (Asc-65 +33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
         var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
         strLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.
      }                                            //en caso contrario si es MINUSCULA.
      else if(Asc>=97 && Asc<=122) {
        var NewAscm = (Asc-97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
        var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
          strLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
      }  
  } return strLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

                                       //FUNCION PARA DESCIFRAR

function decipher(phrase){
  var strLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
  for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
      var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
      if(Asc>=65&& Asc<=90){                      //Rango para solo las mayusculas
         var NewAsc = (Asc+65 -33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
         var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
         strLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.      
      }                                            //en caso contrario si es MINUSCULA.
      else if(Asc >=97 && Asc <= 122){
        var NewAscm = (Asc+97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
        var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
          strLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
      }
  }return strLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

//Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()
  if(option=== "1"){
       alert("Texto Original : "+phrase+"\n"+"Texto Cifrado : "+cipher(phrase));
   } else if(option==="2"){
       alert("Texto Original : "+phrase+"\n"+"Texto Descifrado : "+decipher(phrase));
   }