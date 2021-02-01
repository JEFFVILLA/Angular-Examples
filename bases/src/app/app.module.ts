import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HunterxhunterModule } from './hunterxhunter/hunterxhunter.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HunterxhunterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
