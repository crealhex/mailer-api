import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Status } from 'src/status/schemas/status.schema';

// Write the CreateMailDTO class using class-validator and swagger libraries. Use the Mail class properties and types from src/mail/schemas/mail.schema.ts.
export class CreateMailDTO {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  readonly from: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  readonly to: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  readonly subject: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: Status;
}

// Write the UpdateMailDTO using PartialType
export class UpdateMailDTO extends PartialType(CreateMailDTO) {}
