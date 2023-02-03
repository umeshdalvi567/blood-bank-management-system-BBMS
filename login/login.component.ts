import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';
import { User } from 'src/app/user';



  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ln:RegisterServiceService,private router:Router) { }
   


  us:User = new User();
  loginData(){
    console.log(this.us);
    this.ln.loginuser(this.us).subscribe((_data: any)=>{
      alert("logged in successfully!!");
      this.router.navigateByUrl('/navbar1');
      
    },(_error: any)=>alert("please enter correct email id and password"))
  
  }
    

  ngOnInit(): void {
    
  }
    
    }
 
 
  
 
   
