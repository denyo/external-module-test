import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LogbookService {

  constructor(private http: HttpClient) {}

  public getTest(): Observable<string> {
    return Observable.of('test');
  }

}
