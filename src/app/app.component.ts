import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      'title': 'Apple Watch Series 7',
      'imageurl': 'apple-watch-series-7.jpg',
      'price': '$399',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odio.'
    },
    {
      'title': 'Apple Watch SE',
      'imageurl': 'apple-watch-se.jpg',
      'price': '$279',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odio.'
    },
    {
      'title': 'Apple Watch Series 3',
      'imageurl': 'apple-watch-series-3.jpg',
      'price': '$99',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odio.'
    },
    {
      'title': 'Apple Watch Series 5',
      'imageurl': 'apple-watch-series-7.jpg',
      'price': '$399',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odio.'
    }
  ];
}