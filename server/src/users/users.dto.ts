import { Exclude, Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  constructor(user) {
    Object.assign(this, user);
  }

  id: string;

  @IsString()
    firstName: string;

  @IsString()
    lastName: string;

  @IsEmail()
  @Transform(({ value }) => typeof value === 'string' && value.toLowerCase())
    email: string;

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
