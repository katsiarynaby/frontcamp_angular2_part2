import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ArticleModel } from '../models/article';
import { DatePipe } from '../pipes';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFormComponent implements OnInit {
  Article: ArticleModel;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.Article = new ArticleModel();
    this.form = this.fb.group({
      title: [this.Article.title, [Validators.required]],
      description: [this.Article.description],
      imageUrl: [this.Article.urlToImage],
      date: [this.Article.publishedAt && this.datePipe.transform(new Date(this.Article.publishedAt))],
      url: [this.Article.url],
    });
  }

  onSaveNews(): void {
    const Article = { ...this.form.value } as ArticleModel;
    console.log(Article);
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/']);
  }
}
