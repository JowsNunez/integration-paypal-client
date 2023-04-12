import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create () {

    fetch("http://localhost:5000/payment/createOrder",{method:"POST",headers:{
      'Content-Type': 'application/json'
   }}).then(res =>{
    return res.json()
   }).then(data =>{
     
    
     window.location.href=data.links[1]?.href
   })
   

   

 }


}
