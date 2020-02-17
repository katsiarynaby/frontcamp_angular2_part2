import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../models/source';
import { ArticleModel } from '../models/article';
import { ApiService } from '../api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() isAdded: boolean;
  sourceId: string;
  articles: ArticleModel[];
  sources: Source[];
  title: string;
  articlePage: number;
  createdByMeParam: boolean;
  text: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.title = 'Please, choose source';
    this.text = '';
    this.apiService.getSources().subscribe(
      res => {
        this.sources = res;
        console.log(this.sources);
      }
    );
  }

  onGoToEdit(): void {
    this.router.navigate(['/edit']);
  }

  onChangeObj(selectedSource) {
    console.log(selectedSource);
    this.sourceId = selectedSource.value;
    this.apiService.getArticles(this.sourceId, 1).subscribe(
      res => {
        if (res.length > 0) {
          this.articles = res;
          this.articlePage = 1;
          this.isAdded = true;
        } else {
          console.log('News Api is broken');
        }
      }
    );

    this.title = this.sources.find(i => i.id === this.sourceId).name;
  }

  loadMore() {
    this.articlePage++;
    this.apiService.getArticles(this.sourceId, this.articlePage).subscribe(
      res => {
        if (res.length > 0) {
          this.articles.push(...res);
        } else {
          this.isAdded = false;
        }
      }
    );
  }

  onCreatedByMeChange(event: any): void {
    console.log(event.target.checked);
    this.createdByMeParam = event.target.checked;
  }

  onFilter(): void {
    console.log(this.text);
  }
}
