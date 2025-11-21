export class ResponseBase<T> {
  status: number;
  message: string;
  data: T;
}
