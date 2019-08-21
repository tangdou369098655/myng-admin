import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOneComponent } from './item-one.component';

describe('ItemOneComponent', () => {
  let component: ItemOneComponent;
  let fixture: ComponentFixture<ItemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
