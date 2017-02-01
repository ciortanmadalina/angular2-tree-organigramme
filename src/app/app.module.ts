import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeModule, GrowlModule } from 'primeng/primeng';
import { TreeService } from  './tree.service';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    GrowlModule,
    AppRoutingModule 
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
