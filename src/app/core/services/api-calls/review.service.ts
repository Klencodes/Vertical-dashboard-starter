import { Injectable } from '@angular/core';
import { ICallback } from '../../classes/callback.interface';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    constructor(
        private dataProvider: DataProviderService,
        private constantValues: ConstantValueService
    ) { }
    /**
   * Search reviews from server
   * @param search_text Search Text
    * @callback ICallback function that returns an error or result
    */
    async searchReviews(search_text, callback: ICallback) {
        this.dataProvider.postData(this.constantValues.SEARCH_REVIEWS_ENDPOINT, search_text).subscribe(async result => {
            callback(null, result);
        }, async error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }
    /**
    * Get reviews with page number
    * @callback ICallback function that returns an error or result
    */
    fetchReviews(page: number, callback: ICallback) {
        this.dataProvider.getData(this.constantValues.FETCH_REVIEWS_ENDPOINT + '?page=' + page).subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }
    /**
     * Reply review 
     * @param data payload to submit to server
     * @param callback callback funtion
     */
    replyReview(data, callback: ICallback) {
        this.dataProvider.postData(this.constantValues.REPLY_REVIEW_ENDPOINT, data).subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }
    /**
     * Edit review 
     * @param data payload to submit to server
     * @param callback callback funtion
    */
    updateReview(data, callback: ICallback) {
        this.dataProvider.updateData(this.constantValues.UPDATE_REVIEW_ENDPOINT, data).subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }
    /**
    * Delete/Cancel review
    * @param id 
    * @param callback 
   */
    deleteReview(id, callback: ICallback) {
        this.dataProvider.deleteData(this.constantValues.DELETE_REVIEW_ENDPOINT + id + '/').subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }

}
