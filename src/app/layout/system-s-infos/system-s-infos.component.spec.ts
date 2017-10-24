import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSInfosComponent } from './system-s-infos.component';

describe('SystemSInfosComponent', () => {
  let component: SystemSInfosComponent;
  let fixture: ComponentFixture<SystemSInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
