import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-deleteadmin',
  templateUrl: './deleteadmin.component.html',
  styleUrls: ['./deleteadmin.component.css']
})
export class DeleteadminComponent implements OnInit {

  constructor(private is:RegisterServiceService,private router:Router) { }
  deleteDonor(del :any){
   this.is.deleteService(del.value).subscribe();
   alert("You have successfully Deleted one Record!!!!!!!!!!!!!!!!!!!!!");
  
   this.router.navigateByUrl('/navbar2');
  }

  ngOnInit(): void {
  }

}
