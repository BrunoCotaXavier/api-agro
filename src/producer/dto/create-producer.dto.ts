import { IsString, IsEnum, IsNotEmpty, Length } from 'class-validator';
import { IsCpfCnpjValid } from '../decorators/is-cpf-cnpj-valid.decorator';

export class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 20) 
  @IsCpfCnpjValid()
  document: string;

  @IsEnum(['CPF', 'CNPJ'])
  documentType: 'CPF' | 'CNPJ';
}
