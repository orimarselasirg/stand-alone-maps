import mapboxgl, { LngLat, Map, Marker } from 'mapbox-gl';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  // selector: 'app-marker-page',
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.css'
})
export class MarkerPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef

  public map?: Map

  public lngLat: LngLat = new LngLat(-75.6083171089623, 6.175557346631379)

  public markerLists: MarkerAndColor[] = []

  // ngOnInit(): void {
  //   this.loadToLocalStorage()
  // }

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El elemento HTML no fue encontrado'


  this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    this.loadToLocalStorage()
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'PRUEBA'


    // const marker = new Marker({
    //   color: 'red',
    //   element: markerHtml
    // })
    // .setLngLat(this.lngLat)
    // .addTo(this.map)
  }

  createMarker() {
    if( !this.map ) return
    const color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`
    const lngLat = this.map.getCenter()
    this.addMarker(lngLat, color)
  }

  addMarker(lngLat: LngLat, color: string) {
    if( !this.map ) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map)
    this.markerLists.push({color: color, marker: marker})

    marker.on('dragend', () => {
      this.saveToLocalStorage()
    })
  }

  deleteMarker(index: number) {
    this.markerLists[index].marker.remove()
    this.markerLists = this.markerLists.filter((marker, i) => i !== index)
    this.saveToLocalStorage()

  }

  flyTo(marker: Marker){
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
     const plainMarker: PlainMarker[] = this.markerLists.map(({marker, color}) =>{
      return {
        color: color,
        lngLat: marker.getLngLat().toArray()
      }
     })
     localStorage.setItem('plainMarkers', JSON.stringify(plainMarker))
  }

  loadToLocalStorage(){
    const plainMarkers = localStorage.getItem('plainMarkers')
    if(!plainMarkers) return
    const plainMarkersParse: PlainMarker[] = JSON.parse(plainMarkers)
    plainMarkersParse.forEach(({color,lngLat}) => {
      const [lng, lat] = lngLat
      const coord = new LngLat(lng, lat)
      this.addMarker(coord, color)
    })
  }
}
