import { Exclude, Expose, Transform } from 'class-transformer';
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UserDto {
  constructor(user) {
    Object.assign(this, user);
  }

  @Expose()
    id: string;

  @Expose()
  @IsString()
    firstName: string;

  @Expose()
  @IsString()
    lastName: string;

  @Expose()
  @IsEmail()
  @Transform(({ value }) => typeof value === 'string' && value.toLowerCase())
    email: string;

  @Expose()
  @IsString()
    password: string;

  @Exclude()
    salt: string;

  @Exclude()
    hash: string;
}

export class CreateUserDto extends UserDto {
  @Exclude()
    id: string;
}

export class CreateUserReponseDto extends UserDto {
  @Exclude()
    password: string;
}

export class UpdateUserDto {
  @Expose()
  @IsOptional()
  @IsString()
    firstName: string;

  @Expose()
  @IsOptional()
  @IsString()
    lastName: string;
}

export class UpdateUserResponseDto extends UserDto {
  @Exclude()
    password: string;
}