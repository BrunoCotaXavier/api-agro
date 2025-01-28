import { ApiProperty } from '@nestjs/swagger';

export class ProducerDto {
  @ApiProperty({ example: 1, description: 'ID do produtor' })
  id: number;

  @ApiProperty({ example: 'João Silva', description: 'Nome do produtor' })
  name: string;

  @ApiProperty({ example: '12345678900', description: 'Documento do produtor' })
  document: string;

  @ApiProperty({ example: 'CPF', enum: ['CPF', 'CNPJ'], description: 'Tipo de documento' })
  documentType: 'CPF' | 'CNPJ';

  @ApiProperty({ example: '2024-01-28T12:00:00Z', description: 'Data de criação do produtor' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-28T12:30:00Z', description: 'Última atualização do produtor' })
  updatedAt: Date;
}
