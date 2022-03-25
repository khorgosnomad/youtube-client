import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import SearchComponent from './components/search/search.component';
import HeaderComponent from './components/header/header.component';
import BtnFilterComponent from './components/btn-filter/btn-filter.component';
import LoginMenuComponent from './components/login-menu/login-menu.component';
import BodyMainComponent from './components/body-main/body-main.component';
import VideoCardComponent from './components/video-card/video-card.component';
import VideoPageComponent from './components/video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    BtnFilterComponent,
    LoginMenuComponent,
    BodyMainComponent,
    VideoCardComponent,
    VideoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
