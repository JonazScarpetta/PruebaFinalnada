// inicio De codigo firebase

const firebaseConfig = {
  apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
  authDomain: "bd-appconnet.firebaseapp.com",
  projectId: "bd-appconnet",
  storageBucket: "bd-appconnet.appspot.com",
  messagingSenderId: "749439432233",
  appId: "1:749439432233:web:861541de33ed615b9fce38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const baseDatos = firebase.firestore();

// fin de codigo firebase

const contenedor = document.getElementById("pruebaCards");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((qSAlturas) => {
    baseDatos
      .collection("permisoATS")
      .get()
      .then((qSATS) => {
        qSAlturas.forEach((docAlturas) => {
          const datosAlturas =
            docAlturas.data().impresionFormularioTrabajoAltura;
          qSATS.forEach((docATS) => {
            const datosATS = docATS.data().impresionFormularioAts;
            console.log(datosAlturas.nombreObra, datosATS.nombreObra); // -------------
            if (datosAlturas.nombreObra == datosATS.nombreObra) {
              contenedor.innerHTML += `
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                      <h5 class="card-title" id="nombrePrueba">${datosAlturas.nombreObra}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Fecha de inicio: <span>${datosAlturas.fechaInicioActividad}</span></li>
                      <li class="list-group-item">Fecha de culminacion: <span>${datosAlturas.fechaCulminacionActividad}</span></li>
                      <li class="list-group-item">Direccion: <span>${datosAlturas.direccionTrabajoAltura}</span></li>
                    </ul>
                    <div class="card-body">
                      <a href="../html/visualizacionFormularioATS.html" class="card-link" id="" >ATS</a>
                      <a href="../html/visualizacionFormularioAlturas.html" class="card-link" id="" >Alturas</a>
                    </div>
                </div>
              </div>
            `;
            } else {
              console.log("No obra");
            }
          });
        });
      });
  });
