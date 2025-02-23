import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaestrosPage } from './maestros.page';

describe('MaestrosPage', () => {
  let component: MaestrosPage;
  let fixture: ComponentFixture<MaestrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
