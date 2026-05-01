import { Pipe, PipeTransform } from '@angular/core';
import { BASE_URL } from '../routes/api-routes';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (value == null) {
      return null;
    }
    return `${BASE_URL}/${value}`;
  }
}
