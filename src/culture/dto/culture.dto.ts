import { ApiProperty } from '@nestjs/swagger';

export class CultureDto {
  @ApiProperty({ example: 1, description: 'ID da cultura' })
  id: number;

  @ApiProperty({ example: 'Soja', description: 'Nome da cultura' })
  name: string;

  @ApiProperty({ example: '2024-01-28T12:00:00Z', description: 'Data de criação da cultura' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-28T12:30:00Z', description: 'Última atualização da cultura' })
  updatedAt: Date;
}
