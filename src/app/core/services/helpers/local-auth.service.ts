import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

    private admin:any = new UserModel();
    private logedInCount = 'logedInCount';
    userType;
    constructor() { }
    /**
     * Verify if a admin is logged in
     * @returns True if logged in else false
     */
    get isLogedIn(): boolean {
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      }
      return false;
    }
     /**
     * Verify if a admin is Admin
     * @returns True if logged in else false
     */
    get isAdmin(): boolean {
      const userType = localStorage.getItem('userType');
      if (userType === 'ADMIN') {
        return true;
      }
      return false;
    }
    /**
     * Verify if a admin is logged in for the first time
     * @returns True if logged in else false
     */
    get isFirstLogedIn(): boolean {
      const status = localStorage.getItem(this.logedInCount);
      if (status !== undefined && status !== '' && status === '1') {
        return true;
      }
      return false;
    }
    /**
     * Upate first logged in status
     * @param status logged in status
     */
    increaseLoggedInCount() {
      let count: number = this.getLogedInCount;
      if (count !== undefined && count !== NaN && count !== null) {
        count += 1;
        localStorage.setItem(this.logedInCount, count.toString());
      }
    }
  /**
     * Get admin's logged in count
     * @returns Number
     */
    get getLogedInCount(): number {
      const status = localStorage.getItem(this.logedInCount);
      let count = 0;
      if (status !== undefined && status !== '' && status !== null) {
        // tslint:disable-next-line:radix
        count = Number.parseInt(status);
      }
      return count;
    }
    /**
     * Get information about current admin logged in from localStorage
     * @returns admin object
     */
    get adminObj() {
      this.admin = <UserModel>JSON.parse(localStorage.getItem('admin') || '{}');
      if (!this.admin) {
        return null;
      }
      return this.admin;
    }
    /**
     * Save admin's information locally in localStorage
     * @param admin admin data in JSON format
     */
    saveUser(admin: any) {
      localStorage.setItem('admin', JSON.stringify(admin));
    }
    /**
     * Save admin's token to localStorage
     * @param token admin's auth_token from server
     */
    saveToken(token: string) {
      localStorage.setItem('token', token);
    }
    /**
     * Save admin type to localStorage
     * @param token admin's auth_token from server
     */
    saveUserType(user_type: string) {
      localStorage.setItem('userType', user_type);
    }
    /**
     * Save admin's token to localStorage
     * @param refresh token admin's auth_token from server
     */
     saveRefreshToken(refresh: string) {
      localStorage.setItem('refresh', refresh);
    }

       /**
     * Remove admin type from localStorage
     */
    removeLoginType() {
      localStorage.removeItem('loginType');
    }
       /**
     * Remove phone number from localStorage
     */
    removePhoneNumber() {
      localStorage.removeItem('phoneNumber');
    }
    /**
     * Save admin's token to localStorage
     * @param token admin's auth_token from server
     */
    saveNotificationToken(token: string) {
      localStorage.setItem('browser_token', token);
    }
    /**
     * Get noifcation token
     */
    get getNotificationToken() {
      const browser_token = localStorage.getItem('browser_token');
      const uuId = localStorage.getItem('uuid');
      let token = '';
      if (browser_token !== undefined && browser_token !== null && browser_token !== '') {
        token = browser_token;
      } else  if (uuId !== undefined && uuId !== null && uuId !== '') {
        token = uuId;
      } else {
        localStorage.setItem('uuid', token);
      }
      return token;
    }
    removeUserAndToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      localStorage.removeItem('browser_token');
    }
    /**
     * Locally update admin information in localStorage
     * @param key Key to update
     * @param value Value to update to
     */
    updateUser(key: string, value: any) {
      const admin: any = <UserModel>JSON.parse(localStorage.getItem('admin') || '{}');
      if (this.admin) {
        admin[key] = value;
        localStorage.setItem('admin', JSON.stringify(admin));
      }
    }
    /**
     * Get logged in admin's auth_token
     * @returns Returns string of auth token, but null if not exist
     */
    get token() {
      const token:any = localStorage.getItem('token');
      if (!token) {
        return null;
      }
      return token;
    }
    /**
     * Get logged in admin's refresh token
     * @returns Returns string of refresh token, but null if not exist
     */
    get refresh() {
      const refresh:any = localStorage.getItem('refresh');
      if (!refresh) {
        return null;
      }
      return refresh;
    }
    /**
     * Get notification token
     * @returns notication token
     */
    get notifictionToken() {
      const token = localStorage.getItem('browser_token');
      if (!token) {
        return null;
      }
      return token;
    }

    /**
     * Logout admin from system
     */
    logout() {
      const count = this.getLogedInCount;
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      this.removeUserAndToken();
      // localStorage.clear();
      localStorage.setItem(this.logedInCount, count.toString());
      window.location.href = '/auth/signin';
    }
  }
  