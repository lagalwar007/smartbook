import { DetailsPage } from './../details/details';
import { Observable } from 'rxjs/Observable';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers:[MoviesProvider]
})
export class MoviesPage {

  public mymovies;
  public baseurl;
  public catmovies:String = 'gear';
  public img_size = 'w300';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movies:MoviesProvider,
    public storage: Storage){
<<<<<<< HEAD
    this.storage.get('img_base').then( (val) => {
      if(!val){
        this.movies.getConfiguration().subscribe((res) => {
          this.storage.set('img_base', res.images.base_url).then((res) => {
            this.baseurl = res;
          })
        })
      }else{
        this.baseurl = val;
      }
    }).catch( (err) => {
     console.log('get base_url',err)
    }); 
    this.storage.get('upcommingmovies').then( (movies) => {
      if(!movies){
        this.movies.getUpcommingMovies().subscribe((res) => {
          console.log('storage upcommingmovies not found',res)
          this.upcommingmovies = this.moviesArrange(res.results);
          this.storage.set('upcommingmovies', res);
=======
    this.storage.get('config').then( (config) => {
      if(!config){
        this.movies.getConfiguration().subscribe( (config) => {
          this.storage.set('config', config);
          this.baseurl = config.images.base_url;
        })
      }else{
        this.baseurl = config.images.base_url;
      }  
    }).catch((err) => {
     console.log(err);
    }); 
    console.log(this.storage.forEach((v,i)=> console.log('value',v,'index',i)));
    this.storage.get('upcommingmovies').then((upcommovies) => {
      if (!upcommovies){
        this.movies.getUpcommingMovies().subscribe((upcommovies) => {
          this.storage.set('upcommingmovies', upcommovies);
          this.mymovies = this.moviesArrange(upcommovies.results);
>>>>>>> 7cb88c50b9367b276d4c8f20da0553462d5032b0
        }, (error) => {
          console.log(error);
        })
      }else{
<<<<<<< HEAD
        console.log('storage upcommingmovies found',this.moviesArrange(movies));
        this.upcommingmovies = this.moviesArrange(movies.results);
=======
        this.mymovies = this.moviesArrange(upcommovies.results);
>>>>>>> 7cb88c50b9367b276d4c8f20da0553462d5032b0
      }
    }).catch( (err) => {
      console.log('movies not found',err);
    })
  }
<<<<<<< HEAD
  getMoviesDetail(movieId: String) {
    console.log('movie',movieId);
    this.navCtrl.push(DetailsPage,{ id: movieId },{animate: true, direction: 'forward', animation: 'wp-transition', duration: 500});
=======
  upcommingMovies(){
    this.storage.get('upcommingmovies').then((upcomming) => {
      this.mymovies = this.moviesArrange(upcomming.results);
    })
  }
  popularMovies(){
    this.storage.get('popularmovies').then((popularMovies) => {
      if (!popularMovies){
        this.movies.getPopularMovies().subscribe((popularMovies) => {
          console.log('popularMovies', popularMovies);
          this.storage.set('popularmovies', popularMovies);
          this.mymovies = this.moviesArrange(popularMovies.results);
        }, (error) => {
          console.log(error);
        })
      }else{
        this.mymovies = this.moviesArrange(popularMovies.results);
      }
    })
  }
  getMoviesDetail(movieId:String){
    this.navCtrl.push(DetailsPage,{id:movieId});
>>>>>>> 7cb88c50b9367b276d4c8f20da0553462d5032b0
  }
  public moviesArrange(Arr:Array<any>){
    //console.log('movies', Arr, 'baseurl',this.baseurl);
    console.log(Arr);
    return Arr.map((val) => {
      return {
        'img': this.baseurl + this.img_size + val['poster_path'],
        'id': val['id'],
        'title': val['original_title'],
        'vote': val['vote_count'],
        'language': val['original_language'],
        'overview': val['overview'],
        'popularity': val['popularity'],
        'date': val['release_date'],
      }
    })
  }

  ionViewDidLoad() {
  // this.storage.get('img_base').then( data => console.log('img_base',data) ).catch( () => {
  //   this.movies.getConfiguration().subscribe( (res) => {
  //     console.log('res',res.images.base_url);
  //     this.storage.set('img_base', res.images.base_url).then( 
  //       () => {
  //         console.log('set');
  //         this.baseurl = res.images.base_url;
  //         }).catch( 
  //         (err) => console.log(err)
  //       );
  //   },( error ) => {
  //     console.log('error',error);
  //   })
  // });
 
}

}
