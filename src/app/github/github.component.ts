import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'mydemo-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username: string;
  repos: any[] = [];

  constructor(private github: GithubService) { }

  ngOnInit(): void {
  }

  usernameTyped(event: KeyboardEvent): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  search(): void {
    this.github.fetchReposForUsername(this.username).subscribe(results => {
      this.repos = results;
    });
  }

}
