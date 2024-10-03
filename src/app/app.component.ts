import { Component } from '@angular/core';
import { SportEventFormComponent } from './features/sport-event-form/sport-event-form.component';
import { EventListComponent } from './features/event-list/event-list.component';
import { MusicEventFormComponent } from './features/music-event-form/music-event-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="flex flex-col w-3/6" style="margin: 0 auto;">
    <h1 class="text-center">Управление мероприятиями</h1>
    <app-sport-event-form></app-sport-event-form>
    <app-music-event-form></app-music-event-form>
    <app-event-list></app-event-list>
  </div>
  `,
  imports: [SportEventFormComponent, MusicEventFormComponent, EventListComponent]
})
export class AppComponent {}
