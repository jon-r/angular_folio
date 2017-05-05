import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioListComponent } from './folio-list.component';

describe('FolioListComponent', () => {
  let component: FolioListComponent;
  let fixture: ComponentFixture<FolioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
