import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-addnew1',
  templateUrl: './addnew1.component.html',
  styleUrls: ['./addnew1.component.css']
})
export class Addnew1Component implements OnInit {
  // submit(addDonor:any){
  //   document.write("You have successfully added new Donor!!!!!!!!!!!!!!!!!!!!!!",addDonor)
  //  }
   constructor(private rs:RegisterServiceService,private router :Router) { }
   submit(addDonor:any){
    
     this.rs.insertDonor(addDonor.value).subscribe();
   alert("You have successfully added new Donor!!!!!!!!!!!!!!!!!!!!!!");
  
   this.router.navigateByUrl('/navbar1');
   }

  ngOnInit(): void {
  }

}
