import {
  Injectable,
  Logger,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    const start = Date.now();

    this.logger.log(
      `Request - ${method} ${url} - Body: ${JSON.stringify(body)}`,
    );

    return next.handle().pipe(
      map((responseBody) => {
        const elapsedTime = Date.now() - start;
        const response = context.switchToHttp().getResponse();
        const { statusCode } = response;

        this.logger.log(
          `Response - ${method} ${url} ${statusCode} - ${elapsedTime}ms - Body: ${JSON.stringify(
            responseBody,
          )}\n`,
        );

        return responseBody;
      }),
    );
  }
}
