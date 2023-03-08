import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedNgForComponent } from './enhanced-ng-for.component';

describe('EnhancedNgForComponent', () => {
  let component: EnhancedNgForComponent;
  let fixture: ComponentFixture<EnhancedNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
