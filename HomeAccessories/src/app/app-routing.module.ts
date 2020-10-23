import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineAll } from 'rxjs-compat/operator/combineAll';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'search',
    component: SearchComponent
  },
  // { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
