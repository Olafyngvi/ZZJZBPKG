import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('stickyMenu', null) menuElement: ElementRef;

  // tslint:disable-next-line: no-inferrable-types
  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
