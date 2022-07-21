import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICallback } from 'src/app/core/classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(
    private dataProvider: DataProviderService,
    private constantValues: ConstantValueService,
    private toast: ToastrService,
  ) { }
  /**
  * Get analytics overview
  * @param data Payload to submit
  * @callback ICallback function that returns an error or result
  */
  dashboardAnalytics(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.DASHBOARD_ANALYTICS_OVERVIEW, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      }
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }

}