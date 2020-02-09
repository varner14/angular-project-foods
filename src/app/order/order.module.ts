import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { OrderItensComponent } from "./order-itens/order-itens.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { SharedModule } from "app/shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [{ path: "", component: OrderComponent }];

@NgModule({
  declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
