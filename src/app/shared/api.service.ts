import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Movies } from './models/movies';
import { Details } from './models/details';
import { Trailer } from './models/trailer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    apiURL = Config.apiUrl;

    constructor(private http: HttpClient){ }

    getAllMovies(): Observable<Movies>{
        return this.http.get<Movies>(`${this.apiURL}popular?api_key=${Config.apiKey}`);
    }

    searchMovie(query: string): Observable<Movies> {
        return this.http.get<Movies>(Config.search + query);
    }

    getMovieDetails(id: number): Observable<Details> {
        return this.http.get<Details>(`${this.apiURL}${id}?api_key=${Config.apiKey}`);
    }

    getMovieTrailer(id: number): Observable<Trailer> {
        return this.http.get<Trailer>(`${this.apiURL}${id}/videos?api_key=${Config.apiKey}`);
      }
}