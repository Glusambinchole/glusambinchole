import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeteranganPage } from './keterangan.page';

describe('KeteranganPage', () => {
  let component: KeteranganPage;
  let fixture: ComponentFixture<KeteranganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KeteranganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
