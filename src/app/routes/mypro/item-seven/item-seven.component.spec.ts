import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSevenComponent } from './item-seven.component';

describe('ItemSevenComponent', () => {
  let component: ItemSevenComponent;
  let fixture: ComponentFixture<ItemSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
