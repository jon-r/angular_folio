import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioItemComponent } from './folio-item.component';

describe('FolioItemComponent', () => {
  let component: FolioItemComponent;
  let fixture: ComponentFixture<FolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
