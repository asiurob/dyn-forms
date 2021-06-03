import { DynButton } from "@interfaces/dyn-button.interface";

export interface DynFormConfig {

  inputs: any[]; // Arreglo de inputs, es decir, dynInput, dynSelect, dynRadio, etc.
  button?: DynButton; // configuración del botón de submit
  rowClass?: string; // Si se quiere agregar una clase al row de bootstrap
  emitForm?: boolean; // Suscriptor al formulario, emitirá eventos cuando cambie un input

}
