import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';
import { IsValidTotalArea } from '../decorators/valid-total-area.decorator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;
  
  @IsNumber()
  @IsNotEmpty()
  totalArea: number;

  @IsNumber()
  @IsNotEmpty()
  vegetationArea: number;
  
  @IsNumber()
  @IsNotEmpty()
  cultivableArea: number;

  //obs: campo utilizado para decorator validar as areas, areaValidation não é enviado ou recebido.
  @IsValidTotalArea()
  areaValidation: boolean; 

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  state: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  city: string;

  @IsNumber()
  @IsNotEmpty()
  producerId: number;

}
