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
        path:"sala:?",
        loadChildren: () => import("./room-template/room-template.module").then(m => m.RoomTemplateModule)
      },
      {
        path:"locatario",
        loadChildren: () => import("./tenant/tenant.module").then(m => m.TenantModule)
      },
      {
        path:"pagamento",
        loadChildren: () => import("./payment/payment.module").then(m => m.PaymentModule)
      },
      {
        path:"manutencao",
        loadChildren: () => import("./repair/repair.module").then(m => m.RepairModule)
      },
      {
        path:"login",
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
      },
      {
        path:"empresarial53",
        loadChildren: () => import("./building/building.module").then(m => m.BuildingModule)
      },
      {
        path:"novo-contrato",
        loadChildren: () => import("./contract-generator/contract-generator.module").then(m => m.ContractGeneratorModule)
      },
      {
        path:"lista-locatarios",
        loadChildren: () => import("./tenants-list/tenants-list.module").then(m => m.TenantsListModule)
      },
      {
        path:"lista-pagamentos",
        loadChildren: () => import("./payments-list/payments-list.module").then(m => m.PaymentsListModule)
      },
      {
        path:"lista-manutencoes",
        loadChildren: () => import("./repairs-list/repairs-list.module").then(m => m.RepairsListModule)
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
