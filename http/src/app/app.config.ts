import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { tap } from 'rxjs';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const req = request.clone({
    headers: request.headers.set('X-DEBUG', 'TESTING')
  });
  console.log('[Outgoing Request]', req);
  return next(req).pipe(
    tap({
      next: event => {
        if(event.type === HttpEventType.Response) {
          console.log('[Incoming Response]', event.status, event.body);
        }
      }
    })
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([
      loggingInterceptor
    ]))
  ]
};
