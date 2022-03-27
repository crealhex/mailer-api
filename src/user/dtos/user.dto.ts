import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { CreateStatusDTO } from 'src/status/dtos/status.dto';

// Write a CreateUserDTO that uses the class-validator and swagger libraries. Use the User class properties and types from src/user/schemas/user.schema.ts.
export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(45)
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty()
  readonly lastName: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly birthDate: Date;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  readonly status: CreateStatusDTO;
}

// Now write the UpdateUserDTO using PartialType
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
