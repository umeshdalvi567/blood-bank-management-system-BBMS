import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-admin-regi',
  templateUrl: './admin-regi.component.html',
  styleUrls: ['./admin-regi.component.css']
})
export class AdminRegiComponent implements OnInit {

  constructor(private rs:RegisterServiceService,private router :Router) { }
  
submit(adminreg:any){
 
  this.rs.insertAdmins(adminreg.value).subscribe();
alert("Admins Registration submitted!!!!!!!!!!!!!!!!!!!!!!");
this.router.navigateByUrl('/admin-login');
}

  ngOnInit(): void {
  }

}
