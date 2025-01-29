import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsValidTotalAreaConstraint implements ValidatorConstraintInterface {
  validate(property: any, args: any) {
    const { totalArea, vegetationArea, cultivableArea } = args.object;
    return vegetationArea + cultivableArea <= totalArea;
  }

  defaultMessage() {
    return 'The sum of the vegetationArea and the cultivableArea cannot be greater than the totalArea';
  }
}

export function IsValidTotalArea(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidTotalAreaConstraint,
    });
  };
}
