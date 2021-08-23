import { ElementRef, Renderer2 } from '@angular/core';
import { ProductNameDirective } from './product-name.directive';

describe('ProductNameDirective', () => {
  it('should create an instance', () => {
    let renderer: Renderer2;
    let elmRef: ElementRef;
    const directive = new ProductNameDirective(renderer, elmRef);
    expect(directive).toBeTruthy();
  });
});
