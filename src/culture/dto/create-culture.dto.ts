import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCultureDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;
}
