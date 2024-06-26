import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapsComponent } from './wraps.component';

describe('WrapsComponent', () => {
  let component: WrapsComponent;
  let fixture: ComponentFixture<WrapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapsComponent]
    });
    fixture = TestBed.createComponent(WrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
