import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/event.service';
import { MatButton } from '@angular/material/button';
import { EventTypeTranslatePipe } from '../../shared/pipes/event-type-translate.pipe';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, MatButton, EventTypeTranslatePipe],
  template: `
    <table class="w-full border border-gray-300">
  <thead>
    <tr class="bg-gray-100 border-b">
      <th class="border px-4 py-2">Название</th>
      <th class="border px-4 py-2">Описание</th>
      <th class="border px-4 py-2">Место проведения</th>
      <th class="border px-4 py-2">Тип мероприятия</th>
      <th class="border px-4 py-2">Действия</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let event of events(); let i = index" class="hover:bg-gray-50">
      <td class="border px-4 py-2 text-center">{{ event.title }}</td>
      <td class="border px-4 py-2 text-center truncate max-w-52" title="{{ event.description }}">{{ event.description }}</td>
      <td class="border px-4 py-2 text-center">{{ event.location }}</td>
      <td class="border px-4 py-2 text-center">{{ event.type | eventTypeTranslate }}</td>
      <td class="border px-4 py-2 text-center">
        <button mat-raised-button color="primary" (click)="deleteEvent(i)">Удалить</button>
      </td>
    </tr>
  </tbody>
</table>

  `
})
export class EventListComponent {
  events = this.eventService.events;

  constructor(private readonly eventService: EventService) {}

  deleteEvent(index: number) {
    this.eventService.deleteEvent(index);
  }
}
