import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewborncareComponent } from './newborncare.component';

describe('NewborncareComponent', () => {
  let component: NewborncareComponent;
  let fixture: ComponentFixture<NewborncareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewborncareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewborncareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
