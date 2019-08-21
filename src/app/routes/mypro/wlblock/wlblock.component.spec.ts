import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlblockComponent } from './wlblock.component';

describe('WlblockComponent', () => {
  let component: WlblockComponent;
  let fixture: ComponentFixture<WlblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
