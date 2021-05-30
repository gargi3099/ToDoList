import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todo = ["Web Task", "Project Report", "Seminar Topic"];
  progress = [];
  done = [];
  constructor() { }

  ngOnInit() {
  }

  todo_prog(item){
    this.progress.push(item); 
    var i,index; 
    for(i=0;i<this.todo.length;i++)
    {
      if(this.todo[i]==item)
      {
        index=i;
        break;
      }
    }
    var removed = this.todo.splice(index,1);
  }

  todo_done(item){
    this.done.push(item); 
    var i,index; 
    for(i=0;i<this.todo.length;i++)
    {
      if(this.todo[i]==item)
      {
        index=i;
        break;
      }
    }
    var removed = this.todo.splice(index,1);
  }

  prog_done(item){
    this.done.push(item); 
    var i,index; 
    for(i=0;i<this.progress.length;i++)
    {
      if(this.progress[i]==item)
      {
        index=i;
        break;
      }
    }
    var removed = this.progress.splice(index,1);
  }

}
