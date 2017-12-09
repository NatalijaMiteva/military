import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    test: Date = new Date();

    constructor(private api: ApiService) {
    }

    ngOnInit() {
    }

    a() {
        console.log("here")
        this.api.get('/api/test').subscribe(data => {
            console.log(data);
            this.api.get('/api/test/a').subscribe(data1 => {
                console.log(data1)
            })
        })
    }

}
