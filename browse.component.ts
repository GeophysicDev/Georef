import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { action, Application } from '@nativescript/core'
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { CoreTypes } from '@nativescript/core';
//import {idfoto_textfield} from 'src/app/browse/browse.component';
CoreTypes.Accuracy;
var storage = require("nativescript-android-fs");
import { ImageSource, knownFolders, path } from '@nativescript/core';


@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  //-------------------------- Declaración de los arreglos usados para maniobrar los datos --------------------------//
  headers2: string[]=['idencuesta', 'idfoto', 'religion', 'alcaldía', 'localidad','tresidencia','profesion','userMail',
  'edad','ult_grad_est','sexo'];
  headers3: string[]= new Array(39) ;

      //Creamos un arreglo para cada pregunta, y añadimos un espacio para cuando los exportemos
      idencuesta_arr: string[] =["Id encuesta"] ;
      idfoto_arr: string[]=["Id foto"];
      religion_arr: string[]=["Religion" ];
      alcaldia_arr: string[]=["Alcaldia" ];
      localidad_arr: string[]=["Id encuesta"];
      tresidencia_arr: string[]=["Tiempo de residencia"]
      profesion_arr: string[]=["Profesión" ];
      userMail_arr: string[]=["Correo" ];
      edad_arr: string[]=["Edad"];
      ult_grad_est_arr: string[]=["Ultimo grado de estudios "];
      sexo_arr: string[]=["Sexo" ];
      userQ1_arr: string[]=["Pregunta 1" ];
      userQ2_arr: string[]=["Pregunta 2" ];
      userQ3_arr: string[]=["Pregunta 3"];
      userQ4_arr: string[]=["Pregunta 4"];
      userQ5_arr: string[]=["Pregunta 5"];
      userQ6_arr: string[]=["Pregunta 6"];
      userQ7_arr: string[]=["Pregunta 7"];
      userQ8_arr: string[]=["Pregunta 8"];
      userQ9_arr: string[]=["Pregunta 9"];
      userQ10_arr: string[]=["Pregunta 10"];
      userQ11_arr: string[]=["Pregunta 11" ];
      userQ12_arr: string[]=["Pregunta 12"];
      userQ13_arr: string[]=["Pregunta 13"];
      userQ14_arr: string[]=["Pregunta 14"];
      userQ15_arr: string[]=["Pregunta 15"];
      userQ16_arr: string[]=["Pregunta 16" ];
      userQ17_arr: string[]=["Pregunta 17" ];
      userQ18_arr: string[]=["Pregunta 18"];
      userQ19_arr: string[]=["Pregunta 19"];
      userQ20_arr: string[]=["Pregunta 20"];
      userQ21_arr: string[]=["Pregunta 21"];
      userQ22_arr: string[]=["Pregunta 22"];
      userQ23_arr: string[]=["Pregunta 23"];
      userQ24_arr: string[]=["Pregunta 24"];
      userQ25_arr: string[]=["Pregunta 25"];
      userQ26_arr: string[]=["Pregunta 26"];
      userQ27_arr: string[]=["Pregunta 27"];
      userQ28_arr: string[]=["Pregunta 28"];
//----------------------------------------------- Prealmacenamiento de los datos  --------------------------------------------//
  //Variables usadas para almacenar información de la encuesta, esto te permitirá manipular y visualizar los datos, sin necesidad de tocar el arreglo
        idencuesta: String="";//
        idfoto: String="";
        religion: String="";
        alcaldia: String="";
        localidad: String="";
        tresidencia: String="";
        profesion: String="";
        userMail: String="";
        edad: String="";
        ult_grad_est: String="";
        sexo: String="";
        userName: String ="";
        name : String = "";
        userQ1: String="";
        userQ2: String="";
        userQ3: String="";
        userQ4: String="";
        userQ5: String="";
        userQ6: String="";
        userQ7: String="";
        userQ8: String="";
        userQ9: String="";
        userQ10: String="";
        userQ11: String="";
        userQ12: String="";
        userQ13: String="";
        userQ14: String="";
        userQ15: String="";
        userQ16: String="";
        userQ17: String="";
        userQ18: String="";
        userQ19: String="";
        userQ20: String="";
        userQ21: String="";
        userQ22: String="";
        userQ23: String="";
        userQ24: String="";
        userQ25: String="";
        userQ26: String="";
        userQ27: String="";
        userQ28: String="";

  //------------------------------Función para guardar información de los textfields--------------------------//
  onReturnPress(args) {
    //El evento "returnPress" será detonado cuando el usuario introduce un valor
    let textField = <TextField>args.object; //Declara el valor del campo de texto como un objeto argumento

    // Gets or sets the placeholder text.
    console.log(textField.hint);
    // Gets or sets the input text.
    console.log(textField.text);
    this.alcaldia = textField.text;

    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure);

    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType);
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType);
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType);

    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger);
    // Gets or sets whether the instance is editable.
    console.log(textField.editable);
    // Enables or disables autocorrection.
    console.log(textField.autocorrect);
    // Limits input to a certain number of characters.
    console.log(textField.maxLength);

    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}
//---------------------------------------- Guardamos las variables en el arreglo headers3 -----------------------------------------//

  //----- Preguntas relacionadas a la información del entrevistado -------//
  guardaymuestra_idencuesta(args){
    let textField = <TextField>args.object; //Declara el valor del campo de texto como un objeto argumento
    this.idencuesta = String(textField.text) ;
    this.headers3[1] = "Id encuesta: " + this.idencuesta;

    console.log("ID encuesta: ")
    console.log(this.idencuesta);
    setTimeout(() => {
      textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
  }
  guardaymuestra_idfoto(args){
    let textField = <TextField>args.object;
    this.idfoto = String(textField.text);
    this.headers3[2] = "Id foto: " + this.idfoto;
    console.log("ID foto: ")
    console.log(this.idfoto);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_alcaldia(args){
    let textField = <TextField>args.object;
    this.alcaldia = String(textField.text);
    this.headers3[3] = "Alcaldia: " + this.alcaldia;
    console.log("Alcaldía: ")
    console.log(this.alcaldia);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

    guardaymuestra_religion(args){
    let textField = <TextField>args.object;
    this.religion = String(textField.text);
    this.headers3[4] = "Religion: " + this.religion;
    console.log("Religion: ")
    console.log(this.religion);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_localidad(args){
    let textField = <TextField>args.object;
    this.localidad = String(textField.text);
    this.headers3[5] = "Localidad: " + this.localidad;
    console.log("Localidad: ")
    console.log(this.localidad);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_tresidencia(args){
    let textField = <TextField>args.object;
    this.tresidencia = String(textField.text);
    this.headers3[6] = "Tiempo de residencia: " + this.tresidencia;
    console.log("Tiempo de residencia: ")
    console.log(this.tresidencia);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_profesion(args){
    let textField = <TextField>args.object; //Declara el valor del campo de texto como un objeto argumento
    this.profesion = String(textField.text);
    this.headers3 [7] = "Profesion: " + this.profesion;
    console.log("Profesión/oficio: ")
    console.log(this.profesion);
    setTimeout(() => {
      textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
  }

  guardaymuestra_userMail(args){
    let textField = <TextField>args.object;
    this.userMail = String(textField.text);
    this.headers3 [8] = "Mail: " + this.userMail;
    console.log("Email: ")
    console.log(this.userMail);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_edad(args){
    let textField = <TextField>args.object;
    this.edad = String(textField.text);
    this.headers3[9] = "Edad: " + this.edad;
    console.log("Edad: ")
    console.log(this.edad );
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_ult_grad_est(args){
    let textField = <TextField>args.object;
    this.ult_grad_est = textField.text;
    this.headers3[10] = "Ultimo grado de estudios: " + this.ult_grad_est;
    console.log("Ultimo grado de estudios: ")
    console.log(this.ult_grad_est);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_sexo(): void {
    let options = {
      title: "Sexo: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Maculino", "Femenino", "Otro"]
  };

  action(options).then((result) => {
      console.log(result);
      this.sexo =  result ;
      this.headers3[12] ="Sexo: "+ this.sexo;
      console.log("Sexo: ")
      console.log(this.sexo);
  });

  }


  //----- Preguntas relacionadas con el contenido de la encuesta -------//
  opcion_multiple_p1(): void{
    let options = {
      title: "Pregunta 1, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Muy importante ", "Bastante importante ", "Poco importante","Nada Importante"]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ1= result;
      this.headers3[12] = "OM1: " + this.userQ1
      console.log("Pregunta 1: ")
      console.log(this.userQ1);
  });
  }

  opcion_multiple_p2(): void{
    let options = {
      title: "Pregunta 2, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Mucho ", "Bastante ", "Poco"," Nada "]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ2= result;
      this.headers3[13] = "OM2: " + this.userQ2
      console.log("Pregunta 2: ")
      console.log(this.userQ2);

  });
  }

  opcion_multiple_p3(): void{
    let options = {
      title: "Pregunta 3, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Sismo ", "Deslave ", "Inundaciones ","Incendios ", "Otro" ]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ3= result;
      this.headers3[14] = "OM3: " + this.userQ3;
      console.log("Pregunta 3: ")
      console.log(this.userQ3);
  });
  }

  opcion_multiple_p4(): void{
    let options = {
      title: "Pregunta 4, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Muy importante ", "Bastante importante ", "Poco importante", "Nada Importante"]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ4= result;
      this.headers3[15] = "OM4: " + this.userQ4;
      console.log("Pregunta 4: ")
      console.log(this.userQ4);
  });
  }

  opcion_multiple_p5(): void{
    let options = {
      title: "Pregunta 5, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Muy importante ", "Bastante importante ", "Poco importante","Nada Importante"]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ5= result;
      this.headers3[16] = "OM5: " + this.userQ5;
      console.log("Pregunta 5: ")
      console.log(this.userQ5);
  });
  }

  opcion_multiple_p6(): void{
    let options = {
      title: "Pregunta 6, opción multiple: ",
      message: "Selecciona una opción",
      cancelButtonText: "Cancelar",
      actions: ["Dios ", "Naturaleza ", "Pobreza","Gobierno"]
  };

  action(options).then((result) => {
      console.log(result);
      this.userQ6= result;
      this.headers3[17] = "OM6: " + this.userQ6;
      console.log("Pregunta 6: ")
      console.log(this.userQ6);
  });
  }

  guardaymuestra_p7(args){
    let textField = <TextField>args.object;
    this.userQ7 = String(textField.text);
    this.headers3[18] = "Pregunta 7: " + this.userQ7;
    console.log("Pregunta 7: ")
    console.log(this.profesion);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p8(args){
    let textField = <TextField>args.object;
    this.userQ8 = String(textField.text);
    this.headers3[19] = "Pregunta 8: " + this.userQ8;
    console.log ("Pregunta 8: ")
    console.log (this.userQ8);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p9(args){
    let textField = <TextField>args.object;
    this.userQ9 = String(textField.text);
    this.headers3[20] = "Pregunta 9: " + this.userQ9;
    console.log ("Pregunta 9: ")
    console.log (this.userQ9);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p10(args){
    let textField = <TextField>args.object;
    this.userQ10 = String(textField.text);
    this.headers3[21] = "Pregunta 10: " + this.userQ10;
    console.log ("Pregunta 10: ")
    console.log (this.userQ10);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p11(args){
    let textField = <TextField>args.object;
    this.userQ11 = String(textField.text);
    this.headers3[22] = "Pregunta 11: " + this.userQ11;
    console.log ("Pregunta 11: ")
    console.log (this.userQ11);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p12(args){
    let textField = <TextField>args.object;
    this.userQ12 = String(textField.text);
    this.headers3[23] = "Pregunta 12: " + this.userQ12;
    console.log ("Pregunta 12: ")
    console.log (this.userQ12);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p13(args){
    let textField = <TextField>args.object;
    this.userQ13 = String(textField.text);
    this.headers3[24] = "Pregunta 13: " + this.userQ13;
    console.log ("Pregunta 13: ");
    console.log (this.userQ13);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p14(args){
    let textField = <TextField>args.object;
    this.userQ14 = String(textField.text);
    this.headers3[25] = "Pregunta 14: " + this.userQ14;
    console.log ("Pregunta 14: ");
    console.log (this.userQ14);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p15(args){
    let textField = <TextField>args.object;
    this.userQ15 = String(textField.text);
    this.headers3[26] = "Pregunta 15: " + this.userQ15;
    console.log ("Pregunta 15: ")
    console.log (this.userQ15);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p16 (args){
    let textField = <TextField>args.object;
    this.userQ16 = String(textField.text);
    this.headers3[27] = "Pregunta 16: " + this.userQ16;
    console.log ("Pregunta 16: ")
    console.log (this.userQ16);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p17 (args){
    let textField = <TextField>args.object;
    this.userQ17 = String(textField.text);
    this.headers3[28] = "Pregunta 17: " + this.userQ17;
    console.log ("Pregunta 17: ")
    console.log (this.userQ17);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p18 (args){
    let textField = <TextField>args.object;
    this.userQ18 = String(textField.text);
    this.headers3[29] = "Pregunta 18: " + this.userQ18;
    console.log ("Pregunta 18: ")
    console.log (this.userQ18);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }

  guardaymuestra_p19 (args){
    let textField = <TextField>args.object;
    this.userQ19 = String(textField.text);
    this.headers3[30] = "Pregunta 19: " + this.userQ19;
    console.log ("Pregunta 19: ")
    console.log (this.userQ19);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }
//------------- Opción múltiple, ultimas 8 preguntas -------------//

opcion_multiple_p20(): void{
  let options = {
    title: "Pregunta 20, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Si ", "No ", ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ20= result;
    this.headers3[31] = "Pregunta 20: " + this.userQ20;
    console.log ("Pregunta 20: ")
    console.log (this.userQ20);
});
}

opcion_multiple_p21(): void{
  let options = {
    title: "Pregunta 21, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Comunidad ", "Parroco ","Escuela","Gobierno", "No sé"]
};

action(options).then((result) => {
    console.log(result);
    this.userQ21= result;
    this.headers3[32] = "Pregunta 21: " + this.userQ21;
    console.log ("Pregunta 21: ")
    console.log (this.userQ21);
});
}

opcion_multiple_p22(): void{
  let options = {
    title: "Pregunta 22, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Comunidad ", "Parroco","Escuela","Gobierno", "No sé"]
};

action(options).then((result) => {
    console.log(result);
    this.userQ22= result;
    this.headers3[33] = "Pregunta 22: " + this.userQ22;
    console.log ("Pregunta 22: ")
    console.log (this.userQ22);
});
}

opcion_multiple_p23(): void{
  let options = {
    title: "Pregunta 23, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Si ", "No ", ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ23= result;
    this.headers3[34] = "Pregunta 23: " + this.userQ23;
    console.log ("Pregunta 23: ")
    console.log (this.userQ23);
});
}

guardaymuestra_p24 (args){
  let textField = <TextField>args.object;
  this.userQ24 = String(textField.text);
  this.headers3[35] = "Pregunta 24: " + this.userQ24;
  console.log ("Pregunta 24: ")
  console.log (this.userQ24);
  setTimeout(() => {
    textField.dismissSoftInput();
  }, 100);
}

opcion_multiple_p25(): void{
  let options = {
    title: "Pregunta 25, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Padres", "Conyuge ", "Hijos" ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ6= result;
    this.headers3[36] = "Pregunta 25: " + this.userQ25;
    console.log ("Pregunta 25: ")
    console.log (this.userQ25);
});
}

opcion_multiple_p26(): void{
  let options = {
    title: "Pregunta 26, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Si ", "No ", ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ26= result;
    this.headers3[37] = "Pregunta 26: " + this.userQ26;
    console.log ("Pregunta 26: ")
    console.log (this.userQ26);
});
}

opcion_multiple_p27(): void{
  let options = {
    title: "Pregunta 27, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Severos ", "Moderados ", "Mínimos" ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ27= result;
    this.headers3[38] = "Pregunta 27: " + this.userQ27;
    console.log ("Pregunta 27: ")
    console.log (this.userQ27);
});
}

opcion_multiple_p28(): void{
  let options = {
    title: "Pregunta 28, opción multiple: ",
    message: "Selecciona una opción",
    cancelButtonText: "Cancelar",
    actions: ["Si ", "No ", ]
};

action(options).then((result) => {
    console.log(result);
    this.userQ28= result;
    this.headers3[39] = "Pregunta 28: " + this.userQ28;
    console.log ("Pregunta 28: ")
    console.log (this.userQ28);
});
}

// Eventos para las cajas de texto
onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    let textField = <TextField>args.object;
}

onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    let textField = <TextField>args.object;
}
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
confirmacion_datos_encuesta(): void{
  let options = {
    title: "Confirmación de datos",
    message:"La información almacenada es la siguiente:" + "\n" +
    this.headers3 ,
    okButtonText: "Entendido"
};
  alert(options)
}



    guardador(): void {
      //----------Guardamos los datos por columnas-----------//
      this.userQ28_arr.push( this.userQ28 + "");
      this.userQ27_arr.push( this.userQ27 + "");
      this.userQ26_arr.push( this.userQ26 + "");
      this.userQ25_arr.push( this.userQ25 + "");
      this.userQ24_arr.push( this.userQ24 + "");
      this.userQ23_arr.push( this.userQ23 + "");
      this.userQ22_arr.push( this.userQ22 + "");
      this.userQ21_arr.push( this.userQ21 + "");
      this.userQ20_arr.push( this.userQ20 + "");
      this.userQ20_arr.push( this.userQ20 + "");
      this.userQ19_arr.push( this.userQ19 + "");
      this.userQ18_arr.push( this.userQ18 + "");
      this.userQ17_arr.push( this.userQ17 + "");
      this.userQ16_arr.push( this.userQ16 + "");
      this.userQ15_arr.push( this.userQ15 + "");
      this.userQ14_arr.push( this.userQ14 + "");
      this.userQ13_arr.push( this.userQ13 + "");
      this.userQ12_arr.push( this.userQ12 + "");
      this.userQ11_arr.push( this.userQ11 + "");
      this.userQ10_arr.push( this.userQ10 + "");
      this.userQ9_arr.push( this.userQ9 + "");
      this.userQ8_arr.push( this.userQ8 + "");
      this.userQ7_arr.push( this.userQ7 + "");
      this.userQ6_arr.push( this.userQ6 + "");
      this.userQ5_arr.push( this.userQ5 + "");
      this.userQ4_arr.push( this.userQ4 + "");
      this.userQ3_arr.push( this.userQ3 + "");
      this.userQ2_arr.push( this.userQ2 + "");
      this.userQ1_arr.push( this.userQ1 + "");
      this.sexo_arr.push( this.sexo + "");
      this.ult_grad_est_arr.push( this.ult_grad_est + "");
      this.edad_arr.push( this.edad + "");
      this.userMail_arr.push( this.userMail + "");
      this.profesion_arr.push( this.profesion + "");
      this.tresidencia_arr.push( this.tresidencia + "");
      this.localidad_arr.push( this.localidad + "");
      this.alcaldia_arr.push( this.alcaldia + "");
      this.religion_arr.push( this.religion + "");
      this.idfoto_arr.push( this.idfoto + "");
      this.idencuesta_arr.push( this.idencuesta + "" ); // Este es el primero en agregarse, y el ultimo de la cola visto de arriba a abajo


    //------------Convertimos a cadena de caracteres los datos-----------//
      let datos: string[] =
      [
        JSON.stringify(this.idencuesta_arr),
        JSON.stringify(this.idfoto_arr),
        JSON.stringify(this.religion_arr),
        JSON.stringify(this.alcaldia_arr),
        JSON.stringify(this.tresidencia_arr),
        JSON.stringify(this.profesion_arr),
        JSON.stringify(this.userMail_arr),
        JSON.stringify(this.edad_arr),
        JSON.stringify(this.ult_grad_est_arr),
        JSON.stringify(this.sexo_arr),
        JSON.stringify(this.userQ1_arr),
        JSON.stringify(this.userQ2_arr),
        JSON.stringify(this.userQ3_arr),
        JSON.stringify(this.userQ4_arr),
        JSON.stringify(this.userQ5_arr),
        JSON.stringify(this.userQ6_arr),
        JSON.stringify(this.userQ7_arr),
        JSON.stringify(this.userQ8_arr),
        JSON.stringify(this.userQ9_arr),
        JSON.stringify(this.userQ10_arr),
        JSON.stringify(this.userQ11_arr),
        JSON.stringify(this.userQ12_arr),
        JSON.stringify(this.userQ13_arr),
        JSON.stringify(this.userQ14_arr),
        JSON.stringify(this.userQ15_arr),
        JSON.stringify(this.userQ16_arr),
        JSON.stringify(this.userQ17_arr),
        JSON.stringify(this.userQ18_arr),
        JSON.stringify(this.userQ19_arr),
        JSON.stringify(this.userQ20_arr),
        JSON.stringify(this.userQ21_arr),
        JSON.stringify(this.userQ22_arr),
        JSON.stringify(this.userQ23_arr),
        JSON.stringify(this.userQ24_arr),
        JSON.stringify(this.userQ25_arr),
        JSON.stringify(this.userQ26_arr),
        JSON.stringify(this.userQ27_arr),
        JSON.stringify(this.userQ28_arr)
      ]
/*
      const folderPath: string = knownFolders.documents().path;
      console.log("path:" + folderPath);
      const fileName: string = JSON.stringify(this.idencuesta)
      console.log("nombre: "+ fileName);
      const filePath = path.join(folderPath, fileName);
      console.log("filePath: " + filePath);
*/



      //---------Creamos los archivos ------------//
      var file = storage.create( "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+this.idfoto, "Inicializador2.txt" , "Inicializador, ignorar");
      var file = storage.create("/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+this.idfoto, "Datos_encuesta"+ this.idencuesta + ".txt" ,JSON.stringify(datos));
      var file = storage.create("/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+this.idfoto, "Datos_encuesta"+ this.idencuesta + ".dat" ,JSON.stringify(datos));


      console.log("Archivo creados");
        if (file){
        let options = {
          title: "Encuesta finalizada",
          message:"Archivo generados exitosamente." + "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+this.idfoto ,
          okButtonText: "Entendido"
      };
      alert(options);
        }
    }


}
