import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'lib-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {
  hotelForm: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private service: AdminService,
    private toastr : ToastrService,
    private dialog: MatDialogRef<UpdateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
  ){
    this.hotelForm = this.builder.group({
      id : '',
      name : '',
      phone : '',
      email : '',
      location : '',
      since : '',
      ceo : '',
      empCount : ''
    })
  }

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data)
  }

  hotelRegistr(){
    if(this.hotelForm.valid) {
      if(this.data){
        this.service.updateCompany(this.data.id, this.hotelForm.value).subscribe({
          next: (val:any) => {
            this.toastr.success('Company Detail Updated Successfully !!');
            this.dialog.close(true);
  
          },
          error: (err:any)=>{
            this.toastr.error("some error occurred")
          }
        })
      }else {
        console.log(this.hotelForm.value)
      this.service.addCompany(this.hotelForm.value).subscribe({
        next: (val:any) => {
          this.toastr.success('Company Registration Successfull', "Congratulations!!");
          this.dialog.close(true);

        },
        error: (err:any)=>{
          this.toastr.error("some error occurred")
        }
      })
      }
    }
      
  }

  closeDialog(){
    this.dialog.close();
  }
}
