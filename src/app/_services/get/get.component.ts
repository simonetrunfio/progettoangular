import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
@Injectable()
export class GetComponent implements OnInit {

  baseUrl = "https://eataly-loyalty-be-staging.housing.tomato.it/v1/reserved-customer/";

  constructor(private http: HttpClient) { }

  getCustomer(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`)
  }

  ngOnInit(): void {
  }
}
