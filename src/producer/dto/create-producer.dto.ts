import { IsString, IsEnum, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsCpfCnpjValid } from '../decorators/is-cpf-cnpj-valid.decorator';

export class CreateProducerDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do produtor', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @ApiProperty({ example: '12345678901', description: 'CPF ou CNPJ do produtor', minLength: 11, maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @Length(11, 20)
  @IsCpfCnpjValid()
  document: string;

  @ApiProperty({ example: 'CPF', description: 'Tipo do documento (CPF ou CNPJ)', enum: ['CPF', 'CNPJ'] })
  @IsEnum(['CPF', 'CNPJ'])
  documentType: 'CPF' | 'CNPJ';
}
