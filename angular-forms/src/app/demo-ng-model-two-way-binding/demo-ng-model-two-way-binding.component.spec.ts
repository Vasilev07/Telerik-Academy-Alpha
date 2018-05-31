import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgModelTwoWayBindingComponent } from './demo-ng-model-two-way-binding.component';

describe('DemoNgModelTwoWayBindingComponent', () => {
  let component: DemoNgModelTwoWayBindingComponent;
  let fixture: ComponentFixture<DemoNgModelTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgModelTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgModelTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
