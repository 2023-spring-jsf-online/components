import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MackAlbumListComponent } from './mack-album-list.component';

describe('MackAlbumListComponent', () => {
  let component: MackAlbumListComponent;
  let fixture: ComponentFixture<MackAlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MackAlbumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MackAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
