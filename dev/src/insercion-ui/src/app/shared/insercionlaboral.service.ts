import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';




const ELEMENT_DATA = [
  { 
    nombre: 'Walter', 
    apellido: 'Blanco', 
    dni:"30001823",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '36',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '35', 
    fecha_inscripcion: new Date(),
    promedio: 7.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    nombre: 'Emanuel Joaquin', 
    apellido: 'Pais', 
    dni:"35658956",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '33',
    residencia: 'Gonnet',
    experiencia: 'Si',
    materias: '65', 
    fecha_inscripcion: new Date(),
    promedio: 9.70,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:4,

  },
  { 
    nombre: 'Alejandro', 
    apellido: 'Oporto', 
    dni:"45698723",
    oferta: 'Jov. Prof.', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '47',
    residencia: 'La Plata',
    experiencia: 'No',
    materias: '25', 
    fecha_inscripcion: new Date(),
    promedio: 5.75,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:1,

  },
  { 
    nombre: 'Pablo Daniel', 
    apellido: 'Rey', 
    dni:"2569870",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '28',
    residencia: 'Beriso',
    experiencia: 'Si',
    materias: '15', 
    fecha_inscripcion: new Date(),
    promedio: 6.70,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:1,

  },
  { 
    nombre: 'Ivan Cesar', 
    apellido: 'Castañeda', 
    dni:"29568974",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '19',
    residencia: 'Punta Lara',
    experiencia: 'No',
    materias: '35', 
    fecha_inscripcion: new Date(),
    promedio: 7.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    nombre: 'Miguel', 
    apellido: 'Macagno', 
    dni:"36559741",
    oferta: 'Jov. Prof.', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '25',
    residencia: 'La Plata',
    experiencia: 'No',
    materias: '21', 
    fecha_inscripcion: new Date(),
    promedio: 4.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:5,

  },
  { 
    nombre: 'Leonardo', 
    apellido: 'Consolini', 
    dni:"45698752",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '23',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '55', 
    fecha_inscripcion: new Date(),
    promedio: 8.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:3,

  },
  { 
    nombre: 'Maximiliano', 
    apellido: 'Saucedo', 
    dni:"28235669",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '28',
    residencia: 'Beriso',
    experiencia: 'No',
    materias: '63', 
    fecha_inscripcion: new Date(),
    promedio: 5.30,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    nombre: 'Walter', 
    apellido: 'Blanco', 
    dni:"30001823",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '36',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '35', 
    fecha_inscripcion: new Date(),
    promedio: 7.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    nombre: 'Emanuel Joaquin', 
    apellido: 'Pais', 
    dni:"35658956",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '33',
    residencia: 'Gonnet',
    experiencia: 'Si',
    materias: '65', 
    fecha_inscripcion: new Date(),
    promedio: 9.70,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:4,

  },
  { 
    nombre: 'Alejandro', 
    apellido: 'Oporto', 
    dni:"45698723",
    oferta: 'Jov. Prof.', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '47',
    residencia: 'La Plata',
    experiencia: 'No',
    materias: '25', 
    fecha_inscripcion: new Date(),
    promedio: 5.75,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:1,

  },
  { 
    nombre: 'Pablo Daniel', 
    apellido: 'Rey', 
    dni:"2569870",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '28',
    residencia: 'Beriso',
    experiencia: 'Si',
    materias: '15', 
    fecha_inscripcion: new Date(),
    promedio: 6.70,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:1,

  },
  { 
    nombre: 'Ivan Cesar', 
    apellido: 'Castañeda', 
    dni:"29568974",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '19',
    residencia: 'Punta Lara',
    experiencia: 'No',
    materias: '35', 
    fecha_inscripcion: new Date(),
    promedio: 7.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    nombre: 'Miguel', 
    apellido: 'Macagno', 
    dni:"36559741",
    oferta: 'Jov. Prof.', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '25',
    residencia: 'La Plata',
    experiencia: 'No',
    materias: '21', 
    fecha_inscripcion: new Date(),
    promedio: 4.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:5,

  },
  { 
    nombre: 'Leonardo', 
    apellido: 'Consolini', 
    dni:"45698752",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '23',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '55', 
    fecha_inscripcion: new Date(),
    promedio: 8.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:3,

  },
  { 
    nombre: 'Maximiliano', 
    apellido: 'Saucedo', 
    dni:"28235669",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '28',
    residencia: 'Beriso',
    experiencia: 'No',
    materias: '63', 
    fecha_inscripcion: new Date(),
    promedio: 5.30,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  }
  
  
  
  

];

const ELEMENT_DATA2 = [
  { 
    numero:'1',
    nombre: 'Walter', 
    apellido: 'Blanco', 
    dni:"30001823",
    oferta: 'Pasantía', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '36',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '35', 
    fecha_inscripcion: new Date(),
    promedio: 7.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  },
  { 
    numero:'2',
    nombre: 'Emanuel Joaquin', 
    apellido: 'Pais', 
    dni:"35658956",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '33',
    residencia: 'Gonnet',
    experiencia: 'Si',
    materias: '65', 
    fecha_inscripcion: new Date(),
    promedio: 9.70,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:4,

  },
  { 
    numero:'3',
    nombre: 'Alejandro', 
    apellido: 'Oporto', 
    dni:"45698723",
    oferta: 'Jov. Prof.', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '47',
    residencia: 'La Plata',
    experiencia: 'No',
    materias: '25', 
    fecha_inscripcion: new Date(),
    promedio: 5.75,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:1,

  },
  { 
    numero:'4',
    nombre: 'Leonardo', 
    apellido: 'Consolini', 
    dni:"45698752",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '23',
    residencia: 'La Plata',
    experiencia: 'Si',
    materias: '55', 
    fecha_inscripcion: new Date(),
    promedio: 8.50,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:3,

  },
  { 
    numero:'5',
    nombre: 'Maximiliano', 
    apellido: 'Saucedo', 
    dni:"28235669",
    oferta: 'Full Time', 
    carrera: 'Lic. en Economía',
    sexo: 'Masculino',
    edad: '28',
    residencia: 'Beriso',
    experiencia: 'No',
    materias: '63', 
    fecha_inscripcion: new Date(),
    promedio: 5.30,
    aprobadas_aplasos: 6.75,
    cv: 'http://dsfdsfsdfsdfsd',
    envios:2,

  }
];

  const ELEMENT_DATA3 = [
    { 
      fecha: new Date(),
      oferta: 'Full Time', 
      empresa: 'Seguros Rivadavia',
      postulantes: '15',
      estado:'Activa',
    },
    { 
      fecha: new Date(),
      oferta: 'Pasantia', 
      empresa: 'Cerveceria Quilmes ',
      postulantes: '10',
      estado:'Obsoleta',
    }

];


@Injectable({
  providedIn: 'root'
})
export class InsercionlaboralService {

  constructor() { }

  obtenerInscripciones(uid: string): Observable<any[]> {
    return of(ELEMENT_DATA);
  }

  obtenerPostulantes(uid: string): Observable<any[]> {
    return of(ELEMENT_DATA2);
  }

  obtenerSelecciones(uid: string): Observable<any[]> {
    return of(ELEMENT_DATA3);
  }

}
