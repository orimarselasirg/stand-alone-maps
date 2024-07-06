import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItem: MenuItem[] = [
    {route: '/maps/fullscreen-page', name: 'FullScreen'},
    {route: '/maps/zoom-page', name: 'Zoom-Range'},
    {route: '/maps/marker-page', name: 'Marker'},
    {route: '/maps/properties-page', name: 'House'},
    {route: '/alone', name: 'Alone page'},
  ]

}
