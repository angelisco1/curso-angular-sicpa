import { AbstractControl } from "@angular/forms";

export function emailValido(control: AbstractControl) {
  const email = control.value;

  if (email.includes('.') && email.includes('@') && email.length > 5) {
    return null;
  }

  return {
    emailvalido: {
      tienePunto: email.includes('.'),
      tieneArroba: email.includes('@'),
      tieneMasDe5Letras: email.length > 5,
    }
  }
}