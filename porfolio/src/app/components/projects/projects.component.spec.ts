import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsComponent } from './projects.component';

describe('ProyectsComponent', () => {
  let component: ProyectsComponent;
  let fixture: ComponentFixture<ProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
