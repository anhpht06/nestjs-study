import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
import { ResponseBase } from './response-base.dto';

export function createResponseDto<T extends Type<any>>(
  model: T,
  options?: { isArray?: boolean },
) {
  const modelName = model.name;
  const isArray = options?.isArray ?? false;
  const wrapperName = isArray
    ? `${modelName}ArrayResponseDto`
    : `${modelName}ResponseDto`;

  class DynamicResponseDto extends ResponseBase<
    InstanceType<T> | InstanceType<T>[]
  > {
    @ApiProperty({
      type: model,
      isArray,
    })
    declare data: InstanceType<T> | InstanceType<T>[];
  }

  Object.defineProperty(DynamicResponseDto, 'name', {
    value: wrapperName,
  });

  return DynamicResponseDto;
}
