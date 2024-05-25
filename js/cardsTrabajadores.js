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

const contenedor = document.getElementById("pruebaCards1");

baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const visualizacionFormularioTrabajador =
        doc.data().impresionTrabajadorDatos;
      const docId = doc.id;
      contenedor.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title" id="nombrePrueba1">${visualizacionFormularioTrabajador.nombrePT} ${visualizacionFormularioTrabajador.apellidoPT}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Tipo Documento: <span>${visualizacionFormularioTrabajador.seleccionDocumentoTrabajador}</span></li>
              <li class="list-group-item">Cédula: <span>${visualizacionFormularioTrabajador.numeroDocumentoTrabajadorPT}</span></li>
              <li class="list-group-item">Cargo: <span>${visualizacionFormularioTrabajador.cargoPT}</span></li>
            </ul>
            <div class="card-body">
              <a href="../html/visualizacionTrabajadorAutorizado.html?id=${docId}" class="card-link">Ver más..</a>
              <a href="../html/visualizacionFormularioAlturas.html" class="card-link">Borrar</a>
            </div>
          </div>
        </div>
      `;
    });
  });
