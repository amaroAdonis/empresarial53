import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { PageNotFoundComponent } from './error-page/page-not-found.component';

const routes: Routes = [
  {
    path:"",
    component: HeaderTemplateComponent,
    children: [
      {
        path:"", pathMatch:'full', redirectTo:""
      },
      {
        path:"",
        loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule)
      },
      {
        path:"home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path:"sala/:id",
        loadChildren: () => import("./room-template/room-template.module").then(m => m.RoomTemplateModule)
      },
      {
        path:"locatario-novo",
        loadChildren: () => import("./new-tenant/new-tenant.module").then(m => m.NewTenantModule)
      },
      {
        path:"pagamento",
        loadChildren: () => import("./new-payment/new-payment.module").then(m => m.NewPaymentModule)
      },
      {
        path:"manutencao",
        loadChildren: () => import("./new-repair/new-repair.module").then(m => m.NewRepairModule)
      },
      {
        path:"login",
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
      },
      {
        path:"empresarial53",
        loadChildren: () => import("./building/building.module").then(m => m.BuildingModule)
      }
    ]

  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
