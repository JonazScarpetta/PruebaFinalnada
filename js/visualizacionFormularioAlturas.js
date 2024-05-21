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

// Inicio datos formulario

let visualizacionFormularioAlturas = {
  ciudadTA: ".......",
  fechaInicioTA: ".......",
  fechaCulminacionTA: ".......",
  fechaCulminacionActividad: "......",
  direccionTrabajoAltura: "......",
  horaInicioActividad: "......",
  horaCulminacionActividad: "......",
  actividadRutinaria: "......",
  descripcionTarea: "......",
  cascoBurbuquejoAt: "......",
  gafasSeguridadAt: "......",
  protectorRespiratorioAt: "......",
  protectoresAuditivosAt: "......",
  guantesNitriloAt: "......",
  guantesVaquetaAt: "......",
  guantesDielectricosAt: "......",
  botaSeguridadAt: "......",
  trajeOverolAt: "......",
  arnes4ArgollasAt: "......",
  arnes5ArgollasAt: "......",
  trabajoAlturasAt: "......",
  espaciosConfinadosAt: "......",
  energiasPeligrosasAt: "......",
  presenciaVirusAt: "......",
  presenciaAnimalesAt: "......",
  iluminacionDeficienteAt: "......",
  exposicionRuidoAt: "......",
  altasTemperaturasAt: "......",
  bajasTemperaturasAt: "......",
  caidaObjetosAt: "......",
  caidaMismoNivelAt: "......",
  caidaDiferenteNivelAt: "......",
  colapsoEstructuralAt: "......",
  malOrdenAseoAt: "......",
  superficieIrregularAt: "......",
  cercaniaRedesElectricasAt: "......",
  arcoElectricoAt: "......",
  contactoPartesMovimientoAt: "......",
  manipulacionHerramientasManualesAt: "......",
  proyeccionParticulasAt: "......",
  contactoSustanciasQuimicasAt: "......",
  PresenciaGasesVaporesAt: "......",
  exposicionPolvoAt: "......",
  manipulacionManualCargasAt: "......",
  posturasInadecuadasAt: "......",
  movimientosRepetitivosAt: "......",
  exposicionLluviaAt: "......",
  exposicionVientosFuertesAt: "......",
  exposicionDerrumbesDesliamientosAt: "......",
  presenciaFuegoAt: "......",
  derramesFugasAt: "......",
  riesgoExplosionAt: "......",
  lineaVidaVerticalFijaAt: "......",
  lineaVidaVerticalPortatilAt: "......",
  lineaVidaHoriontalHorizontalAt: "......",
  lineaVidaHoriontalFijaAt: "......",
  anclajePortatilAt: "......",
  cintaAnclajeAt: "......",
  conectorTransitoVerticalAt: "......",
  eslingaRestriccionAt: "......",
  eslingaPosicionamientoAt: "......",
  eslingaDetencionCaidasAt: "......",
  eslingaDetencionCaidasSencillaAt: "......",
  eslingaDetencionCaidasDobleAt: "......",
  delimitacionAreaAt: "......",
  barandasAt: "......",
  señaliacionAt: "......",
  lineaAdvertenciaAt: "......",
  controlAccesoAt: "......",
  archivoFirmaDigitalSst: "......",
  registroFotograficoTrabajoAlturas: "......",
  seleccionTrabajadorAlturas: "......",
  seleccionAutorizadorAlturas: "......",
};

// Ciudad

// const contenedorCiudadTA = document.getElementById("ciudadTA");
// contenedorCiudadTA.textContent = visualizacionFormularioAlturas.ciudadTA;

const contenedorCiudadTA = document.getElementById("ciudadTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        visualizacionFormularioAlturas =
          doc.data().impresionFormularioTrabajoAltura;
        contenedorCiudadTA.textContent =
          visualizacionFormularioAlturas.ciudadTrabajoAltura;
      }
    });
  });

// Direccion

const contenedorDireccionTA = document.getElementById("direccionTrabajoAltura");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDireccionTA.textContent = usuarioTA.direccionTrabajoAltura;
      }
    });
  });

//fecha Inicio Actividad

//const contenedorFechaInicioTA = document.getElementById("fechaInicioTA");
const contenedorFechaInicioTA = document.getElementById("fechaInicioTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorFechaInicioTA.textContent = usuarioTA.fechaInicioActividad;
      }
    });
  });

// Fecha Culminacion Actividad

const contenedorCulminacionTA = document.getElementById("fechaCulminacionTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCulminacionTA.textContent =
          usuarioTA.fechaCulminacionActividad;
      }
    });
  });

// Hora Inicio Actividad

const contenedorHoraInicioTA = document.getElementById("horaInicioActividad");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorHoraInicioTA.textContent = usuarioTA.horaInicioActividad;
      }
    });
  });
// Hora Culminacion Actividad

const contenedorCulminacionInicioTA = document.getElementById(
  "horaCulminacionActividad"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCulminacionInicioTA.textContent =
          usuarioTA.horaCulminacionActividad;
      }
    });
  });

//Altura de la actividad

const contenedorAlturaActividadTA = document.getElementById("alturaActividad");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorAlturaActividadTA.textContent = usuarioTA.alturaActividad;
      }
    });
  });

// Actividad Rutinaria

const contenedorActividadRutinariaTA =
  document.getElementById("actividadRutinaria");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorActividadRutinariaTA.textContent =
          usuarioTA.actividadRutinaria;
      }
    });
  });

// Descripcion y procedimiento de la tarea

const contenedorDescripcionTareaTA =
  document.getElementById("descripcionTarea");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDescripcionTareaTA.textContent = usuarioTA.descripcionTarea;
      }
    });
  });

// Casco Burbuquejo

const contenedorCascoBurbuquejoTA =
  document.getElementById("cascoBurbuquejoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCascoBurbuquejoTA.textContent = usuarioTA.cascoBurbuquejoAt;
      }
    });
  });

// Gafas de seguridad

const contenedorGafasSeguridadTA = document.getElementById("gafasSeguridadAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorGafasSeguridadTA.textContent = usuarioTA.gafasSeguridadAt;
      }
    });
  });

// Protector respiratorio

const contenedorProtectorRespiratorioTA = document.getElementById(
  "protectorRespiratorioAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorProtectorRespiratorioTA.textContent =
          usuarioTA.protectorRespiratorioAt;
      }
    });
  });

// Protectores Auditivos

const contenedorProtectorAuditivoTA = document.getElementById(
  "protectoresAuditivosAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorProtectorAuditivoTA.textContent =
          usuarioTA.protectoresAuditivosAt;
      }
    });
  });

// Guantes de nitrilo de precisión

const contenedorGuantesNitriloProteccionTA =
  document.getElementById("guantesNitriloAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorGuantesNitriloProteccionTA.textContent =
          usuarioTA.guantesNitriloAt;
      }
    });
  });

// Guantes de vaqueta

const contenedorGuantesVaquetaTA = document.getElementById("guantesVaquetaAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorGuantesVaquetaTA.textContent = usuarioTA.guantesVaquetaAt;
      }
    });
  });

// Guantes de dieléctricos

const contenedorGuantesDielectricosTA = document.getElementById(
  "guantesDielectricosAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorGuantesDielectricosTA.textContent =
          usuarioTA.guantesDielectricosAt;
      }
    });
  });

// Botas de seguridad caña baja

const contenedorBotaSeguridadTA = document.getElementById("botaSeguridadAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorBotaSeguridadTA.textContent = usuarioTA.botaSeguridadAt;
      }
    });
  });

// Traje u overol

const contenedorTrajeOverolTA = document.getElementById("trajeOverolAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorTrajeOverolTA.textContent = usuarioTA.trajeOverolAt;
      }
    });
  });

// Arnés de 4 argollas

const contenedorArnes4ArgollasTA = document.getElementById("arnes4ArgollasAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorArnes4ArgollasTA.textContent = usuarioTA.arnes4ArgollasAt;
      }
    });
  });

// Arnés de 5 argollas

const contenedorArnes5ArgollasTA = document.getElementById("arnes5ArgollasAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorArnes5ArgollasTA.textContent = usuarioTA.arnes5ArgollasAt;
      }
    });
  });

// Trabajos en alturas

const contenedorTrabajoAlturasTA = document.getElementById("trabajoAlturasAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorTrabajoAlturasTA.textContent = usuarioTA.trabajoAlturasAt;
      }
    });
  });

// Trabajos en espacios confinados

const contenedorEspacioConfinadoTA = document.getElementById(
  "espaciosConfinadosAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEspacioConfinadoTA.textContent =
          usuarioTA.espaciosConfinadosAt;
      }
    });
  });

// Trabajos con energías peligrosas

const contenedorEnergiasPeligrosasTA = document.getElementById(
  "energiasPeligrosasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEnergiasPeligrosasTA.textContent =
          usuarioTA.energiasPeligrosasAt;
      }
    });
  });

// Presencia de virus, bacterias u hongos

const contenedorPresenciaVirusTA = document.getElementById("presenciaVirusAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPresenciaVirusTA.textContent = usuarioTA.presenciaVirusAt;
      }
    });
  });

// Presencia de animales, insectos u otros vectores

const contenedorPresenciaAnimalesTA = document.getElementById(
  "presenciaAnimalesAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPresenciaAnimalesTA.textContent =
          usuarioTA.presenciaAnimalesAt;
      }
    });
  });

// Iluminación deficiente

const contenedorIluminacionDeficienteTA = document.getElementById(
  "iluminacionDeficienteAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorIluminacionDeficienteTA.textContent =
          usuarioTA.iluminacionDeficienteAt;
      }
    });
  });

// Exposición a ruido

const contenedorExposicionRuidoTA =
  document.getElementById("exposicionRuidoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorExposicionRuidoTA.textContent = usuarioTA.exposicionRuidoAt;
      }
    });
  });

// Exposición a altas temperaturas

const contenedorAltasTempraturasTA = document.getElementById(
  "altasTemperaturasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorAltasTempraturasTA.textContent =
          usuarioTA.altasTemperaturasAt;
      }
    });
  });

// Exposición a bajas temperaturas

const contenedorBajasTempraturasTA = document.getElementById(
  "bajasTemperaturasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorBajasTempraturasTA.textContent =
          usuarioTA.bajasTemperaturasAt;
      }
    });
  });

// Caída de objetos

const contenedorCaidaObjetosTA = document.getElementById("caidaObjetosAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCaidaObjetosTA.textContent = usuarioTA.caidaObjetosAt;
      }
    });
  });

// Caídas al mismo nivel

const contenedorCaidaMismoNivelTA =
  document.getElementById("caidaMismoNivelAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCaidaMismoNivelTA.textContent = usuarioTA.caidaMismoNivelAt;
      }
    });
  });

// Caídas de diferente nivel (menor a 2 metros)

const contenedorCaidaDiferenteNivelTA = document.getElementById(
  "caidaDiferenteNivelAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCaidaDiferenteNivelTA.textContent =
          usuarioTA.caidaDiferenteNivelAt;
      }
    });
  });

// Colapsos estructurales

const contenedorColapsoEstructuralTA = document.getElementById(
  "colapsoEstructuralAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorColapsoEstructuralTA.textContent =
          usuarioTA.colapsoEstructuralAt;
      }
    });
  });

// Malas condición de orden y aseo

const contenedorMalOrdenTA = document.getElementById("malOrdenAseoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorMalOrdenTA.textContent = usuarioTA.malOrdenAseoAt;
      }
    });
  });

// Superficies irregulares o con desnivel

const contenedorSuperficieIrregularTA = document.getElementById(
  "superficieIrregularAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorSuperficieIrregularTA.textContent =
          usuarioTA.superficieIrregularAt;
      }
    });
  });

// Cercanía a redes eléctricas con posible arco eléctrico

const contenedorCercaniasRedesElectricasTA = document.getElementById(
  "cercaniaRedesElectricasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCercaniasRedesElectricasTA.textContent =
          usuarioTA.cercaniaRedesElectricasAt;
      }
    });
  });

// Posible arco eléctrico

const contenedorArcoElectricoTA = document.getElementById("arcoElectricoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorArcoElectricoTA.textContent = usuarioTA.arcoElectricoAt;
      }
    });
  });

// Contacto con partes en movimiento

const contenedorContactoPartesMovimientoTA = document.getElementById(
  "contactoPartesMovimientoAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorContactoPartesMovimientoTA.textContent =
          usuarioTA.contactoPartesMovimientoAt;
      }
    });
  });

// Manipulación de herramientas manuales

const contenedorManipulacionHerramientasManualesTA = document.getElementById(
  "manipulacionHerramientasManualesAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorManipulacionHerramientasManualesTA.textContent =
          usuarioTA.manipulacionHerramientasManualesAt;
      }
    });
  });

// Proyección de partículas (solidos o líquidos)

const contenedorProyeccionParticulasTA = document.getElementById(
  "proyeccionParticulasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorProyeccionParticulasTA.textContent =
          usuarioTA.proyeccionParticulasAt;
      }
    });
  });

// Contacto con sustancias químicas

const contenedorContactoSustanciasQuimicasTA = document.getElementById(
  "contactoSustanciasQuimicasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorContactoSustanciasQuimicasTA.textContent =
          usuarioTA.contactoSustanciasQuimicasAt;
      }
    });
  });

// Presencia de gases y vapores

const contenedorPresenciaGasesVaporesTA = document.getElementById(
  "PresenciaGasesVaporesAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPresenciaGasesVaporesTA.textContent =
          usuarioTA.PresenciaGasesVaporesAt;
      }
    });
  });

// Exposición a polvo y material particulado

const contenedorExposicionPolvosTA =
  document.getElementById("exposicionPolvoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorExposicionPolvosTA.textContent = usuarioTA.exposicionPolvoAt;
      }
    });
  });

// Manipulación manual de cargas

const contenedorManipulacionManualCargasTA = document.getElementById(
  "manipulacionManualCargasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorManipulacionManualCargasTA.textContent =
          usuarioTA.manipulacionManualCargasAt;
      }
    });
  });

// Posturas inadecuadas o forzadas para realizar la tarea

const contenedorPosturasInadecuadasTA = document.getElementById(
  "posturasInadecuadasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPosturasInadecuadasTA.textContent =
          usuarioTA.posturasInadecuadasAt;
      }
    });
  });

// Movimientos repetitivos

const contenedorMovimientosRepetitivosTA = document.getElementById(
  "movimientosRepetitivosAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorMovimientosRepetitivosTA.textContent =
          usuarioTA.movimientosRepetitivosAt;
      }
    });
  });

// Exposición a lluvia

const contenedorExposicionLluviaTA =
  document.getElementById("exposicionLluviaAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorExposicionLluviaTA.textContent = usuarioTA.exposicionLluviaAt;
      }
    });
  });

// Exposición a vientos fuertes

const contenedorExposicionVientosFuertesTA = document.getElementById(
  "exposicionVientosFuertesAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorExposicionVientosFuertesTA.textContent =
          usuarioTA.exposicionVientosFuertesAt;
      }
    });
  });

// Exposición a derrumbes o deslizamientos de tierra o masa

const contenedorExposicionDerrumbesDeslizamientosTA = document.getElementById(
  "exposicionDerrumbesDesliamientosAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorExposicionDerrumbesDeslizamientosTA.textContent =
          usuarioTA.exposicionDerrumbesDesliamientosAt;
      }
    });
  });

// Presencia de fuentes de ignición de fuego

const contenedorPresenciaFuegoTA = document.getElementById("presenciaFuegoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPresenciaFuegoTA.textContent = usuarioTA.presenciaFuegoAt;
      }
    });
  });

// Derrames, fugas

const contenedorDerramesFugasTA = document.getElementById("derramesFugasAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDerramesFugasTA.textContent = usuarioTA.derramesFugasAt;
      }
    });
  });

// Riesgo de explosión

const contenedorRiesgoExplosionTA =
  document.getElementById("riesgoExplosionAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorRiesgoExplosionTA.textContent = usuarioTA.riesgoExplosionAt;
      }
    });
  });

// Línea de vida vertical fija

const contenedorLineaVerticalFijaTA = document.getElementById(
  "lineaVidaVerticalFijaAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorLineaVerticalFijaTA.textContent =
          usuarioTA.lineaVidaVerticalFijaAt;
      }
    });
  });

// Línea de vida vertical portátil

const contenedorLineaVerticalPortatilTA = document.getElementById(
  "lineaVidaVerticalPortatilAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorLineaVerticalPortatilTA.textContent =
          usuarioTA.lineaVidaVerticalPortatilAt;
      }
    });
  });

// Línea de vida horizontal portátil

const contenedorLineaVidaHorizontalTA = document.getElementById(
  "lineaVidaHoriontalHorizontalAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorLineaVidaHorizontalTA.textContent =
          usuarioTA.lineaVidaHoriontalHorizontalAt;
      }
    });
  });

// Línea de vida horizontal fija

const contenedorLineaVidaHorizontalFijaTA = document.getElementById(
  "lineaVidaHoriontalFijaAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorLineaVidaHorizontalFijaTA.textContent =
          usuarioTA.lineaVidaHoriontalFijaAt;
      }
    });
  });

// Anclaje portátiles (Tie Off)

const contenedorAnclajePortatilTA =
  document.getElementById("anclajePortatilAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorAnclajePortatilTA.textContent = usuarioTA.anclajePortatilAt;
      }
    });
  });

// Cintas de anclaje

const contenedorCintaAnclajeTA = document.getElementById("cintaAnclajeAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCintaAnclajeTA.textContent = usuarioTA.cintaAnclajeAt;
      }
    });
  });

// Conectores de transito vertical

const contenedorContenedorTransitoVerticalTA = document.getElementById(
  "conectorTransitoVerticalAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorContenedorTransitoVerticalTA.textContent =
          usuarioTA.conectorTransitoVerticalAt;
      }
    });
  });

// Eslinga de restricción

const contenedorEslingaRestriccionTA = document.getElementById(
  "eslingaRestriccionAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEslingaRestriccionTA.textContent =
          usuarioTA.eslingaRestriccionAt;
      }
    });
  });

// Eslinga de posicionamiento

const contenedorEslingaPosicionamientoTA = document.getElementById(
  "eslingaPosicionamientoAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEslingaPosicionamientoTA.textContent =
          usuarioTA.eslingaPosicionamientoAt;
      }
    });
  });

// Eslinga de detención de caídas

const contenedorEslingaDetencionCaidasTA = document.getElementById(
  "eslingaDetencionCaidasAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEslingaDetencionCaidasTA.textContent =
          usuarioTA.eslingaDetencionCaidasAt;
      }
    });
  });

// Eslinga de detención de caídas sencilla

const contenedorEslingaDetencionCaidasSencillaTA = document.getElementById(
  "eslingaDetencionCaidasSencillaAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEslingaDetencionCaidasSencillaTA.textContent =
          usuarioTA.eslingaDetencionCaidasSencillaAt;
      }
    });
  });

// Eslinga de detención de caídas con doble terminal (Y)

const contenedorEslingaDetencionCaidasDobleTA = document.getElementById(
  "eslingaDetencionCaidasDobleAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorEslingaDetencionCaidasDobleTA.textContent =
          usuarioTA.eslingaDetencionCaidasDobleAt;
      }
    });
  });

// Delimitación del área

const contenedorDelimitacionAreaTA =
  document.getElementById("delimitacionAreaAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDelimitacionAreaTA.textContent = usuarioTA.delimitacionAreaAt;
      }
    });
  });

// Barandas

const contenedorBandasTA = document.getElementById("barandasAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorBandasTA.textContent = usuarioTA.barandasAt;
      }
    });
  });

// Señalización

const contenedorSeñalizacionTA = document.getElementById("señaliacionAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorSeñalizacionTA.textContent = usuarioTA.señaliacionAt;
      }
    });
  });

// Línea de advertencia

const contenedorLineaAdvertenciaTA =
  document.getElementById("lineaAdvertenciaAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorLineaAdvertenciaTA.textContent = usuarioTA.lineaAdvertenciaAt;
      }
    });
  });

// Control acceso

const contenedorControlAccesoTA = document.getElementById("controlAccesoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorControlAccesoTA.textContent = usuarioTA.controlAccesoAt;
      }
    });
  });

// Firma Residente SST

const contenedorFirmaResidenteTA = document.getElementById("firmaResidenteSST");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorFirmaResidenteTA.textContent =
          usuarioTA.archivoFirmaDigitalSst;
      }
    });
  });

// Registro Fotografic

const contenedorRegistroFotograficoTA = document.getElementById(
  "registroFotrografico"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorRegistroFotograficoTA.textContent =
          usuarioTA.registroFotograficoTrabajoAlturas;
      }
    });
  });

// Personal que Realizara la Actividad

const contenedorPersonalRealizaraActividadTA = document.getElementById(
  "personalRealizaraActividad"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPersonalRealizaraActividadTA.textContent =
          usuarioTA.seleccionTrabajadorAlturas;
      }
    });
  });

// Personal que Autorizara la actividad

const contenedorPersonalAutorizaraActividadTA = document.getElementById(
  "personalAutorizaraActividad"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorPersonalAutorizaraActividadTA.textContent =
          usuarioTA.seleccionAutorizadorAlturas;
      }
    });
  });
