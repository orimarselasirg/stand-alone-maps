import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  // selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El elemento HTML no fue encontrado'


    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
