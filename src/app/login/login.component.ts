import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userform = new FormGroup({
    email : new FormControl('',[
      Validators.required
    ],
    ),
    password : new FormControl('',[Validators.required]
    )
  });

  get email(){
    return this.userform.get('email');
  }

  get password(){
    return this.userform.get('password');
  }
  
  login(){
    this.router.navigate(['/home']);
  }

}
