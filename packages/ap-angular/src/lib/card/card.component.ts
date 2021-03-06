import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ap-ng-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../../../../design-tokens/dist/design-tokens.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() 'img': string;
  @Input() 'title': string;
  @Input() 'subtitle': string;
  @Input() 'cardBody': string;
  constructor() {}

  ngOnInit(): void {}
}
