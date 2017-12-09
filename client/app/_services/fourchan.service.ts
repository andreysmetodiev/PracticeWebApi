import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';

@Injectable()
export class FourChanService {
    constructor(private http: Http, private config: AppConfig){}
    
    getBoards()
    {
        let path = this.config.fourChanApiUrl + 'boards.json';
        let httpHeaders = new Headers();
        httpHeaders.append('Origin', 'http://boards.4chan.org');
        let options = new RequestOptions({headers: httpHeaders});
        
        return this.http.get(path, options);
        //return this.http.get(path).map((response: Response) => response.json());
    }
}