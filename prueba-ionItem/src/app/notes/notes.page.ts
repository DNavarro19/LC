import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: any = [{'title':'nota 1'},{'title':'nota 2'}];
  constructor() { }

  ngOnInit() {
  }

}
