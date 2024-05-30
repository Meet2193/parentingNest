import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingTipsComponent } from './parenting-tips.component';

describe('ParentingTipsComponent', () => {
  let component: ParentingTipsComponent;
  let fixture: ComponentFixture<ParentingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentingTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
