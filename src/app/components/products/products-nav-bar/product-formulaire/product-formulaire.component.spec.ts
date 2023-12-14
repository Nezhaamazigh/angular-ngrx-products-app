import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormulaireComponent } from './product-formulaire.component';

describe('ProductFormulaireComponent', () => {
  let component: ProductFormulaireComponent;
  let fixture: ComponentFixture<ProductFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
