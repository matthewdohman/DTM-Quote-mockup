import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quote';

  ngOnInit() {
    let scriptUrl = '/assets/js/scripts-3.js';
    let node = document.createElement('script');
    node.src = scriptUrl;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';

    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
