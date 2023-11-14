import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  minutes: number = 0;
  seconds: number = 0;
  timer: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
    }, 1000);
  }

  stopTimer() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.timer);
  }

  setTimer() {
    this.clearTimer();
    // Hier können Sie die Zeit nach Bedarf einstellen
    this.minutes = 0;
    this.seconds = 0;
  }
}