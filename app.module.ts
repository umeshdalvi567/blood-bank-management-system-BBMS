import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DonateBloodComponent } from './components/donate-blood/donate-blood.component';
import { DonorLocationComponent } from './components/donor-location/donor-location.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ServicesComponent } from './components/services/services.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DonateComponent } from './components/donate/donate.component';

import { BlogComponent } from './components/blog/blog.component';
import { SingleBlogpostComponent } from './components/single-blogpost/single-blogpost.component';
import { NavbarComponent } from './components/mainnavbar/navbar.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ALLCODEComponent } from './allcode/allcode.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { Navbar1Component } from './components/navbar1/navbar1.component'; 
import { Addnew1Component } from './components/addnew1/addnew1.component'; 



import { ViewAllDonorsComponent } from './view-all-donors/view-all-donors.component';
import { DeletedonorComponent } from './components/deletedonor/deletedonor.component';

import { UpdatedonorComponent } from './components/updatedonor/updatedonor.component';
import { AdminRegiComponent } from './components/admin-regi/admin-regi.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SearchIdComponent } from './components/search-id/search-id.component';
import { Logout1Component } from './components/logout1/logout1.component';
import { DeleteadminComponent } from './components/deleteadmin/deleteadmin.component';
import { ViewAllAdminsComponent } from './components/view-all-admins/view-all-admins.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateBloodComponent,
    DonorLocationComponent,
    AppointmentComponent,
    ServicesComponent,
    SupportUsComponent,
    AboutUsComponent,
    ContactsComponent,
    DonateComponent,
  
    BlogComponent,
    SingleBlogpostComponent,
    NavbarComponent,
    RegistrationComponent,
    ALLCODEComponent,
    LoginComponent,
    Navbar1Component,
    Addnew1Component,
    ViewAllDonorsComponent,
   
  
    DeletedonorComponent,
   
    UpdatedonorComponent,
    AdminRegiComponent,
    AdminLoginComponent,
    Navbar2Component,
    SearchIdComponent,
    Logout1Component,
    DeleteadminComponent,
    ViewAllAdminsComponent,
   
   
   
 
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
