import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MoviesPage } from '../movies/movies';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MoviesPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
