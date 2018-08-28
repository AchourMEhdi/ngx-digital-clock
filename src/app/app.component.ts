import * as moment from 'moment';
import { Observable, Subscription, timer } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DAYS_SHORT, DAYS_LONG, CLASS_LIST, WATCH_CONFIG } from './shared/constants/calendar.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public dateTimeObj: any = {};
  // public days: string[] = DAYS_SHORT;
  // public timeFormatList: string[] = [];
  // public subscriptions: Subscription[] = [];

  // constructor() {
  //   this.fetchDateTime();
  // }

  // public ngOnInit(): void {
  //   this.subscriptions.push(
  //     timer(0, 1000)
  //     .subscribe((t) => {
  //       this.fetchDateTime();
  //     })
  //   );
  // }

  // public fetchDateTime(): void {
  //   let now: string[] =  moment().format(WATCH_CONFIG.format).split(' ');

  //   this.dateTimeObj = {};
  //   for ( let i = 0; i < now.length; i++ ) {
  //     this.dateTimeObj[WATCH_CONFIG.keys[i]] = now[i];
  //   }
  //   this.constructWatch();
  // }

  // public constructWatch(): void {
  //   const rawStr: string = this.dateTimeObj.time;

  //   this.timeFormatList = [];
  //   for ( let i = 0; i < rawStr.length; i++ ) {
  //      if (rawStr[i] === WATCH_CONFIG.parsers.dots) {
  //         this.timeFormatList.push(WATCH_CONFIG.parsers[rawStr[i]]);
  //      } else {
  //         this.timeFormatList.push(CLASS_LIST[+rawStr[i]]);
  //      }
  //   }
  //     console.log(this.dateTimeObj);
  // }

  // public ngOnDestroy(): void {
  //   for (let subscription of this.subscriptions) {
  //     if (!!subscription) {
  //       subscription.unsubscribe();
  //     }
  //   }
  // }
}
