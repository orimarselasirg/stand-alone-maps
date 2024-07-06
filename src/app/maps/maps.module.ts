import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = environment.mapbox_key;

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { environment } from '../../environments/environments';
import { CounterComponent } from '../alone/components/counterAlone/counter/counter.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkerPageComponent,
    MiniMapsComponent,
    PropertyPageComponent,
    ZoomPageComponent,
  ],
  imports: [
    CommonModule,
    CounterComponent,
    MapsRoutingModule,
    SideMenuComponent
  ]
})
export class MapsModule { }
