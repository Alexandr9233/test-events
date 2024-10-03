import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseEventFormComponent } from '../../shared/base-event-form/base-event-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../core/services/event.service';
import { IEvent } from '../../models/interfaces/event.interface';

@Component({
  selector: 'app-music-event-form',
  standalone: true,
  template: `
    <app-base-event-form (formSubmit)="onFormSubmit($event)" [title]="'Музыка'">
    <ng-container [formGroup]="eventForm">
      <mat-form-field>
        <input matInput formControlName="genre" placeholder="Жанр музыки" />
      </mat-form-field>
    </ng-container>
    </app-base-event-form>
  `,
  imports: [BaseEventFormComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class MusicEventFormComponent extends BaseEventFormComponent {

  constructor(fb: FormBuilder, private readonly eventService: EventService) {
    super(fb);
    this.eventForm.addControl('genre', fb.control('', Validators.required));
  }

  onFormSubmit(event: IEvent) {
    this.eventService.addEvent(event)
  }
}
