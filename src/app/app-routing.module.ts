import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ServicesComponent } from './modules/services/services.component';
import { PriceComponent } from './modules/price/price.component';
import { ContactComponent } from './modules/contact/contact.component';
import { NgModule } from '@angular/core';




const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "price",
        component: PriceComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}