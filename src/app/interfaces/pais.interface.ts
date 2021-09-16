export interface PaisResposive {

  id: number;
  user_id: number;
  title: string;
  code: string;
  ciudades: string;
  informacion: string;
  isActive: boolean;
  created_at: Date;
  datos:   Datosvictima[];
  violaciones:   Violacionesddhh[];
  crimenes:   Crimeneslh[];
}

export interface Datosvictima {
  id: number;
  user_id: number;
  pais_id: number;
  numDatosvictimas: string;
  generoVictimasHombre: string;
  generoVictimasMujer: string;
  edadVictimaNino: string;
  edadVictimaJoven: string;
  edadVictimaAdulto: string;
  edadVictimaOld: string;
  estatusMigratorioRegular: string;
  estatusMigratorioIrregular: string;
  estatusConsulado: string;
  estadoIntegridad: string;
  created_at: Date;
}

export interface Violacionesddhh {
  id: number;
  user_id: number;
  pais_id: number;
  violacionesDdhhTotal: string;
  clasificacionDCP: string;
  clasificacionDESCA: string;
  calsificacionPueblos: string;
  lugar: string;
  breveDescripcion: string;
  numCasosCorteInterDDHH: string;
  numCasosComDHNU: string;
  casosNoAccionar: string;
  created_at: Date;
}

export interface Crimeneslh {
  id: number;
  user_id: number;
  pais_id: number;
  crimeneslh: string;
  clasificacionColectiva: string;
  clasificacionIndividual: string;
  lugar: string;
  breveDescripcion: string;
  numCasosCPIAprobados: string;
  numCasosCPIPendientes: string;
  numCasosNoCpiAprobado: string;
  numCasosNoCpiPendiente: string;
  created_at: Date;
}
