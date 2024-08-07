import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgartComponent } from './bgart.component';

describe('BgartComponent', () => {
  let component: BgartComponent;
  let fixture: ComponentFixture<BgartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
