import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-view-all-donors',
  templateUrl: './view-all-donors.component.html',
  styleUrls: ['./view-all-donors.component.css']
})
export class ViewAllDonorsComponent implements OnInit {


  constructor(private ps:RegisterServiceService) {
    this.viewDonors();
   }
 
   donors:any;
   viewDonors(){
    this.ps.viewDonors().subscribe((resp:any)=>{this.donors=resp});
   }






  ngOnInit(): void {
  }

}
