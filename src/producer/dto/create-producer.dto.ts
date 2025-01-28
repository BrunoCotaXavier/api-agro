import { IsString, IsEnum, IsNotEmpty, Length } from 'class-validator';

export class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 20) // Tamanho do CPF/CNPJ
  document: string;

  @IsEnum(['CPF', 'CNPJ'])
  documentType: 'CPF' | 'CNPJ';
}
