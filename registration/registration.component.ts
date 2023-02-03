import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 

  // submit(login:any){
  //   document.write("form submitted!!!!!!!!!!!!!!!!!!!!!!",login)
  // }

  constructor(private rs:RegisterServiceService,private router :Router) { }
  
submit(registration:any){
 
  this.rs.insertRegisters(registration.value).subscribe();
alert("Registration submitted!!!!!!!!!!!!!!!!!!!!!!");
this.router.navigateByUrl('/login');
}




  ngOnInit(): void {
  }

}
