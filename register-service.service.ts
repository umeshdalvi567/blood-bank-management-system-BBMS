import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
 
  

  constructor(private http:HttpClient) { }
 
  



  url="http://localhost:9091/save";
  insertRegisters(data:any){
    return this.http.post(this.url,data);
  }

   
  // url1="http://localhost:9091/registers";
  // viewRegisters(){
  //   return this.http.get(this.url1);
  // }

  url2="http://localhost:9091/login";
  loginuser(us:User):Observable<object>{
    console.log(us);
     return this.http.post(this.url2,us);
   }






  url3="http://localhost:9091/save1";
  insertDonor(data:any){
    return this.http.post(this.url3,data);
  }


  url4="http://localhost:9091/donors1";
  viewDonors(){
    return this.http.get(this.url4);
  }


url5="http://localhost:9091/update1";
updateService(data:any){
    return this.http.put(this.url5,data);
   
  }

  url6="http://localhost:9091/delete1";
  deleteService(data:any){
    return this.http.post(this.url6,data);
  }

  url9="http://localhost:9091/view1";
  searchDonor(data:any){
    return this.http.post(this.url9,data);
  }




  url7="http://localhost:9091/save2";
  insertAdmins(data:any){
    return this.http.post(this.url7,data);
  }

  url8="http://localhost:9091/login2";
  loginadmin(us:Admin):Observable<object>{
    console.log(us);
     return this.http.post(this.url8,us);
   }


   url1="http://localhost:9091/donors1";
  viewAdmins(){
    return this.http.get(this.url9);
  }


  url10="http://localhost:9091/delete1";
  deleteAdmins(data:any){
    return this.http.post(this.url10,data);
  }
}