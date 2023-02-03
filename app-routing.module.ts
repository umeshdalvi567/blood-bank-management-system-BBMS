import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DonateBloodComponent } from './components/donate-blood/donate-blood.component';
import { DonorLocationComponent } from './components/donor-location/donor-location.component';

import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { SingleBlogpostComponent } from './components/single-blogpost/single-blogpost.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';

import { Addnew1Component } from './components/addnew1/addnew1.component';
import { ViewAllDonorsComponent } from './view-all-donors/view-all-donors.component';
import { DeletedonorComponent } from './components/deletedonor/deletedonor.component';
import { UpdatedonorComponent } from './components/updatedonor/updatedonor.component';
import { AdminRegiComponent } from './components/admin-regi/admin-regi.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SearchIdComponent } from './components/search-id/search-id.component';
import { Logout1Component } from './components/logout1/logout1.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { ViewAllAdminsComponent } from './components/view-all-admins/view-all-admins.component';
import { DeleteadminComponent } from './components/deleteadmin/deleteadmin.component';

const routes: Routes = [
  {path:"about-us",component:AboutUsComponent},
  {path:"appointment",component:AppointmentComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"donate",component:DonateBloodComponent},
  {path:"donate-blood",component:DonateBloodComponent},
  {path:"donor-location",component:DonorLocationComponent},
 
  {path:"services",component:ServicesComponent},
  {path:"blog",component:BlogComponent},
  {path:"single-blogpost",component:SingleBlogpostComponent},
  {path:"home",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"navbar1",component:Navbar1Component},
  {path:"addnew1",component:Addnew1Component},
 
  {path:"view-all-donors",component:ViewAllDonorsComponent},
  {path:"updatedonor",component:UpdatedonorComponent},
  {path:"deletedonor",component:DeletedonorComponent},
  {path:"admin-regi",component:AdminRegiComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"search-id",component:SearchIdComponent},
  {path:"logout1",component:Logout1Component},
  {path:"navbar2",component:Navbar2Component},
  {path:"view-all-admins",component:ViewAllAdminsComponent},
  {path:"deleteadmin",component:DeleteadminComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
