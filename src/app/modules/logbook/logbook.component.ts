import { Component, OnInit } from '@angular/core';

import { LogbookService } from './logbook.service';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
})
export class LogbookComponent implements OnInit {

  public name = 'Logbook';
  public logs = [ 5, 7, 9, 12, 17, 21092 ];

  constructor(private logbookService: LogbookService) { }

  ngOnInit() {
    console.log('––> logbook');

    this.logbookService.getTest().subscribe(data => {
      this.name += ` ${data}`;
    });
  }

}
