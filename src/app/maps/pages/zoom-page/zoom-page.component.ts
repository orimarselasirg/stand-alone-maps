import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Map } from 'mapbox-gl';

@Component({
  // selector: 'app-zoom-page',
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map')
  public divMap?: ElementRef

  public currentZoom: number = 10

  public map?: Map

  public lngLat: LngLat = new LngLat(-75.6083171089623, 6.175557346631379)

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El elemento HTML no fue encontrado'


  this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });
    this.mapListener()
  }

  mapListener(){
    if(!this.map) throw ('Mapa no inicializado')
    this.map.on('zoom', (e) => {
      this.currentZoom = this.map!.getZoom()
    })

    this.map.on('zoom', (e) => {
      if(this.map!.getZoom() < 18) return
      this.map!.zoomTo(18)
    })

    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter()
    })
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }

  zoomIn(){
    this.map!.zoomIn()

  }

  zoomOut(){
    this.map!.zoomOut()
  }

  zoomChange(value: string){
    this.currentZoom = Number(value)
    this.map!.zoomTo(this.currentZoom)
  }
}
