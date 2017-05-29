export interface StyleObj {
  [key: string]: string;
}

export class TemplateContent {

  rows: [{
    style?: StyleObj,
    content?: [{
        style?: StyleObj,
        type: string,
        class: string,
        value: string
    }]
  }];

  constructor(
    options: {
      rows?: [{
        style?: StyleObj,
        content: [{
            style?: StyleObj,
            type: string,
            class: string,
            value: string
        }]
      }]
    } = {}
  ) {
    this.rows = options.rows || [{}];
  }

}
