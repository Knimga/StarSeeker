import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      userName: this.userName,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        console.log('You are now logged in!');
        this.router.navigate(['dashboard']);
      } else {
        console.log(data.msg);
        this.router.navigate(['login']);
      }
    })

  }

}
