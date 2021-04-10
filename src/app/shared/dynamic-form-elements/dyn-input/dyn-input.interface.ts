import { DynError } from '@interfaces/dyn-error.interface';

export interface DynInput {
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
    suffixIcon?: string; // Se anclará un icono de Material Design Icons al final del input
    rawSuffix?: string; // Es un suffix como cadena que no aplica un icono
    emitSuffix?: boolean; // Si el suffix emitirá algun evento de click
    prefixIcon?: string; // Se anclará un icono de Material Design Icons al inicio del input
    rawPrefix?: string; // Es un prefix como cadena que no aplica un icono
    emitPrefix?: boolean; // Si el prefix emitirá algun evento de click
}
