import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { configuration } from './../models/configuration.models';
import { Observable } from 'rxjs/Observable';
import { Base } from '../base';


@Injectable()

export class MoviesProvider extends Base{
  private apiToken = '7ba4e549d75cc6874ed15783e49c4c45';
  private baseurl = 'https://api.themoviedb.org/3/';
  private api_configurl = this.baseurl+'configuration';
  private popularmovies = this.baseurl+'movie/popular/';
  private upcommingmovies = this.baseurl+'movie/upcoming/';
  private moviesdetail = this.baseurl + 'movie/';

  constructor(public http: Http) {
    super(http);
    console.log('Hello MoviesProvider Provider');
  }

  getConfiguration():Observable<any>{
    return this.getData<any>(this.concatwithtoken(this.api_configurl)).map( (res:Response) => {
       return res.json();    
    })
  }
  getUpcommingMovies(){
    return this.getData<any>(this.concatwithtoken(this.upcommingmovies)).map( (response) => {
      return response.json();
    })
  }
  getMoviesDetails(id: String, filters?: Array<any>) {
    let url = this.concatwithtoken(this.moviesdetail + id);
    if (typeof filters != 'undefined') {
      url = this.addFilters(url, filters);
    }
    return this.getData<any>(url).map((response) => {
      return response.json();
    })
  }
  private addFilters(url: String, filter: Array<any>) {
    return url + '&append_to_response=' + filter.join(',');
  }
  private concatwithtoken(url:String=''){
   return url.concat('?api_key='+this.apiToken);
  }

}
