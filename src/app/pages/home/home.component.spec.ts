import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { MainService } from '../../services/main.service';
import { User } from '../../services/module/user/user.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

class MockMainService {
  getNewStories() {
    return of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  getItemById(id: number) {
    return of({
      id,
      title: `Title ${id}`,
      by: `Author ${id}`,
      time: 1620000000,
      descendants: 0,
      kids: [],
      score: 100,
      type: 'story',
      url: 'https://example.com'
    } as User);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockMainService: MockMainService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule
      ],
      providers: [{ provide: MainService, useClass: MockMainService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockMainService = TestBed.inject(MainService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load initial stories on init', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userData.length).toBe(10);
  });

  it('should toggle CSS class when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.changeDisplay')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.changeCss).toBeTrue();
    button.click();
    fixture.detectChanges();
    expect(component.changeCss).toBeFalse();
  });

  it('should load more stories when load more button is clicked', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userData.length).toBe(10);

    component.loadMoreStories();
    fixture.detectChanges();
    expect(component.userData.length).toBe(10);
  });
});
