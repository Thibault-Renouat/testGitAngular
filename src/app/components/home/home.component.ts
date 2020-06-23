import { Component, OnInit } from '@angular/core';
import { TextService} from "../../services/text.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public textService: TextService) { }

  ngOnInit(): void {

    console.log(this.textService.myText)

  }

}
