import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders,} from '@angular/common/http';
import {retry} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getCachingHeaders } from '../../utils/cachingHeaders';

const API_URL = environment.apiUrl;
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      url: API_URL + req.url ,
      headers: getCachingHeaders(),
    });
    return next.handle(modifiedRequest).pipe(
      retry(3),
    );
  }
}
