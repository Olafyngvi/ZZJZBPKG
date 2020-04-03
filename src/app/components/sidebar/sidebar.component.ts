import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  email: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  resetPassword() {}
  logout() {
    if (confirm('Are you sure you want to log out ?')) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
