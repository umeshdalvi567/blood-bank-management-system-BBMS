import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-deletedonor',
  templateUrl: './deletedonor.component.html',
  styleUrls: ['./deletedonor.component.css']
})
export class DeletedonorComponent implements OnInit {

  constructor(private is:RegisterServiceService,private router:Router) { }
  deleteDonor(del :any){
   this.is.deleteService(del.value).subscribe();
   alert("You have successfully Deleted one Record!!!!!!!!!!!!!!!!!!!!!");
  
   this.router.navigateByUrl('/navbar1');
  }
  ngOnInit(): void {
  }

}
