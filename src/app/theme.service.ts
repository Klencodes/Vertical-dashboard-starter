import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public static light = 'light';

  public get current(): string {
  	return localStorage.getItem('theme-color') ?? ThemeService.light;
  }

  public set current(value: string) {
  	localStorage.setItem('theme-color', value);
  	this.style.href = `${value}.css`;
  }

  private readonly style: HTMLLinkElement;

  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);

    if (localStorage.getItem('theme-color') !== undefined) {
    	this.style.href = `${this.current}.css`;
    }
  }
}
