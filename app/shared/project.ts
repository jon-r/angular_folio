interface styleList {
  string : string
}

export class Project {
  constructor(
    public id : number,
    public title : string,
    public sub : string ,
    public cat : string ,
    public desc : string[],
    public tileStyle : Object
  ) {}
}
