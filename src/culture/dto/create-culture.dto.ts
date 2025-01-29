import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCultureDto {
  @ApiProperty({ example: 'Soja', description: 'Nome da cultura', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;
}
