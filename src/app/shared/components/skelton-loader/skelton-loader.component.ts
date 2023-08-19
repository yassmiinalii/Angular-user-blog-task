import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skelton-loader',
  templateUrl: './skelton-loader.component.html',
  styleUrls: ['./skelton-loader.component.scss']
})
export class SkeltonLoaderComponent {

  @Input() for =  [];
  @Input() col =  [];


}
