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
    * Get All reviews 
    * @callback ICallback function that returns an error or result
    */
     fetchAllReviews(callback: ICallback) {
        this.dataProvider.getData(this.constantValues.FETCH_ALL_REVIEWS_ENDPOINT).subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }
    /**
    * Get reviews with page number
    * @callback ICallback function that returns an error or result
    */
    fetchReviews(page: number, callback: ICallback) {
        this.dataProvider.getData(this.constantValues.REVIEWS_ENDPOINT + '?page=' + page).subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }

    /* Get a single review from server
    * @param id ID of review to fetch
    * @callback ICallback function that returns an error or result
    */
    reviewDetails(id: string, callback: ICallback) {
        this.dataProvider.getDataNoToken(this.constantValues.REVIEWS_ENDPOINT + id + '/').subscribe(result => {
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
     * Publish review 
     * @param id 
     * @param callback 
     */
     updateReviewState(data, callback: ICallback) {
        this.dataProvider.postData(this.constantValues.UPDATE_REVIEW_PUBLISH_STATE_ENDPOINT, data).subscribe(result => {
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
    editReview(data, callback: ICallback) {
        this.dataProvider.updateData(this.constantValues.REVIEWS_ENDPOINT, data).subscribe(result => {
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
        this.dataProvider.deleteData(this.constantValues.REVIEWS_ENDPOINT + id + '/').subscribe(result => {
            callback(null, result);
        }, error => {
            callback(error, null);
            //   this.notificationService.snackBarErrorMessage(error.message);
        });
    }

}
