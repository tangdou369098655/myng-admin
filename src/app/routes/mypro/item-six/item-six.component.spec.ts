import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSixComponent } from './item-six.component';

describe('ItemSixComponent', () => {
  let component: ItemSixComponent;
  let fixture: ComponentFixture<ItemSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
