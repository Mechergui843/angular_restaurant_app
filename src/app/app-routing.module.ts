import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//lazy loading
const routes: Routes = [
  {path:'client',loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule)},
  {path:'produit',loadChildren:()=>import('./produit/produit.module').then(m=>m.ProduitModule)},
  {path:'commande',loadChildren:()=>import('./commande/commande.module').then(m=>m.CommandeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
