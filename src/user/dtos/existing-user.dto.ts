import { ApiProperty } from "@nestjs/swagger";

export class ExistingUserDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
