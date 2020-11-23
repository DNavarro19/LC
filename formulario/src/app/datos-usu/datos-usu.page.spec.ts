import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosUsuPage } from './datos-usu.page';

describe('DatosUsuPage', () => {
  let component: DatosUsuPage;
  let fixture: ComponentFixture<DatosUsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUsuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosUsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
