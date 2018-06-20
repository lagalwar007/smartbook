import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movies:MoviesProvider) {
    let movieid = navParams.get('id');
    this.movies.getMoviesDetails(movieid,['videos']).subscribe( (movies) => {
      console.log('movies',movies);

    },(error) => console.log(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
