import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ async: false })
export class IsCpfCnpjValidConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return cpf.isValid(value) || cnpj.isValid(value);
  }

  defaultMessage() {
    return 'This CPF or CNPJ is invalid';
  }
}

export function IsCpfCnpjValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCpfCnpjValidConstraint,
    });
  };
}
