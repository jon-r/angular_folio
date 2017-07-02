export class FolioProject {
  constructor(
    public id: number,
    public title: string,
    public desc: string,
    public slug: string,
    public cat: string,
    public style?: string,
  ) {}
}
