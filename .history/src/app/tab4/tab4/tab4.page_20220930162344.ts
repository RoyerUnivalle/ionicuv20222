import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllEvents()
    .subscribe(resp =>{
      console.log(resp)
    })
  }

}
