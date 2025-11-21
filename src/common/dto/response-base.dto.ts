import { ApiProperty } from '@nestjs/swagger';

export class ResponseBase<T> {
  @ApiProperty()
  status: number;
  @ApiProperty()
  message: string;
  data: T;
}
