import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhishekDarshan } from './abhishek-darshan';

describe('AbhishekDarshan', () => {
  let component: AbhishekDarshan;
  let fixture: ComponentFixture<AbhishekDarshan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbhishekDarshan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhishekDarshan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
