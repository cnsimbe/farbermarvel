import { Pipe ,PipeTransform, Injectable } from '@angular/core';

@Pipe({name: 'imgPerm'})
@Injectable()
export class imgPerm implements PipeTransform {
  transform(thumb): string {
    return `${thumb.path}.${thumb.extension}`
  }
}
