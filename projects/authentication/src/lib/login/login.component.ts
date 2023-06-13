import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private service: AuthenticationService
  ) { }

  result: any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getUserById(this.loginForm.value.id).subscribe((item:any) => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
          this.router.navigateByUrl('/dashboard');
          this.toastr.success('login Successfull')
        } else if (this.result.password !== this.loginForm.value.password) {
          this.toastr.error("Please check the password", 'Wrong Password')
        }
      })
    } else if (this.loginForm.value) {
      this.toastr.warning("Please Enter Something in fields")
    }
  }
}
