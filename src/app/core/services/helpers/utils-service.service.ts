import { Injectable } from '@angular/core';
import { ExportDocService } from './export-doc.service';
import * as moment from 'moment';
import { JsPDFAutoTableColumn } from '../../interfaces/jspdf-auto-table';
import { DecimalPipe } from '@angular/common';
import { ConstantValueService } from './constant-values.service';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(
    private exportDocument: ExportDocService,
    private decimalPipe: DecimalPipe
  ) { }

  transformDecimal(num) {
    return this.decimalPipe.transform(num, '1.2-2');
  }
  /**
   * Remove space(s) from text
   * @param text text to trim
   */
  removeWhitespace(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/\s/g, ''); }
    return '';
  }
  /**
 * Replace space(s) from text with underscores
 * @param text text to trim
 */
  replaceWhitespaceWithUnderscore(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/\s/g, '_'); }
    return '';
  }
  /**
* Replace space(s) from text with underscores
* @param text text to trim
*/
  replaceUnderscoreWithWhitespace(text: string) {
    if (text !== undefined && text !== null && text !== '') { return text.replace(/_/g, ' '); }
    return '';
  }

  /**
   * Convert data to formdata
   * @param formValue 
   * @returns 
   */
 toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  
    return formData;
  }
  
  /**
* Export Orders as CSV
*/
  exportOrderAsCSV(dataArray: any[]) {
    const csvData = [];
    dataArray.forEach(data => {
      let customerName = data?.customer.first_name + ' ' + data?.customer.last_name;
      csvData.push({
        // 'DATE CREATED': moment(data.date_created).format('DD/MM/YYYY'),
        // 'CHANNEL': data.channel,
        // 'CANCELLED': data.is_cancelled,
        // 'FULFILLED': data.is_fulfilled,
        // 'PAID': data.is_paid,
        'ORDER ID': data.order_code,
        'CUSTOMER NAME': customerName,
        'DATE PLACED': moment(data.date_created).format('DD/MM/YYYY'),
        'PICKUP DATE/TIME': moment(data.pickup_date_time).format('DD/MM/YYYY'),
        'TOTAL ITEMS': data.order_items?.length,
        'SUB TOTAL': data?.sub_total,
        'TAX': data?.tax,
        'TOTAL': data?.total,
      });
    });
    this.exportDocument.exportAsCSV('Orders_' + moment().format('DD_MM_YYYY').toString(), csvData);
  }

  /**
* Export Products as CSV
*/
  exportProductAsCSV(dataArray: any[]) {
    const csvData = [];
    dataArray.forEach(data => {
      // let extraImages = data?.extra_images.map(e => e.image).join(",")
      // console.log(extraImages, 'EXTRA')
      let collections = data?.collections.map(e => e.collection.name).join(",")
      csvData.push({
        // 'DATE CREATED': moment(data.date_created).format('DD/MM/YYYY'),
        // 'OLD PRICE': data.old_price,
        'NAME': data.name,
        'CATEGORY': data.category,
        'SKU': data?.sku,
        'DESCRIPTION': data?.description,
        'PRICE': data.new_price,
        'WEIGHT': data?.weight,
        // 'PRODUCT STATE': data?.product_state,
        // 'STOCK AVAILABILITY': data?.stock_availability,
        'COLLECTIONS': collections,
        'TAGS': data?.tags,
        'IMAGE': data.image,
        'EXTRA PRODUCT IMAGES': data?.extra_images?.map(e => e?.image).join(","),
        
      });
    });
    this.exportDocument.exportAsCSV('Products_' + moment().format('DD_MM_YYYY').toString(), csvData);
  }

  /**
* Export Customers as CSV
*/
  exportCustomerAsCSV(dataArray: any[]) {
    const csvData = [];
    dataArray.forEach(data => {
      csvData.push({
        // 'IMAGE': data.image,
        'FIRST NAME': data.first_name,
        'LAST NAME': data.last_name,
        'EMAIL': data.email,
        'PHONE NUMBER': data.phone_number,
        'ADDRESS': data.addresses[0]?.address_1,
        'CITY': data?.addresses[0]?.city,
        'STATE': data?.addresses[0]?.state,
        'COUNTRY': data?.addresses[0]?.country,
        'POSTAL CODE': data?.addresses[0]?.postal_code,
      });
    });
    this.exportDocument.exportAsCSV('Customers_' + moment().format('DD_MM_YYYY').toString(), csvData);
  }
  /**
* Export Customers as CSV
*/
  exportReviewAsCSV(dataArray: any[]) {
    const csvData = [];
    dataArray.forEach(data => {
      csvData.push({     
        'PRODUCT': data.product.name,
        'CUSTOMER': data.customer.first_name + ' ' +data.customer.last_name,
        'TITLE': data?.title,
        'FEEDBACK': data?.feedback,
        'REVIEW STATE': data?.is_published,
        'FEEDBACK DATE': moment(data.date_created).format('DD/MM/YYYY'),
      });
    });
    this.exportDocument.exportAsCSV('Reviews' + moment().format('DD_MM_YYYY').toString(), csvData);
  }

  /**
 * Export orders as PDF
 */
  exportOrderAsPDF(dataArray: any[]) {
    const csvData = [];
    dataArray.forEach(data => {
      let customerName = data?.customer.first_name + ' ' + data?.customer.last_name;
      csvData.push({

        // 'CHANNEL': data.channel,
        // 'CANCELLED': data.is_cancelled,
        // 'FULFILLED': data.is_fulfilled,
        // 'PAID': data.is_paid,
        'order_code': data.order_code,
        'customer_name': customerName,
        'date_placed': moment(data.date_created).format('DD-MM-YYYY'),
        'pickup_date_time': moment(data.pickup_date_time).format('DD-MM-YYYY'),
        'total_items': data.order_items?.length,
        'sub_total': data?.sub_total,
        'tax': data?.tax,
        'total': data?.total,
      });
    });
    const columns: JsPDFAutoTableColumn[] = [
      // { header: 'IMAGE', dataKey: 'image' },
      { header: 'ORDER ID', dataKey: 'order_code' },
      { header: 'CUSTOMER NAME', dataKey: 'customer_name' },
      { header: 'DATE PLACED', dataKey: 'date_placed' },
      { header: 'PICKUP DATE/TIME', dataKey: 'pickup_date_time' },
      { header: 'TOTAL ITEMS', dataKey: 'total_items' },
      { header: 'SUB TOTAL', dataKey: 'sub_total' },
      { header: 'TAX', dataKey: 'tax' },
      { header: 'TOTAL', dataKey: 'total' },
    ];

    // const footer = [{ 'date_placed': 'Total', }];
    this.exportDocument.genericExportTablePDF('Orders ', 'Orders_' + moment().unix().toString(), '', columns, csvData);

  }
  /**
 * Export Products as PDF
 */
  exportProductAsPDF(products: any[]) {
    const csvData = [];
    products.forEach(data => {
      csvData.push({
        // 'date_placed': moment(data.date_created).format('DD/MM/YYYY'),
        // 'category': (data.category !== null && data.category !== undefined && data.category !== '') ? data.category.name : '',
        // 'image': data.imag,
        'name': data.name,
        'category': data.category,
        'description': data?.description,
        'product_state': data.product_state,
        'price': this.transformDecimal(data?.new_price),
        'sku': data?.sku,
        'weight': data?.weight
      });
    });
    const columns: JsPDFAutoTableColumn[] = [
      { header: 'NAME', dataKey: 'name' },
      { header: 'CATEGORY', dataKey: 'category' },
      { header: 'DESCRIPTION', dataKey: 'description' },
      { header: 'STATE', dataKey: 'product_state' },
      { header: 'PRICE', dataKey: 'price' },
      { header: 'SKU', dataKey: 'sku' },
      { header: 'WEIGHT', dataKey: 'weight' },
    ];

    // const footer = [{ 'date_placed': 'Total', }];
    this.exportDocument.genericExportTablePDF('Products ', 'Products_' + moment().unix().toString(), '', columns, csvData);

  }
  /**
 * Export Customers as PDF
 */
  exportCustomerAsPDF(customer: any[]) {
    const csvData = [];
    customer.forEach(data => {
      csvData.push({
        // 'date_placed': moment(data.date_created).format('DD/MM/YYYY'),
        // 'category': (data.category !== null && data.category !== undefined && data.category !== '') ? data.category.name : '',
        // 'image': data.image,
        'first_name': data.first_name,
        'last_name': data.last_name,
        'email': data.email,
        'phone_number': data?.phone_number,
        'address': data?.addresses[0]?.address_1,
        'city': data.addresses[0]?.city,
        'state': data.addresses[0]?.state,
        'country': data?.addresses[0]?.country,
        'postal_code': data?.addresses[0]?.postal_code
      });
    });
    const columns: JsPDFAutoTableColumn[] = [
      // { header: 'IMAGE', dataKey: 'image' },
      { header: 'FIRST NAME', dataKey: 'first_name' },
      { header: 'LAST NAME', dataKey: 'last_name' },
      { header: 'EMAIL', dataKey: 'email' },
      { header: 'PHONE NUMBER', dataKey: 'email' },
      { header: 'ADDRESS', dataKey: 'address' },
      { header: 'CITY', dataKey: 'city' },
      { header: 'STATE', dataKey: 'state' },
      { header: 'COUNTRY', dataKey: 'country' },
      { header: 'POSTAL CODE', dataKey: 'postal_code' },
    ];

    // const footer = [{ 'date_placed': 'Total', }];
    this.exportDocument.genericExportTablePDF('Customers ', 'Customers_' + moment().unix().toString(), '', columns, csvData);

  }
  /**
 * Export Reviews as PDF
 */
  exportReviewAsPDF(customer: any[]) {
    const csvData = [];
    customer.forEach(data => {
      csvData.push({
        'product': data.product.name,
        'customer': data.customer.first_name + ' ' +data.customer.last_name,
        'title': data.title,
        'feedback': data?.feedback,
        'date': moment(data.date_created).format('DD/MM/YYYY'),
        'is_published': data?.is_published,
      });
    });
    const columns: JsPDFAutoTableColumn[] = [
      // { header: 'IMAGE', dataKey: 'image' },
      { header: 'PRODUCT', dataKey: 'product' },
      { header: 'CUSTOMER', dataKey: 'customer' },
      { header: 'TITLE', dataKey: 'title' },
      { header: 'FEEDBACK', dataKey: 'feedback' },
      { header: 'FEEDBACK DATE', dataKey: 'date' },
      { header: 'REVIEW STATE', dataKey: 'is_published' },

    ];

    // const footer = [{ 'date_placed': 'Total', }];
    this.exportDocument.genericExportTablePDF('Reviews ', 'Reviews_' + moment().unix().toString(), '', columns, csvData);

  }
}