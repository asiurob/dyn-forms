import { DynInput } from "@dyn-forms/dyn-input/dyn-input.interface";
import { DynSelect } from "@dyn-forms/dyn-select/dyn-select.interface";

const _input1: DynInput = {
  meta: 'dyninput',
  formControl: 'input1',
  placeholder: 'Otra cosa',
  label: 'Una mas',
};

const _input2: DynSelect = {
  meta: 'dynselect',
  formControl: 'input2',
  label: 'Another lie here',
  columnClass: 'col-md-8',
  options: [
    { key: 'one', value: 'Uno' },
    { key: 'two', value: 'Dos' },
    { key: 'Ten', value: 'Diez' },
  ],
  emitChange: true
};



export const inputs: any[] = [ _input1 ];
