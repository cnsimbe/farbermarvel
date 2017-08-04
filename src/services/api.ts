import { Injectable } from '@angular/core';
import { API_KEY } from "./data"

import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';


let apiRestProtocol = 'https'
let apiRestPath = '/v1/public'
let apiServer = 'gateway.marvel.com:443'



@Injectable()
export class api {
	
	charactersUrl:string = `${apiRestProtocol}://${apiServer}/${apiRestPath}/characters`;
	
    constructor(private http:Http){}


	getCharacters(params):Promise<any> {
		let pq = ''
		params = params || {}
		params['apikey'] = API_KEY
		for(var i in params)
			pq += `${i}=${params[i]}&`
		return this.http.get(`${this.charactersUrl}?${pq}`)
		.toPromise().then(response=>response.json())
		.catch((err)=>console.log(err))
	}

	getComics(characterId:string,params):Promise<any> {
		let pq = ''
		params = params || {}
		params['apikey'] = API_KEY
		for(var i in params)
			pq += `${i}=${params[i]}&`
		return this.http.get(`${this.charactersUrl}/${characterId}/comics?${pq}`)
		.toPromise().then(response=>response.json())
		.catch((err)=>console.log(err))
	}


}


