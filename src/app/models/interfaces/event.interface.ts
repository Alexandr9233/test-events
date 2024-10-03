export interface IEvent {
  title: string;
  description: string;
  location: string;
  type: 'sport' | 'music';
  participants?: number;
  genre?: string;
}
