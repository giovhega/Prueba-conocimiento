import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  let nackbar: MatSnackBar;

  beforeEach(() => {
    service = new  AlertService(nackbar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
