import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
 
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(
    private http: HttpClient
  ) { }
  findAllContract(): Observable<any>{ 
    return this.http.get<any>('api/contract', { 'headers': headers })
  }

  createContract(data: object): Observable<any> {
    return this.http.post<any>('api/contract', data, { 'headers': headers })
  }

  updateContract(id:number, data: any): Observable<any> {
    
    return this.http.put<any>(`api/contract/${id}`, data, { 'headers': headers })
  }

  deleteContract(id: number):Observable<any> {
    return this.http.delete<any>(`api/contract/${id}`, { 'headers': headers })
  }
}
