import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { CpsService } from './cps.service';


const routes: Routes = [
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    data:{preload:true} 
  },
  { 
    path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    outlet: 'order'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy:PreloadAllModules
    preloadingStrategy:CpsService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
