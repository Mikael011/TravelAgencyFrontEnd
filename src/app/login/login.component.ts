import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {UserLoginDto} from "../../model/userLoginDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailValue: string = '';
  passwordValue: string = '';


  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    const userLoginDto: UserLoginDto = {
      email: this.emailValue,
      password: this.passwordValue
    };
    this.userService.login(userLoginDto).subscribe(response => {
      alert('Logged in user');
      this.router.navigate(['/cities'])
    })
  }

}
