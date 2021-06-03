import { DynError } from '@interfaces/dyn-error.interface';

export interface DynSelect {
  meta: string; // Etiqueta para identificar el tipo de componente dinamico
    label: string; // Es la etiqueta que sube cuando se hace focus en el select
    formControl: string; // Es el nombre que llevará el control dentro del formulario reactivo
    options: DynSelectOptions[]; // Opciones que se ciclarán en el select
    disabled?: boolean; // Si se puede interactuar con el input
    columnClass?: string; // Esta clase se agregará como grid de boostrap
    value?: string;  // El valor que tendrá el input por defecto
    emitChange?: boolean; // Si cuando se cambie la selección el elemento emitirá el evento y valor
    hint?: string; // Si llevará un texto de auida el select
    errors?: DynError; // En caso de fallar en los validadores, marcar un error
}

interface DynSelectOptions {
    key: string; // Valor para programación
    value: string; // Etiqueta para UX
    disabled?: boolean; // Si se puede elegir la opción
}
