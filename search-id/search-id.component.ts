import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/register-service.service';


@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {
  constructor(private ps:RegisterServiceService) { }
  donors:any;
  searchId(data:any){
   this.ps.searchDonor(data.value).subscribe((resp:any)=>{this.donors=resp});
  console.log(this.donors)
  }

  ngOnInit(): void {
  }

}
