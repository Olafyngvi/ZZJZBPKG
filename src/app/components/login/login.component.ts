import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    const user = this.auth.getAuth();
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }
  resetPassword() {}
  onSubmit() {
    this.auth.login(this.email, this.password).then(res => {
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err);
    });
  }
}
