import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  title = 'Project List';

  projectList: Array<Project> = [
    {
      title : 'Project #1',
      description: 'My project'
    },
    {
      title : 'Project 21',
      description: 'My project 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
