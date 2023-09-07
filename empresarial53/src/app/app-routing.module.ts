import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderTemplateComponent } from './header-template/header-template.component';

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
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path:"sala",
        loadChildren: () => import("./room-template/room-template.module").then(m => m.RoomTemplateModule)
      },
      {
        path:"sala-nova",
        loadChildren: () => import("./create-room/create-room.module").then(m => m.CreateRoomModule)
      },
      {
        path:"pagamento",
        loadChildren: () => import("./new-payment/new-payment.module").then(m => m.NewPaymentModule)
      },
      {
        path:"manutencao",
        loadChildren: () => import("./new-repair/new-repair.module").then(m => m.NewRepairModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
