import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTwoComponent } from './item-two.component';

describe('ItemTwoComponent', () => {
  let component: ItemTwoComponent;
  let fixture: ComponentFixture<ItemTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
