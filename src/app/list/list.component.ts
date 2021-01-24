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
  searchQuery = '';
  timer = null;
  noResult = false;

  constructor(public api: ApiService) {
    this.apiResponse = [];
   }

  ngOnInit(): void {
    this.api.getAllMovies().subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }

  searchMovie(searchStr: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.Movies = this.apiResponse;
        return;
      }
      this.api.searchMovie(searchStr).subscribe((data: {
        total_results: number;
      }) => {
        this.noResult = false;
        if (data.total_results === 0) {
          this.Movies = [];
          this.noResult = true;
          return;
        }
        this.Movies = data;
      });
    }, 250);
  }
}
