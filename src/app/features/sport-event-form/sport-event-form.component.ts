import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseEventFormComponent } from '../../shared/base-event-form/base-event-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../core/services/event.service';
import { IEvent } from '../../models/interfaces/event.interface';

@Component({
  selector: 'app-sport-event-form',
  standalone: true,
  imports: [
    BaseEventFormComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  template: `
    <app-base-event-form (formSubmit)="onFormSubmit($event)" [title]="'Спорт'">
    <ng-container [formGroup]="eventForm">
      <mat-form-field>
        <input matInput formControlName="participants" placeholder="Количество участников" type="number" />
      </mat-form-field>
    </ng-container>
  </app-base-event-form>
  `
})
export class SportEventFormComponent extends BaseEventFormComponent {
  readonly sportValue = 'sport';
  constructor(fb: FormBuilder, private readonly eventService: EventService) {
    super(fb);
    this.eventForm.addControl('participants', fb.control(0, [Validators.required, Validators.min(1)]));
  }

  onFormSubmit(event: IEvent) {
    event.type = this.sportValue;
    this.eventService.addEvent(event)
  }
}
