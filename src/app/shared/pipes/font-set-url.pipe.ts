import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontSetURL',
  standalone: true
})
export class FontSetURLPipe implements PipeTransform {

  transform(value: string) {
    const baseURL = `https://fonts.googleapis.com/icon?family=`;

    const fontSet = value.split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1, segment.length)).join("+");
    const fontSetURL = `${baseURL}${fontSet}`;

    const link = `<link href="${fontSetURL}" rel="stylesheet">`;

    return link;
  }

}
