import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";
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

    @ApiProperty({required: true})
    type: UserType

    @ApiProperty()
    firstname: string

    @ApiProperty()
    lastname: string

    @ApiProperty()
    dob: Date

}


export class UpdateAuthDto {}