import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application,ImageAsset,Image  } from '@nativescript/core';
import * as geolocation from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';
CoreTypes.Accuracy // used to describe at what accuracy the location should be get
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
var storage = require("nativescript-android-fs");
import * as camera from "@nativescript/camera";
import * as imagepicker from "@nativescript/imagepicker";
var fetchModule = require("tns-core-modules/fetch");
import { ImageSource, knownFolders, path } from '@nativescript/core';

//---------------------- Declaración e inicialización de las variables que usaremos para almacenar coordenadas ----------------------//
let CoorXi: string = "Sin asignar información";
let CoorYi: string= "Sin asignar información";
let CoorZi: string= "Sin asignar información";
let CoorX: string= "Sin asignar información";
let CoorY: string= "Sin asignar información";
let CoorZ: string= "Sin asignar información";
let idfoto: string= "Sin asignar información";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


//---------------------------------------------- Declaramos los arreglos almacenadores ---------------------------------------------//
  idfoto_arr: string[]= ["Nombre_de_la_foto:"];
  x_arr: string[] = ["Coorx:"];
  y_arr: string[] = ["Coory:"];
  z_arr: string[] = ["Coorz:"];

  idfoto_textfield: String ="";
  idfoto = this.idfoto_textfield;
  coorxyz: string[]= new Array(200) ;
  encabezados: string[]= new Array(200) ;

  constructor() {
    // Use the component constructor to inject providers.
  };

  ngOnInit(): void {
    // Init your component properties here.
  };
//--------------------------------------- Función almacenadora de la variable ID encuesta  ----------------------------------------//

  guardaymuestra_idfoto(args){
    let textField = <TextField>args.object;
    idfoto = String(textField.text);
    console.log("ID foto: ")
    console.log(idfoto);
    setTimeout(() => {
      textField.dismissSoftInput();
    }, 100);
  }
  onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    let textField = <TextField>args.object;
}

  onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    let textField = <TextField>args.object;
}

//------------------------------------------------- Función permisos de localización -------------------------------------------------//
geopermisos(): void {
  geolocation.enableLocationRequest().then(
  function success() {

  geolocation.getCurrentLocation({
    desiredAccuracy: CoreTypes.Accuracy.high,
    maximumAge: 5000,
    timeout: 20000

  }).then((location)=>{
      JSON.stringify(location),//Solo tengo que ver como ingresar estas
      // en la base de datos
      CoorXi =JSON.stringify(location.latitude);
      CoorYi =JSON.stringify(location.longitude);
      CoorZi =JSON.stringify(location.altitude);
      console.log("Coordenadas punto inicial");
      console.log("latitud: " + " " + CoorXi )
      console.log("longitud: " + " " + CoorYi)
      console.log("altitud: " + " " + CoorZi);
      let aviso={
        title: "Coordenadas punto inicial",
        message: "Coordenadas punto inicial: "+ "\n" +
        "latitud: " + CoorXi + "\n" + "longitud: "  + CoorYi + "\n" +  "altitud: "  + CoorZi,
        okButtonText: "Entendido"
    };
    alert (aviso);
  })
    }
  ).catch((err)=> {
    console.log("Error -> " + err.message);
    })
  function failure() {
    console.log("Permiso de localización rechazado por el usuario");
  };
};

/*
//------------ Funciones para mandar los datos a google sheets ---------------//
 pageLoaded(args) {
  var model = {
    ID_Foto:"Ola",
    coorx: "Ola",
    coory: "Ola",
    coorz: "Ola"
};

  var page = args.object;
  page.bindingContext = model;
}

getCommonHeaders() {
  return {
      "Content-Type": "application/json"
  }
}

onSubmit(args) {

  var model = {
    ID_Foto:"Ola",
    coorx: "Ola",
    coory: "Ola",
    coorz: "Ola"
};

  var baseURL = "https://script.google.com/macros/s/AKfycbxJTJXbRF71BirHBvW8ZIYDzoy2IY0Ggen4hwCwuk8UBjwVgFChLhQMI69GALxoO36w/exec";

  var theURL = baseURL+ "?ID_Foto=" + model.coorx  + "?Name=" + model.coorx + "&Email=" + model.coory + "&Question=" + model.coorz;

  fetch(theURL, {
      headers: this.getCommonHeaders()
  })

  //console.log('url', theURL);
  //console.log(model.userName);
  //console.log(model.userEmail);
  //console.log(model.userQuestion);

  const button = args.object;
  const page = button.page;
  //page.frame.navigate("pages/thank-you/thank-you");

  let options = {
    title: "Información enviada",
    message:"ID Foto: " + idfoto + " \n" + "Coordenadas: " + " \n" + "[ " +"latitud: "
    + CoorX + ", " + "longitud: " + CoorY + ", " + "altitud: " + CoorZ + " ]" ,
    okButtonText: "Entendido"
};
  alert(options)
}
*/

//----------------------------------------------------- Función para tomar foto -----------------------------------------------------//
tomarfoto():void {

  //Primero, crea la carpeta, haciendo lo inicialización
  var file = storage.create( "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto, "Inicializador_archvo_foto.txt" ,
  "Inicializador, ignorar");

  //Solicitamos los poderosísimos permisos de la camara
  camera.requestPermissions().then(
    function success() { /*si los aceptan creamos la función options que nos permite modificar los parámetros de
      la foto*/
      const options = {width: 300,height: 300, keepAspectRatio: false, saveToGallery: true};
      camera.takePicture(options).//La foto se va a tomar según las opciones que establecimos anteriormente
        then((imageAsset) => { //Imageasset es el "recurso de imagen"

          var image = new Image();
          image.src = imageAsset;
          
          console.log("La foto ha sido guardada en un Imageasset");
          console.log("Esto significa que la fuente se ha convertido en el imageasset");

          console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);

          console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);

          console.log("La foto ha sido guardada en un Imageasset");
          console.log("Esto significa que la fuente se ha convertido en el imageasset");


          const folderPath: string = knownFolders.documents().path;
          console.log("path:" + folderPath);
          const fileName = JSON.stringify(idfoto);
          console.log("nombre: "+fileName);
          const filePath = path.join(folderPath, fileName);
          console.log("filePath: " + filePath);
          ImageSource.fromAsset(imageAsset).then((imageSource: ImageSource)=>{
          const saved:boolean=imageSource.saveToFile(filePath, "jpg");
          if (saved) {
            console.log("Saved creado, valor: " +  saved)
          }
        }
          );

          //Aunque la pide anteriormente, prefiero que la función vuelva solicitarla encaso de bugs
          geolocation.enableLocationRequest()
          geolocation.getCurrentLocation({
            desiredAccuracy: CoreTypes.Accuracy.high,
            maximumAge: 5000,
            timeout: 20000

          }).then((location)=>{
              JSON.stringify(location),//Solo tengo que ver como ingresar estas
              // en la base de datos
              CoorX =JSON.stringify(location.latitude);
              CoorY =JSON.stringify(location.longitude);
              CoorZ =JSON.stringify(location.altitude);
              console.log("Coordenadas punto actual");
              console.log("latitud: " + " " + CoorX );
              console.log("longitud: " + " " + CoorY);
              console.log("altitud: " + " " + CoorZ);

              let data = [
                "Coordenadas punto actual",
                "latitud: " + CoorX,
                "longitud: "  + CoorY,
                "altitud: " + CoorZ
              ]
          });
          if (this.saved) {
            var file1 = storage.create( "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto, "Coordenadas_"+ idfoto+ ".txt" ,
            JSON.stringify(this.data));
            console.log("Coordenadas guardadas")

            let options = {
              title: "Georeferenciación exitosa",
              message: "ID Foto: " + idfoto + " \n" + "Coordenadas: " + " \n" + "[ " +"latitud: "
              + CoorX + ", " + "longitud: " + CoorY + ", " + "altitud: " + CoorZ + " ]"  +"\n" + "Dirección: " +
              "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto,
              okButtonText: "Entendido"
          };
          alert(options);

        }

      }).catch((err)=> {
          console.log("Error -> " + err.message);
      });
    },
    function failure() {
      console.log("Permiso de camara no aceptado por el usuario");
    }
  );
};

//-------------------------------------------- Función información de la ultima posición ---------------------------------------------//
confirmar(): void{
  let options = {
    title: "Información de tu ultima posición:",
    message:"ID Foto: " + idfoto + " \n" + "Coordenadas: " + " \n" + "[ " +"latitud: "
    + CoorX + ", " + "longitud: " + CoorY + ", " + "altitud: " + CoorZ + " ]"  + "\n" + "Ultima dirección: " +
    "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto,
    okButtonText: "Entendido"
};
  alert(options)
};

//--------------------------------------------- Función descarga la información acumulada ---------------------------------------------//
  descarga(): void{
    this.idfoto_arr.push(JSON.stringify(idfoto ));
    this.x_arr.push(JSON.stringify(CoorX ));
    this.y_arr.push(JSON.stringify(CoorY ));
    this.z_arr.push(JSON.stringify(CoorZ ));

    let datos=[
      JSON.stringify(this.idfoto_arr),
      JSON.stringify(this.x_arr),
      JSON.stringify(this.y_arr),
      JSON.stringify(this.x_arr)];

    let datos_descargables=JSON.stringify(datos);
    console.log(datos_descargables);

    const folderPath: string = knownFolders.documents().path;
    console.log("path:" + folderPath);

    const fileName: string = JSON.stringify(idfoto)
    console.log("nombre: "+ fileName);

    const filePath = path.join(folderPath, fileName);
    console.log("filePath: " + filePath);

    var file2 = storage.create( "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto, "Coordenadas_acumuladas_hasta" +idfoto + ".txt" , datos_descargables);
    var file3 = storage.create( "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto, "Coordenadas_acumuladas_hasta" +idfoto + ".dat" , datos_descargables);

    console.log("Archivo creado, " + "Nombre:" + idfoto);

    let options = {
      title: "Descarga",
      message:" Información descargada exitosamente "  + "\n" + "Nombre de los archivos: "
      + "\n"  + idfoto + ".dat"+ "\n"  + idfoto + ".txt" + "\n" + "Dirección:" + "/Android/data/org.nativescript.georef2/files/DCIM/Camera/"+ idfoto,
      okButtonText: "Entendido"
  };
    alert(options)
    };
//---------------------------------------------------- Función side-drawer ----------------------------------------------------------//
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  };

}
