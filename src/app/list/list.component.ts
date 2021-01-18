import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Movies: any = [];
  apiResponse: any;

  constructor(public api: ApiService) {
    this.apiResponse = [];
   }

  ngOnInit(): void {
    this.api.getAllMovies().subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }

}
