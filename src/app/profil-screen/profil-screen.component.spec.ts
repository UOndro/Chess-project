import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilScreenComponent } from './profil-screen.component';

describe('ProfilScreenComponent', () => {
  let component: ProfilScreenComponent;
  let fixture: ComponentFixture<ProfilScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
