import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class FwMediaComponent implements OnInit {


  @Input() title: string;
  constructor() { }

  ngOnInit() {
    this.title = "hallo";

  }

}
