// https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-in-angular-2-without-causing-unsafe-value-exception

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeURL' })
export class SafeURLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
