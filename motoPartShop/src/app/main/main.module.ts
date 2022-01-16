import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      { path: 'main', component: MainPageComponent },
      { path: 'products', component: ProductsComponent },
];

@NgModule({
  declarations: [MainPageComponent, ProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MainModule {}
