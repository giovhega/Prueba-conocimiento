import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientManagerComponent } from './client-manager.component';

describe('ClientManagerComponent', () => {
  let component: ClientManagerComponent;
  let fixture: ComponentFixture<ClientManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientManagerComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
