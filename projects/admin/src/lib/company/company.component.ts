import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { UpdateCompanyComponent } from '../update-company/update-company.component';
import { AdminService } from '../admin.service';
import { ShowEmployeesComponent } from '../show-employees/show-employees.component';

@Component({
  selector: 'lib-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'email',
    'location',
    'since',
    'ceo',
    'empCount',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.getHotelList();
  }

  hotelRegister() {
    const dialogRef = this.dialog.open(UpdateCompanyComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }

  getHotelList() {
    this.service.getCompany().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteHotel(id: number) {
    this.service.deleteCompany(id).subscribe({
      next: (res:any) => {
        this.toastr.success("Hotel Deleted !!");
        this.getHotelList();
      },
      error: console.log,
    })
  }

  openHotelForm(data: any) {
    const dialogRef = this.dialog.open(UpdateCompanyComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }

  openTable(data:any){
    const dialogRef = this.dialog.open(ShowEmployeesComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }
}
