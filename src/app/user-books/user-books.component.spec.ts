import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookService } from  '../services/book-service';

describe('BookService', () => {
  let component: BookService;
  let fixture: ComponentFixture<BookService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
