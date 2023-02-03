import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';

@Component({
  selector: 'app-updatedonor',
  templateUrl: './updatedonor.component.html',
  styleUrls: ['./updatedonor.component.css']
})
export class UpdatedonorComponent implements OnInit {

  constructor(private is:RegisterServiceService,private router:Router) { }
  submit(update1:any){
    this.is.updateService(update1.value).subscribe();
    alert("you have successfully updated");
    this.router.navigateByUrl('/navbar1');
  }

  ngOnInit(): void {
  }

}
