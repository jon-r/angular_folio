import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }
}
