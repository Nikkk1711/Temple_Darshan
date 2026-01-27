import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livedarshan } from './livedarshan';

describe('Livedarshan', () => {
  let component: Livedarshan;
  let fixture: ComponentFixture<Livedarshan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livedarshan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livedarshan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
