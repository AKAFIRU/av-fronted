import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArchivesComponent } from './upload-archives.component';

describe('UploadArchivesComponent', () => {
  let component: UploadArchivesComponent;
  let fixture: ComponentFixture<UploadArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadArchivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
