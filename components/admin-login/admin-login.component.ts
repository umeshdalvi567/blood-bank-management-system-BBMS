import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { RegisterServiceService } from 'src/app/register-service.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private ln:RegisterServiceService,private router:Router) { }
   


  ad:Admin = new Admin();
  loginData(){
    console.log(this.ad);
    this.ln.loginadmin(this.ad).subscribe((_data: any)=>{
      alert("logged in successfully!!");
      this.router.navigateByUrl('/navbar2');
    },(_error: any)=>alert("sorry please check email and password"))
  
  }

  ngOnInit(): void {
  }

}
