import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-view-all-admins',
  templateUrl: './view-all-admins.component.html',
  styleUrls: ['./view-all-admins.component.css']
})
export class ViewAllAdminsComponent implements OnInit {

  
  constructor(private ps:RegisterServiceService) {
    this.viewAdmins();
   }
 
   donors:any;
   viewAdmins(){
    this.ps.viewDonors().subscribe((resp:any)=>{this.donors=resp});
   }


  ngOnInit(): void {
  }

}
