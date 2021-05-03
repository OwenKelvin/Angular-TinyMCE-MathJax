import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiny-mce-mathjax';
  config = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min'        // Suffix to use when loading resources
  }
}
