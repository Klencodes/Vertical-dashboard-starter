import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ResponseStatus } from '../../enums/enums';
// import { NgxSpinnerService } from 'ngx-spinner';
import { CartModelClient } from '../../models/cart';
import { ProductModel } from '../../models/product';
import { ProductService } from './product.service';
import { NavigationExtras, Router } from '@angular/router';
import { OrderService } from './order.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Data variables to store client information on the client's localStorage
  public cartDataClient: CartModelClient = {
    prodData: [{ quantity: 0, product: undefined, subTotal: 0 }],
    total: 0,
    tax: 0,
    discount: 0
  }; // This will be sent to the backend Server as post data

  cartTotal$ = new BehaviorSubject<Number>(0);
  cartDataObs$ = new BehaviorSubject<CartModelClient>(null);

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private toast: ToastrService,
    private router: Router,
    // private spinner: NgxSpinnerService,
  ) {  }

  // public get couponValue(): CouponModelServer {
  //   return this.couponData$.value;
  // }

  /**
   * Add product to cart
   * @param id 
   * @param quantity 
   */
  addProductToCart(product: ProductModel, quantity?: number) {
    // If the cart is absolutely empty
    if (this.cartDataClient.prodData[0].product === undefined) {
      this.cartDataClient.prodData[0].quantity = 1;
      this.cartDataClient.prodData[0].product = product;
      this.cartDataClient.prodData[0].subTotal = this.cartDataClient.prodData[0].quantity * parseFloat(product.new_price);    
      
      this.calculateTotal();
      this.cartDataObs$.next({ ...this.cartDataClient });
      //Toast notification
      this.toast.success('added to cart.', `${product.name}`);
    } // END of IF
    // Cart is not empty
    else {
      let index = this.cartDataClient.prodData.findIndex((p) => p.product.id === product.id);
      // 1. If chosen product is already in cart array
      if (index !== -1) {
          this.cartDataClient.prodData[index].quantity++;
          this.calculateSubTotal(index);    
          this.calculateTotal();
          this.cartDataObs$.next({ ...this.cartDataClient });
        //Toast notification
        this.toast.info('quantity updated in cart.', `${product.name}`);
      }
      // 2. If chosen product is not in cart array
      else {
        this.cartDataClient.prodData.push({
          product: product,
          quantity: 1,
          subTotal: (1 * parseFloat(product.new_price)).toFixed(2)
        })
        this.calculateTotal();
        this.cartDataObs$.next({ ...this.cartDataClient });
        //Toast notification
        this.toast.success('added to cart.', `${product.name}`);
      }
    } // END of ELSE
  }


  updateCartData(product: ProductModel, increase: Boolean) {
    let index = this.cartDataClient.prodData.findIndex((p) => p.product.id === product.id);
    if (increase) {
      this.cartDataClient.prodData[index].quantity++
      this.calculateSubTotal(index);    
      this.calculateTotal();
      this.cartDataObs$.next({ ...this.cartDataClient });
    } else {

      if (this.cartDataClient.prodData[index].quantity <= 1) {
        this.cartDataClient.prodData[index].quantity = 1;
        this.calculateSubTotal(index);    
        this.calculateTotal();
      this.cartDataObs$.next({ ...this.cartDataClient });
        return;
      } else {
        this.cartDataClient.prodData[index].quantity--;
        this.calculateSubTotal(index);    
        this.calculateTotal();
        this.cartDataObs$.next({ ...this.cartDataClient });      }
    }
  }

  removeCartProduct(index) {
    /**Recalculate total amount if an item is added or removed */
    this.cartDataClient.prodData.splice(index, 1);
    this.calculateTotal();
    /**Clear cart if total amount in cart client data is 0 */
    if (this.cartDataClient.total === 0) {
      this.emptyCartClient()
    }
    if(this.cartDataClient.prodData[0].product == undefined){
      this.cartDataObs$.next(null)
    }
  }
  /**
   * 
   * @param data Claim available customer coupon 
   */
  claimCoupon(data) {
    // this.couponVal = data;
    // const cData = { total_amount: this.cartDataClient.total, coupon_code: data }
    // this.orderService.claimCoupon(cData, (error, result) => {
    //   localStorage.setItem('code', data)
    //   if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
    //     const coupon = result.results;
    //     if (coupon) {
    //       this.cartDataClient.discount = coupon.discount_amount;
    //       this.cartDataObs$.next({ ...this.cartDataServer });
    //     }
    // }
    // })
  }
  /**
   * 
   * @param customerData Checkout customer orders
   * Here Customer payment info is sent together with order
   */
   /**
* 
* @param index of cart item to delete (items are removed locally)
* @returns 
*/
  clearCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will clear your cart!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, Clear it!'
    }).then(result => {
      if (result.value) {
        this.emptyCartClient()
        this.cartDataObs$.next(null)
        Swal.fire('Cart Cleared!', 'Your cart has been cleared.', 'success');
      } else {
        return
      }
    });
  }

  ///Helper functions

  /**
   * Calculate Total
   */
  private calculateTotal() {
    let Total = 0;
    this.cartDataClient.prodData.forEach((p) => {
      const { quantity } = p;
      const { new_price }: any = p.product;
      Total += quantity * new_price;
    });
    this.cartDataClient.total = parseFloat(Total.toFixed(2));
    this.cartDataClient.tax = parseFloat((Total * 0.05).toFixed(2));
    this.cartTotal$.next(this.cartDataClient.total);
  }
  
  /**
   * Calculate Subtotal
   * @param index 
   * @returns 
   */
  calculateSubTotal(index: any): Number {
    
    let subTotal = 0;
    let data = this.cartDataClient.prodData[index];
    // @ts-ignore
    subTotal = data.product.new_price * data.quantity;
    this.cartDataClient.prodData[index].subTotal = subTotal.toFixed(2);
    this.cartTotal$.next(this.cartDataClient.prodData[index].subTotal);
    return subTotal;
  }

  emptyCartClient() {
    this.cartDataClient = {
      prodData: [{ quantity: 0, product: undefined, subTotal: 0 }],
      total: 0,
      tax: 0,
      discount: 0
    };
    this.cartDataObs$.next({ ...this.cartDataClient });
  }


}
