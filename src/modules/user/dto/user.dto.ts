import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ name: 'username' })
  username: string;
}
