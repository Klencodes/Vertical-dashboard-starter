import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { UserModel } from '../../models/user';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubject$ = new BehaviorSubject<UserModel>(JSON.parse(null));

  constructor(
    private dataProvider: DataProviderService,
    private constantValues: ConstantValueService,
    private toast: ToastrService
  ) {
  }

  public get userValue(): UserModel {
    return this.userSubject$.value;
  }
  /**
  * Login User with email
  * @data data to submit to server
  * @callback ICallback back function that returns an error or result
  */
  signIn(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.SIGNIN_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        const user = result.results
        localStorage.setItem('user', JSON.stringify(user));
        // this.userSubject$.next(user)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }

  /**
  * Request password reset email 
  * @email email to submit to server
  * @callback ICallback back function that returns an error or result
  */
  forgetPassword(email, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.FORGET_PASSWORD_ENDPOINT, email).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
  * reset password 
  * @data payload to submit to server
  * @callback ICallback back function that returns an error or result
  */
  resetPassword(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.RESET_PASSWORD_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
* create new user password with email
* @data data to submit to server
* @callback ICallback back function that returns an error or result
*/
  createNewPassword(data, callback: ICallback) {
    this.dataProvider.postNoToken(this.constantValues.CREATE_NEW_PASSWORD_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }

}