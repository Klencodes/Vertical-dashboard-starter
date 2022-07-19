import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, retry } from 'rxjs';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { Notification } from '../../models/noti';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  broadCastNotifications$ = new BehaviorSubject<Notification>(null);

  constructor(
    private dataProvider: DataProviderService,
    private toast: ToastrService,
    private constantValues: ConstantValueService,
  ) { }

  /**
 * mark notification as read 
 * @param id of notification
 * @callback ICallback function that returns an error or result
 */
  markNotificationAsRead(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.NOTIFICATIONS_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error('', error)
    });
  }

  /**
 * Fetch all unread Notication
 * @callback ICallback function that returns an error or result
 */
  fetchNotifications(callback: ICallback) {
    const interval = setInterval(() => {
      this.dataProvider.getData(this.constantValues.NOTIFICATIONS_ENDPOINT).subscribe(result => {
        callback(null, result);
        if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
          this.broadCastNotifications$.next(result.results)
        }
      }, error => {
        callback(error, null);
        // this.toast.error('', error)
      })
    }, 50000)
  }
}
