import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHarvestDto {
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  plantedArea: number;

  @IsNumber()
  @IsNotEmpty()
  propertyId: number;

  @IsNumber()
  @IsNotEmpty()
  cultureId: number;
}
