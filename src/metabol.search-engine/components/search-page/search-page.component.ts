import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app/app.settings'


@Component({
  selector: 'app-search-page',
  templateUrl: 'search-page.component.html',
  styleUrls: ['search-page.component.css'],
})
export class SearchPageComponent {

  query: string;

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['search-past-analysis', this.query]);
  }

}
