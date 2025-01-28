import { ApiProperty } from '@nestjs/swagger';

export class PropertyDto {
  @ApiProperty({ example: 1, description: 'ID da propriedade' })
  id: number;

  @ApiProperty({ example: 'Fazenda do João', description: 'Nome da propriedade' })
  name: string;

  @ApiProperty({ example: 1000, description: 'Área total da propriedade (em metros quadrados)' })
  totalArea: number;

  @ApiProperty({ example: 800, description: 'Área de vegetação da propriedade (em metros quadrados)' })
  vegetationArea: number;

  @ApiProperty({ example: 600, description: 'Área cultivável da propriedade (em metros quadrados)' })
  cultivableArea: number;

  @ApiProperty({ example: 'São Paulo', description: 'Estado onde a propriedade está localizada' })
  state: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade onde a propriedade está localizada' })
  city: string;

  @ApiProperty({ example: 1, description: 'ID do produtor associado à propriedade' })
  producerId: number;

  @ApiProperty({ example: '2024-01-28T12:00:00Z', description: 'Data de criação da propriedade' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-28T12:30:00Z', description: 'Última atualização da propriedade' })
  updatedAt: Date;
}
