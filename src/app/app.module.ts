import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';
import { DropdownlistComponent } from './components/dropdownlist/dropdownlist.component';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { TopComponent } from './components/top/top.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    DropdownlistComponent,
    FlexboxComponent,
    TopComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
