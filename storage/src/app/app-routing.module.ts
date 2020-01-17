import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ActiveGuard } from './active.guard';
import { LogoutComponent } from './logout/logout.component';
import { DeactivateGuard } from './deactivate.guard';
import { CompanyComponent } from './company/company.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CanactivatechildGuard } from './canactivatechild.guard';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'company', component:CompanyComponent, canActivateChild:[CanactivatechildGuard], 
    children:[
      {path:'company-detail', component:CompanydetailsComponent}
    ]
  },

  {path:'admin', component:AdminComponent, canActivate:[ActiveGuard]},
  {path:'logout', component:LogoutComponent, canDeactivate:[DeactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
