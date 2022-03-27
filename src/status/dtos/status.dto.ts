// import all necessary libraries
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

// export a CreateStatusDTO class using class-validator and swagger libraries
export class CreateStatusDTO {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  readonly code: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  readonly name: string;
}

export class UpdateStatusDTO extends PartialType(CreateStatusDTO) {}
