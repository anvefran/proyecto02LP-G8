import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVendedorComponent } from './delete-vendedor.component';

describe('DeleteVendedorComponent', () => {
  let component: DeleteVendedorComponent;
  let fixture: ComponentFixture<DeleteVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
