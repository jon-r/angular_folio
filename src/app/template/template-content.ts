export class TemplateContent {
  constructor(
    public id: number,
    public rows: [{
     'style'?: object,
     'background-image'?: string,
     'background-color'?: string,
     'content': [{
      'type': string,
      'class'?: string,
      'value': string
     }]
    }]
  ) {}
}
