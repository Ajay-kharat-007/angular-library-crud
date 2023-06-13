import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthenticationService,
    private toastr: ToastrService 
  ) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    password: this.builder.control('', Validators.required)
  });

  proceedRegister() {
    this.service.addUser(this.registerForm.value).subscribe((res: any) => {
      console.log(res)
      this.router.navigateByUrl('/login')
      this.toastr.success("User registered successfully !!")
    })
  }
}
