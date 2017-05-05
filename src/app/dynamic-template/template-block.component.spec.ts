import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBlockComponent } from './template-block.component';

describe('TemplateBlockComponent', () => {
  let component: TemplateBlockComponent;
  let fixture: ComponentFixture<TemplateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
