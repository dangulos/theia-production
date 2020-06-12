import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheiaSpacePage } from './theia-space.page';

describe('TheiaSpacePage', () => {
  let component: TheiaSpacePage;
  let fixture: ComponentFixture<TheiaSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheiaSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheiaSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
