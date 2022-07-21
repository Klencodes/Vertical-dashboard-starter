import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalAuthService } from '../services/helpers/local-auth.service';
import { ConstantValueService } from '../services/helpers/constant-values.service';
import { TinggPaymentService } from '../services/api-calls/tingg-payment.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tinggAccessToken: any;
  constructor(
    private localAuth: LocalAuthService,
    private constantValues: ConstantValueService,
    private tinggService: TinggPaymentService,
    ) {
      this.tinggService.accessToken$.subscribe(token =>{
        this.tinggAccessToken = token;
      })
     }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = request.headers.get('Authorization');
    const authApiKey = request.headers.get('AuthApiKey');
    console.log(authHeader, 'authBearer')
    console.log(authApiKey, 'authApiKey')

    if (authHeader !== undefined && authHeader !== null && authHeader !== '' && authHeader === 'Token') {
      console.log(authHeader, 'Token')
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', 'Token ' + this.localAuth.adminObj.auth_token)
      });
      return next.handle(cloneReq);
    }
    if (authApiKey !== undefined && authApiKey !== null && authApiKey !== '' && authApiKey === 'apiKey') {
      console.log(authApiKey, 'authHeader')
      const cloneReq = request.clone({
        headers: request.headers.set('apiKey', this.constantValues.TINGG_API_KEY)
      });
      return next.handle(cloneReq);
    }
    if (authHeader !== undefined && authHeader !== null && authHeader !== '' && authHeader === 'Bearer') {
      console.log(authHeader, 'authBearer')
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.tinggAccessToken)
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
