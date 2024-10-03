import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEvent } from '../../models/interfaces/event.interface';

@Component({
  selector: 'app-base-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton],
  template: `
    <h2 class="text-center">{{title}}</h2>
    <form class="flex flex-col items-center mb-16" [formGroup]="eventForm" (ngSubmit)="onSubmit()">
      <div class="wrap-form-fields flex justify-between w-full">
        <mat-form-field>
          <input matInput formControlName="title" placeholder="Название" required />
        </mat-form-field>

        <mat-form-field>
          <textarea matInput formControlName="description" placeholder="Описание"></textarea>
        </mat-form-field>

        <mat-form-field>
          <input matInput formControlName="location" placeholder="Место проведения" />
        </mat-form-field>

        <ng-content></ng-content>
      </div>
      <div class="flex justify-between action w-72 mt-8">
        <button mat-raised-button color="primary" type="submit">Сохранить</button>
        <button mat-raised-button color="warn" type="button" (click)="onReset()">Сбросить</button>
      </div>
    </form>
  `
})
export class BaseEventFormComponent {
  @Input() event: IEvent | null = null;
  @Input() title = '';
  @Output() formSubmit = new EventEmitter<IEvent>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      location: [''],
      type: ['']
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.formSubmit.emit(this.eventForm.value);
    }
  }

  onReset() {
    this.eventForm.reset();
  }
}
