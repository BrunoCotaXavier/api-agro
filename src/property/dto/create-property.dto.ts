import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';

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
