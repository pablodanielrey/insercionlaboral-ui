import { MenuSistema } from '../core/sistema/types';
  
export const menu : MenuSistema = [
    { item: 'Inscripción', menu: null, ruta: '/sistema/mis_inscripciones', icono: 'add_circle_outline', permisos: [] },
    { item: 'Mis Datos', menu: null, ruta: '/sistema/mis_datos', icono: 'perm_identity', permisos: [] },

    // { item: 'Inscribirme', menu: null, ruta: '/sistema/inscripciones/crear', icono: 'add_circle_outline', permisos: [] },

    // esto es de insercion laboral para administrar
    { item: 'Inscripciones', menu: null, ruta: '/sistema/inscripciones/listar', icono: 'people_outline', permisos: [] },
    { item: 'Selecciones', menu: null, ruta: '/sistema/selecciones/listar', icono: 'star_border', permisos: [] }

    
];