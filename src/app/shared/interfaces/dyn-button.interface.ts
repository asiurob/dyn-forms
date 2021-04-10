export interface DynButton {
  show: boolean; // Muestra el botón
  emitForm?: boolean; // Cada vez que hay un cambio en el formulario, se emite el form
  class?: string; // Se agrega una clase al boton
  label?: string; // Se agrega una label, por default 'Enviar'
  color?: string; // Se cambia color de Angular Material, default 'primary'
}
