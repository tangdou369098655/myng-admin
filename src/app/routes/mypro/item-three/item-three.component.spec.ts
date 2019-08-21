import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThreeComponent } from './item-three.component';

describe('ItemThreeComponent', () => {
  let component: ItemThreeComponent;
  let fixture: ComponentFixture<ItemThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
