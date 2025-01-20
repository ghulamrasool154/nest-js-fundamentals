import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log('data', data);
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
