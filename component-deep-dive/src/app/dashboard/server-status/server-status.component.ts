import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private intervalTimeout?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalTimeout = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5) {
        this.currentStatus.set('online');
      } else if(rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalTimeout);
  }

}
