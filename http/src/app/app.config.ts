import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const req = request.clone({
    headers: request.headers.set('X-DEBUG', 'TESTING')
  });
  console.log('[Outgoing Request]', req);
  return next(req);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([
      loggingInterceptor
    ]))
  ]
};
