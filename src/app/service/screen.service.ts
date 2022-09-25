import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class ScreenService {
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() {}

  // @HostListener('window:resize', ['$event'])
  onWindowResize(): number[] {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    return [this.getScreenWidth, this.getScreenHeight];
  }
}
