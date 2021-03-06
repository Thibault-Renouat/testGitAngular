import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/planet";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  id:number;
  planete:Planet;
  isLoading: boolean;

  constructor(private route: ActivatedRoute,private planeteService: PlanetService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
/*  ### SANS JSON SERVER ###
    this.planete=this.planeteService.getOnePlanetById(this.id);
*/  this.isLoading = true;
    this.planeteService.getOnePlanetById(+this.route.snapshot.paramMap.get('id')).subscribe((data:Planet)=> {this.planete =data});
    this.isLoading = false;

  }

}
