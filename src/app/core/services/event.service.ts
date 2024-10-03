import { Injectable, signal } from '@angular/core';
import { IEvent } from '../../models/interfaces/event.interface';

@Injectable({ providedIn: 'root' })
export class EventService {
  private eventList = signal<IEvent[]>([]);

  get events() {
    return this.eventList.asReadonly();
  }

  addEvent(newEvent: IEvent) {
    this.eventList.set([...this.eventList(), newEvent]);
  }

  updateEvent(index: number, updatedEvent: IEvent) {
    const updatedList = [...this.eventList()];
    updatedList[index] = updatedEvent;
    this.eventList.set(updatedList);
  }

  deleteEvent(index: number) {
    const updatedList = this.eventList().filter((_, i) => i !== index);
    this.eventList.set(updatedList);
  }
}
