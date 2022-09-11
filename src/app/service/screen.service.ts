import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class ScreenService {
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenWidth);
    console.log(this.getScreenHeight);
  }
}
