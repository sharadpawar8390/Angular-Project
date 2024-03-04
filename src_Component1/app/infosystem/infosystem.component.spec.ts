import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosystemComponent } from './infosystem.component';

describe('InfosystemComponent', () => {
  let component: InfosystemComponent;
  let fixture: ComponentFixture<InfosystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
