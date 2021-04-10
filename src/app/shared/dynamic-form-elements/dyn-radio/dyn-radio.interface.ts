import { DynError } from '@interfaces/dyn-error.interface';

export interface DynRadio {
  formControl: string; // Es el nombre que llevará el control dentro del formulario reactivo
  meta: string; // Etiqueta para identificar el tipo de componente dinamico
  options: DynRadioOption[]; // Opciones que se mostrarán en los radios
  label?: string; // Si quieres que haya una etiqueta de encabezado, default 'blank'
  pile?: boolean; // Si las opciones se apilan verticalmente
  bordered?: boolean; // Si las opciones tienen un borde
  orientation?: 'before' | 'after'; // En donde estará el label de cada opción, default 'before'
  value?: string; // El valor que tendrá el input por defecto
  emitChange?: boolean; // Si cuando se salga del campo el elemento emitirá el evento y valor
}

interface DynRadioOption {
  label: string; // Lo que se mostrará al público
  value: string; // El valor interno
  disabled?: boolean; // Si nace deshabilitado, por default no
}
