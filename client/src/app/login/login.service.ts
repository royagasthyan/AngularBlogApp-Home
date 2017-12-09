import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

	constructor(private http: HttpClient){

	}
	
	validateLogin(user: User){
		return this.http.post('/api/user/login',{
			username : user.username,
			password : user.password
		})
	}

}