import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonLdComponent } from './ngx-json-ld.component';

describe('NgxJsonLdComponent', () => {
  let component: NgxJsonLdComponent;
  let fixture: ComponentFixture<NgxJsonLdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonLdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
