import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MainService } from './main.service';
import { User } from './module/user/user.module';

describe('MainService', () => {
  let service: MainService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MainService]
    });
    service = TestBed.inject(MainService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch new stories', () => {
    const dummyIds = [1, 2, 3, 4, 5];

    service.getNewStories().subscribe(ids => {
      expect(ids.length).toBe(5);
      expect(ids).toEqual(dummyIds);
    });

    const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/newstories.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyIds);
  });

  it('should fetch item by id', () => {
    const dummyUser: User = {
      id: 1,
      title: 'Title 1',
      by: 'Author 1',
      time: 1620000000,
      descendants: 0,
      kids: [],
      score: 100,
      type: 'story',
      url: 'https://example.com'
    };

    service.getItemById(1).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/item/1.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });
});
