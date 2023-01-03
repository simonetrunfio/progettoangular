import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  baseUrl = "https://eataly-loyalty-be-staging.housing.tomato.it/v1/reserved-customer/";

  constructor(private http: HttpClient) { }

  deleteCustomer(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`)
  }

  ngOnInit(): void {
  }

}
