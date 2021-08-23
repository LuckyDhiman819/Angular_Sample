import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorRed]'
})
export class ProductNameDirective {

  constructor(
    private renderer: Renderer2, 
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elmRef.nativeElement, "color", "red");
  }

}
