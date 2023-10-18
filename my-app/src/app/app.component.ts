import { Component } from '@angular/core';
import { EmpInfo } from './EmpInfo';
// import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  // housingLocationList: EmpInfo[] = [
  //   {
  //     id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: `bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: 'A113 Transitional Housing',
  //     city: 'Santa Monica',
  //     state: 'CA',
  //     photo: `/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
  //     availableUnits: 0,
  //     wifi: false,
  //     laundry: true
  //   }
  // ]
}
