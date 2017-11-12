import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CatalogComponent} from './catalog/catalog.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NgStyle } from '@angular/common';


const appRoutes:Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'contacts', component: ContactsComponent},
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch: 'full'}

];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CatalogComponent,
        AboutComponent,
        ContactsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
