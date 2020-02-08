import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
//import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  userName: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    ) { }  
  

  ngOnInit() {
  }

  onRegisterSubmit() {

    const user = {
      name: this.name,
      userName: this.userName,
      email: this.email,
      password: this.password
    }

    //req'd fields
    if(!this.validateService.validateRegister(user)) {
      //this.flashMessage.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Please fill in all the fields');
      return false;
    }
    //validate email
    if(!this.validateService.validateEmail(user.email)) {
      //this.flashMessage.show('Invalid email address', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Invalid email address');
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        console.log('You are now registered!');
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong...');
        this.router.navigate(['/register']);
      }


    })

  }
}
