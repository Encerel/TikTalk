import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../helpers/routes/api-routes';
import { tap } from 'rxjs';
import { SignInResponse } from './auth.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ACCESS_TOKEN = 'access_token';
  private readonly REFRESH_TOKEN = 'refresh_token';

  http = inject(HttpClient);
  cookieService = inject(CookieService);

  accessToken: string | null = null;
  refreshToken: string | null = null;

  login(payload: { username: string; password: string }) {
    let formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    console.log(API_ROUTES.LOGIN);
    return this.http.post<SignInResponse>(API_ROUTES.LOGIN, formData).pipe(
      tap((val) => {
        console.log(val);
        this.accessToken = val.access_token;
        this.refreshToken = val.refresh_token;

        this.cookieService.set(this.ACCESS_TOKEN, this.accessToken);
        this.cookieService.set(this.REFRESH_TOKEN, this.refreshToken);
      }),
    );
  }

  isAuth() {
    let cookieToken: string | null = null;
    if (!this.accessToken) {
      cookieToken = this.cookieService.get(this.ACCESS_TOKEN);
    }
    return !!this.accessToken || !!cookieToken;
  }
}
