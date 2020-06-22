import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

planet=new Planet();

  constructor(private planetService: PlanetService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log(this.planet)
    this.planetService.addPlanet(this.planet);
    this.router.navigate(['/planets']);
  }
}