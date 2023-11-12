import { ApiProperty } from '@nestjs/swagger';
import { patient, user } from '@prisma/client'
import { UserType } from 'src/common/constants';

export class User implements user {
    @ApiProperty()
    id: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    created_at: string;
    @ApiProperty()
    updated_at: Date;
    @ApiProperty()
    type: UserType;

}


export class PatientEntity implements patient {
    @ApiProperty()
    id: string;
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    dob: Date;
    @ApiProperty()
    phone_no: string;
    @ApiProperty()
    user_id: string;
}


