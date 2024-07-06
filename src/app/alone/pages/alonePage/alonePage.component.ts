import { CounterComponent } from './../../components/counterAlone/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  // selector: 'app-alone-page',
  standalone: true,
  imports: [CounterComponent, SideMenuComponent],
  templateUrl: './alonePage.component.html',
  styleUrl: './alonePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {

 }
