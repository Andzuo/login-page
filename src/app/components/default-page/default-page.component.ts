import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.scss'
})
export class DefaultPageComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
