import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { role } from './dao/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;


  title = 'chipchat';

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private userService: UserService) {}

  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
