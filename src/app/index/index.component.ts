import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor(private service: RequestsService) {

  }

  ngOnInit(): void {
  }

  create() {

    this.service.createOrder().subscribe(data => {
      window.location.href = data.links[1]?.href;

    });
  }
  
}