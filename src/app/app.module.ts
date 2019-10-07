import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import {ChartsModule} from 'ng2-charts';
import { BubbleChartComponent } from './page-one/bubble-chart/bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PageOneComponent,
    PageTwoComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
