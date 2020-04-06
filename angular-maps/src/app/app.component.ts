import { Component } from '@angular/core';
import {point} from '../models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;
  lng: number = 9.190766;
  ltcasa : number = 45.520435;
  lncasa : number = 9.170989;
  latpalm: number = 45.580914;
  lngpalm: number = 9.197025;
  latsun: number = 45.503044;
  lngsun: number = 9.192909;
  lattast: number = 45.525691;
  lngtast: number = 9.199819;
  icon =  {
    url:'./assets/img/cat_acrobat.ico',
         scaledSize: {
      width: 50,
      height: 50
    }
  };
 icon2 =  {
    url:'./assets/img/palm.ico',
         scaledSize: {
      width: 50,
      height: 50
    }
  };
 icon3 =  {
    url:'./assets/img/sun.ico',
         scaledSize: {
      width: 50,
      height: 50
    }
  };
 icon4 =  {
    url:'./assets/img/tast.ico',
         scaledSize: {
      width: 50,
      height: 50
    }
  };

    triangle: Array<point> =
  [

    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

   rectangle: Array<point> =
  [
    {lng:9.1, lat:45.6},
    {lng:9.2, lat:45.6},
    {lng:9.2, lat:45.4},
    {lng:9.1, lat:45.4}



  ]
}
