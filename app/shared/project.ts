export class Project {
  constructor(
    public id : number,
    public title : string,
    public sub : string ,
    public cat : string ,
    public desc : string[],
    public img : {
      name : string,
      centre : string
     },
    public tilePos : {}
  ) {}
}
