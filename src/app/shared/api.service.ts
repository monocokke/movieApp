import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Movies } from './models/movies';
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
}