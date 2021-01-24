import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';
 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {  
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};

  constructor(
    public router: ActivatedRoute,
    public api: ApiService
  ) { }

  ngOnInit() {
    return this.api.getMovieDetails(this.movieId).subscribe((data: {}) => {
      this.MovieDetails = data;
    });
  }
}
