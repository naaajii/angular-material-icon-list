import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconNameToTitle',
  standalone: true
})
export class IconNameToTitlePipe implements PipeTransform {

  transform(value: string) {
    return value.replaceAll('_', ' ');
  }

}
