import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { TrimWhitespace, UserType } from "src/common/constants";

export class UserSignUpDto {
    @ApiProperty({required: true, type: String})
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({type: String, required: true})
    @IsNotEmpty()
    @Transform((value)=>TrimWhitespace(value))
    password: string

    @ApiProperty()
    firstname: string

    @ApiProperty()
    lastname: string

    @ApiProperty({example: 'mm/dd/yyyy'})
    dob: string

    @ApiProperty()
    @IsPhoneNumber()
    phone_no: string

}


export class UpdateAuthDto {}


export class SignInQueryOptions {
    @ApiProperty({required: true, enum: UserType})
    @IsEnum(UserType)
    sign_in_type: UserType
}

export class UserSignInDto {
    @ApiProperty({required: true})
    @IsEmail()
    email: string   

    @ApiProperty({required: true})
    password: string
}