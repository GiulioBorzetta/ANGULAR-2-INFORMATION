import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { User } from '../../services/module/user/user.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  changeCss: boolean = false;

  newStoriesIds: number[] = [];
  userData: User[] = [];
  currentIndex: number = 0;
  increment: number = 10;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getNewStories().subscribe(ids => {
      this.newStoriesIds = ids;
      this.loadMoreStories();
    });
  }

  loadMoreStories() {
    const nextIndex = this.currentIndex + this.increment;
    const idsToLoad = this.newStoriesIds.slice(this.currentIndex, nextIndex);

    idsToLoad.forEach(id => {
      this.mainService.getItemById(id).subscribe(details => {
        this.userData.push(details);
      });
    });

    this.currentIndex = nextIndex;
  }

  toggleCss() {
    this.changeCss = !this.changeCss;
    console.log("Theme toggled:", this.changeCss);
  }
}
