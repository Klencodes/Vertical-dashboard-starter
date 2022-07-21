import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ConstantValueService } from './constant-values.service';
import { NetworkErrorHandlerService } from './network-error-handler.service';
import { LocalAuthService } from './local-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  headers: any;
  options: any;
  headersForFormData: any;
  optionsForFormData: any;
  headersNoToken: any;
  optionsNoToken: any;
  headersAKT: any;
  optionsAKT: any;
  headersAKTBT: any;
  optionsAKTBT: any;

  constructor(
    private localAuth: LocalAuthService,
    private http: HttpClient,
    private constantValues: ConstantValueService,
    private handleNetworkErrorsService: NetworkErrorHandlerService
  ) {
    this.headers = new HttpHeaders()
    this.headersNoToken = new HttpHeaders();
    this.headersForFormData = new HttpHeaders();
    this.headersAKT = new HttpHeaders();
    this.headersAKTBT = new HttpHeaders();
    //Headers and Options for Requests (Token & Content-Type)
    this.headers = this.headers.set('Authorization', 'Token');
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.options = { headers: this.headers };
    //Headers and Options for FormData Requests (Token)
    this.headersForFormData = this.headersForFormData.append('Authorization', 'Token');
    this.optionsForFormData = { headers: this.headersForFormData };
    //Headers and Options for No Token Requests (Content-Type)
    this.headersNoToken = this.headersNoToken.set('Content-Type', 'application/json');
    this.optionsNoToken = { headers: this.headersNoToken };
    //Headers and Options for Tingg Requests(ApiKey & Content-Type)
    this.headersAKT = this.headersAKT.set('AuthApiKey', 'apiKey');
    this.headersAKT = this.headersAKT.set('Content-Type', 'application/json');
    this.optionsAKT = { headers: this.headersAKT };
    //Headers and Options for Tingg Requests (Bearer & ApiKey & Content-Type)
    this.headersAKTBT = this.headersAKTBT.set('AuthApiKey', 'apiKey');
    this.headersAKTBT = this.headersAKTBT.set('Authorization', 'Bearer');
    this.headersAKTBT = this.headersAKTBT.set('Content-Type', 'application/json');
    this.optionsAKTBT = { headers: this.headersAKTBT };

  }
  /**
 * HTTP POST request to submit data
 * @param endPoint Endpoint
 * @param resource Request Payload
 */
  postNoToken(endPoint: string, resource?: any): Observable<any> {
    return this.http.post(this.constantValues.BASE_URL + endPoint, JSON.stringify(resource), this.optionsNoToken)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
 * HTTP GET request to fetch data
 * @param endPoint Endpoint
 */
  getDataNoToken(endPoint: string): Observable<any> {
    return this.http.get(this.constantValues.BASE_URL + endPoint, this.optionsNoToken)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
 * HTTP GET request to fetch data
 * @param endPoint Endpoint
 */
  getData(endPoint: string): Observable<any> {
    return this.http.get(this.constantValues.BASE_URL + endPoint, this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
   * HTTP POST request to submit data
   * @param endPoint Endpoint
   * @param resource Request Payload
   */
  postData(endPoint: string, resource?: any): Observable<any> {
    return this.http.post(this.constantValues.BASE_URL + endPoint, JSON.stringify(resource), this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
   * HTTP POST request to submit data
   * @param endPoint Endpoint
   * @param resource Request Payload
   */
  updateData(endPoint: string, resource?: any): Observable<any> {
    return this.http.put(this.constantValues.BASE_URL + endPoint, JSON.stringify(resource), this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
   * HTTP DELETE request to delete data
   * @param endPoint Endpoint
   */
  deleteData(endPoint: string): Observable<any> {
    return this.http.delete(this.constantValues.BASE_URL + endPoint, this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
 * HTTP POST to create record with FormData payload
 * @param endPoint Endpoint
 * @param resource FormData Request Payload
 */
  postFormData(endPoint: string, resource?: FormData): Observable<any> {
    return this.http.post(this.constantValues.BASE_URL + endPoint, resource, this.optionsForFormData)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
     * HTTP PUT to update data with FormData payload
     * @param endPoint Endpoint
     * @param resource FormData Request Payload
     */
  updateFormData(endPoint: string, resource?: FormData): Observable<any> {
    return this.http.put(this.constantValues.BASE_URL + endPoint, resource, this.optionsForFormData)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
  * HTTP GET request to fetch data locally
  * @param endPoint Endpoint
  * @param jsonResource Request Payload
  */
  getLocalData<T>(endPoint: string): Observable<T> | Observable<any> {
    return this.http.get<T>(endPoint)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
 * HTTP GET request to fetch data
 * @param endPoint Endpoint
 */
  httpGetAll(endPoint: string): Observable<any> {
    return this.http.get(this.constantValues.BASE_URL + endPoint, this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
   * HTTP GET request to fetch data
   * @param url URL
   */
  httpGetNextPage(url: string): Observable<any> {
    return this.http.get(url, this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
   * HTTP POST request to fetch data
   * @param url URL
   * @param resource request payload. OPTIONAL
   */
  httpPostNextPage(url: string, resource?: any): Observable<any> {
    return this.http.post(url, JSON.stringify(resource), this.options)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
   * HTTP POST request to submit data
   * @param endPoint Endpoint
   * @param resource Request Payload
   */
  postTinggApiKeyAndTokenData(endPoint: string, resource?: any): Observable<any> {
    console.log(this.optionsAKTBT)
    return this.http.post(this.constantValues.TINGG_BASE_URL + endPoint, JSON.stringify(resource), this.optionsAKTBT)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }

  /**
   * HTTP POST request to submit data
   * @param endPoint Endpoint
   * @param resource Request Payload
   */
  postTinggApiKeyData(endPoint: string, resource?: any): Observable<any> {
    return this.http.post(this.constantValues.TINGG_BASE_URL + endPoint, JSON.stringify(resource), this.optionsAKT)
      .pipe(
        catchError(this.handleNetworkErrorsService.handleError),
        map((response) => response)
      );
  }
  /**
 * HTTP GET request to fetch data
 * @param endPoint Endpoint
 */
  //  getTinggData(endPoint: string): Observable<any> {
  //   return this.http.get(this.constantValues.TINGG_BASE_URL + endPoint, this.optionsForTingg)
  //     .pipe(
  //       catchError(this.handleNetworkErrorsService.handleError),
  //       map((response) => response)
  //     );
  // }

  /**
   * HTTP POST request to submit data
   * @param endPoint Endpoint
   * @param resource Request Payload
   */
  //  updateTinggData(endPoint: string, resource?: any): Observable<any> {
  //   return this.http.put(this.constantValues.TINGG_BASE_URL + endPoint, JSON.stringify(resource), this.optionsForTingg)
  //     .pipe(
  //       catchError(this.handleNetworkErrorsService.handleError),
  //       map((response) => response)
  //     );
  // }


  /**
* HTTP POST to create record with FormData payload
* @param endPoint Endpoint
* @param resource FormData Request Payload
*/
  postFormDataWithProgress(resource?: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.localAuth.adminObj.auth_token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.constantValues.BASE_URL + this.constantValues.UPLOAD_PRODUCT_IMAGE_ENDPOINT, resource, {
      responseType: "blob", reportProgress: true, observe: "events", headers: headers
    });
  }

  /**
   * Download image for local machine
   */
  generatedownloadImageLink(img, order_code) {
    const imgUrl = img.src;
    const imgName = order_code + '_' + imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
    this.http.get(imgUrl, { responseType: 'blob' as 'json' })
      .subscribe((res: any) => {
        const file = new Blob([res], { type: res.type });

        // IE
        // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        //   window.navigator.msSaveOrOpenBlob(file);
        //   return;
        // }

        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = imgName;

        // Version link.click() to work at firefox
        link.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));

        setTimeout(() => { // firefox
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
  }

}
