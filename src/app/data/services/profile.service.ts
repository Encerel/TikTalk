import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile.interface';
import { BASE_URL } from '../../helpers/routes/api-routes';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getTestAccounts() {
    return this.http.get<Profile[]>(`${BASE_URL}/account/test_accounts`);
  }
}
