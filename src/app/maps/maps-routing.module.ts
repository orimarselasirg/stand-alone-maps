import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      { path: 'fullscreen-page', component: FullScreenPageComponent },
      { path: 'marker-page', component: MarkerPageComponent },
      { path: 'properties-page', component: PropertyPageComponent },
      { path: 'zoom-page', component: ZoomPageComponent },
      { path: '**', redirectTo: 'fullscreen-page' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
