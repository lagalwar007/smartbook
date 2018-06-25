import { MoviesPage } from './../movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public movieselected;
  public baseurl;
  public img_size = 'w500';
  public mystyle; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movies: MoviesProvider,
              private storage:Storage){}

  ionViewWillEnter() {
    console.log('ionViewDidLoad DetailsPage');
    let movieid = this.navParams.get('id');
    this.storage.get('img_base').then((val) => {
      if(val) this.baseurl = val
    })
    this.storage.get('upcommingmovies').then((selected: Array<any>) => {
      if (selected) {
       let mymoviearr = selected.filter((val,index)=>{
         if(val.id == movieid) return val;
       })
        this.movieselected = this.moviesArrange(mymoviearr);
        this.mystyle = {
          'background': 'linear-gradient(180deg, rgba(0, 0, 0, 0.98) 1.48%, rgba(3, 62, 119, 0.68) 12.52%, rgb(210, 17, 83) 89.52%),url(' + this.movieselected[0].img +')center center / cover no-repeat'
        }
        console.log(this.mystyle)
      }else{
        console.log('storage error');
      }
    }, error => console.log('upcom', error))
  }
  goBack(){
    console.log('this clcik');
    this.navCtrl.pop({ animate: true, direction: 'forward', animation: 'wp-transition', duration: 500});
  }
  public moviesArrange(Arr: Array<any>) {
    return Arr.map((val) => {
      return ({
        'img': this.baseurl + this.img_size + val['poster_path'],
        'id': val['id'],
        'title': val['original_title'],
        'vote': val['vote_count'],
        'language': val['original_language'],
        'overview': val['overview'],
        'popularity': val['popularity'],
        'date': val['release_date'],
      })
    })
  }
  selectedMovie(id:Number){
    return this.storage.get('upcommingmovies').then((selected:Array<any>) => {
      selected.filter( (val,index,arr)=>{
        console.assert(val.id==id,'Match');
        val.id==id;
      })
    }, error => console.log('upcom', error))
  }

}
