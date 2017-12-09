import {Component, OnInit} from '@angular/core';
import {ApiService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service: ApiService){}

  ngOnInit(): void {
    console.log("da")
    // this.service.get('/api/delete').subscribe(data => {
    //   console.log(data);
    // })

    this.service.get('/api/test/a').subscribe(data => {
      console.log(data);
    })
  }
  title = 'app works!';
}
