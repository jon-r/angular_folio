import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioDetailComponent } from './folio-detail.component';

describe('FolioDetailComponent', () => {
  let component: FolioDetailComponent;
  let fixture: ComponentFixture<FolioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
