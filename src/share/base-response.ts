import {
  IsDefined,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ResponseErrorCode } from './response-error-code';

export class BaseResponse<T = unknown> {
  @IsDefined()
  @IsString()
  @IsEnum(ResponseErrorCode)
  readonly error: ResponseErrorCode;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  readonly result?: T | string | [];

  constructor(errorCode: ResponseErrorCode, param2: T | string | []) {
    if (errorCode === ResponseErrorCode.SUCCESS) {
      this.error = ResponseErrorCode.SUCCESS;
      this.result = param2 as T;
    } else {
      this.error = errorCode;
      this.result = param2;
    }
  }

  static succeed<TF = unknown>(data: TF = null): BaseResponse<TF> {
    const rsp = new BaseResponse<TF>(ResponseErrorCode.SUCCESS, data);
    return rsp;
  }

  static fail<TF = unknown>(
    erroCode: ResponseErrorCode,
    errorMessage: string | [] = [],
  ): BaseResponse<TF> {
    if (erroCode === ResponseErrorCode.SUCCESS) {
      throw new Error('MUST NOT fail with SUCCESS code');
    }

    const rsp = new BaseResponse<TF>(erroCode, errorMessage);
    return rsp;
  }
}
