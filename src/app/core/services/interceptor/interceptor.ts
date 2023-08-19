import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';


import {retry} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.apiUrl;

export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      url: API_URL + req.url ,
      headers: req.headers.append('Cache-Control', 'max-age=31536000, immutable'),
    });
    console.log('inter');

    console.log(modifiedRequest);

    return next.handle(modifiedRequest).pipe(
      retry(3),
    );
  }
}
