import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventTypeTranslate',
  standalone: true
})
export class EventTypeTranslatePipe implements PipeTransform {
  transform(value: string): string {
    const translationMap: { [key: string]: string } = {
      sport: 'Спортивное мероприятие',
      music: 'Музыкальное мероприятие'
    };
    return translationMap[value] || value;
  }
}
