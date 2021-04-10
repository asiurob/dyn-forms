import { DynError } from '@interfaces/dyn-error.interface';

export interface DynTextarea {
    label: string; // Es la etiqueta que sube cuando se hace focus en el input
    placeholder: string; // Tal cual, el placeholder del input
    formControl: string; // Es el nombre que llevará el control dentro del formulario reactivo
    meta: string; // Etiqueta para identificar el tipo de componente dinamico
    disabled?: boolean; // Si se puede interactuar con el input
    columnClass?: string; // Esta clase se agregará como grid de boostrap
    value?: string; // El valor que tendrá el input por defecto
    emitBlur?: boolean; // Si cuando se salga del campo el elemento emitirá el evento y valor
    emitKeyup?: boolean; // Si cuando se escriba algo el elemento emitirá el evento y valor
    hint?: string; // Si llevará un texto de auida el input
    errors?: DynError; // En caso de fallar en los validadores, marcar un error
}
