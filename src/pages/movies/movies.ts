import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html'
})
export class MoviesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movies:MoviesProvider){
  }

  ionViewDidLoad() {
    // this.movies.getConfiguration().subscribe( (res) => {
    //   console.log('res',res);
    // },( error ) => {
    //   console.log('error',error);
    // })
  }

}
