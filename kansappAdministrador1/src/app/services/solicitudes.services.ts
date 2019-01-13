import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { GLOBAL } from "./global";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SolicitudesService {
    public url: String;
    public identity;
    public token;
    public cont = 0;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }


    getSolicitudes(token) {
        let headers = new Headers({ "Content-type": "application/json", "Authorization": token });
        return this._http.get(this.url + "nuevasOfertas", { headers: headers })
            .map(res => res.json());


    }
}