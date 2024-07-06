import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-maps',
  templateUrl: './mini-maps.component.html',
  styleUrl: './mini-maps.component.css'
})
export class MiniMapsComponent implements AfterViewInit{

  @Input()
  public lngLat?: [number, number]

  public map?: Map

  @ViewChild('map')
  public divMap?: ElementRef

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El elemento HTML no fue encontrado'

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new Marker()
    .setLngLat(this.lngLat!)
    .addTo(this.map)
  }
}
