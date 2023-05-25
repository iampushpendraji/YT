import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleColumnSearchFilterTableComponent } from './multiple-column-search-filter-table.component';

describe('MultipleColumnSearchFilterTableComponent', () => {
  let component: MultipleColumnSearchFilterTableComponent;
  let fixture: ComponentFixture<MultipleColumnSearchFilterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleColumnSearchFilterTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleColumnSearchFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
