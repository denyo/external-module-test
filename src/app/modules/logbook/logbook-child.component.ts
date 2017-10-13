import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-logbook-child',
  templateUrl: './logbook-child.component.html',
})
export class LogbookChildComponent implements OnInit, OnDestroy {

  private routeSubscription: Subscription;
  public logId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = this.route.params
      .subscribe((params: Params) => {
        this.logId = params['logId'];
        console.log('––> child: ' + this.logId);
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
