import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../service/loading.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    private loader: LoadingService
  ) {}

  /**
   * It intercepts the request, shows the loader, and then hides the loader when the request is
   * complete
   * @param request - HttpRequest<unknown> - The request object
   * @param {HttpHandler} next - HttpHandler - The next interceptor in the chain.
   * @returns Observable<HttpEvent<unknown>>
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.loader.show()
    // return next.handle(request).pipe(
    //   finalize(()=>{
    //     this.loader.hide();
    //   })
    // );

    this.loader.requestStarted();
    return next.handle(request).pipe(
      finalize(()=>{
        this.loader.requestEnd();
      }),
    );
  }
}
