import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { IsValidTotalArea } from '../decorators/valid-total-area.decorator';

export class CreatePropertyDto {
  @ApiProperty({ example: 'Fazenda Santa Luzia', description: 'Nome da propriedade', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @ApiProperty({ example: 500, description: 'Área total da propriedade em hectares' })
  @IsNumber()
  @IsNotEmpty()
  totalArea: number;

  @ApiProperty({ example: 250, description: 'Área de vegetação nativa em hectares' })
  @IsNumber()
  @IsNotEmpty()
  vegetationArea: number;

  @ApiProperty({ example: 250, description: 'Área cultivável em hectares' })
  @IsNumber()
  @IsNotEmpty()
  cultivableArea: number;

  @ApiHideProperty() // Esconde este campo do Swagger, pois é apenas para validação interna
  @IsValidTotalArea()
  areaValidation: boolean; 

  @ApiProperty({ example: 'São Paulo', description: 'Estado onde a propriedade está localizada', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  state: string;

  @ApiProperty({ example: 'Ribeirão Preto', description: 'Cidade onde a propriedade está localizada', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  city: string;

  @ApiProperty({ example: 1, description: 'ID do produtor responsável pela propriedade' })
  @IsNumber()
  @IsNotEmpty()
  producerId: number;
}
