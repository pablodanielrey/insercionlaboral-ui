import { MenuSistema } from '../core/sistema/types';
  
export const menu : MenuSistema = [
    { item: 'Mis Datos', menu: null, ruta: '/sistema/mis_datos', icono: 'filter_1', permisos: [] },
    { item: 'Mis Inscripciones', menu: null, ruta: '/sistema/mis_inscripciones', icono: 'filter_1', permisos: [] },
    { item: 'Inscribirme', menu: null, ruta: '/sistema/inscripciones/crear', icono: 'filter_1', permisos: [] },

    // esto es de insercion laboral para administrar
    { item: 'Inscripciones', menu: null, ruta: '/sistema/inscripciones/listar', icono: 'filter_1', permisos: [] }
    
];