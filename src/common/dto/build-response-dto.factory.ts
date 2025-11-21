import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
import { ResponseBase } from './response-base.dto';

export const buildResponseDto = <TModel extends Type<any>>(model: TModel) => {
  class ResponseDto extends ResponseBase<InstanceType<TModel>> {
    @ApiProperty()
    declare status: number;

    @ApiProperty()
    declare message: string;

    @ApiProperty({ type: model })
    declare data: InstanceType<TModel>;
  }

  return ResponseDto;
};
