import {Component} from '@angular/core';

const CURRENT_USER_URL = 'https://67631c3b17ec5852cae82142.mockapi.io/api/currentUser';
const USER_FAVORITE_BOOKS_URL = 'https://67631c3b17ec5852cae82142.mockapi.io/api/usersFavoriteBooks/*userId*';
const PUBLISHING_COMPANIES_URL = 'https://67631c3b17ec5852cae82142.mockapi.io/api/publishingCompanies';
const AUTH_URL = 'https://67631c3b17ec5852cae82142.mockapi.io/api/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [],
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
