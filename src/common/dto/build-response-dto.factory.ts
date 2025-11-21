import { Type } from '@nestjs/common';
import { ResponseBase } from './response-base.dto';
import { ApiProperty } from '@nestjs/swagger';

export function createResponseDto<T extends Type<any>>(model: T) {
  const modelName = model.name; // "SignInResponse"
  const wrapperName = `${modelName}Dto`; // => "SignInResponseDto"

  class DynamicResponseDto extends ResponseBase<InstanceType<T>> {
    @ApiProperty({ type: model })
    declare data: InstanceType<T>;
  }

  Object.defineProperty(DynamicResponseDto, 'name', {
    value: wrapperName,
  });

  return DynamicResponseDto;
}
