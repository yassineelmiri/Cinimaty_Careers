import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
//Reactive X
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8080/auth/realms/fullcycle/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: '70db989b-0305-432d-8a2b-045cf2d85691',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
//auth0 - jsonwebtoken

// client_id=nest
// &client_secret=70db989b-0305-432d-8a2b-045cf2d85691
// &grant_type=password
// &username=user1@user.com
// &password=123456
