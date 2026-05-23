import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabItem } from '../../models/fab-item.model';
import { FabItemComponent } from '../fab-item/fab-item.component';

@Component({
  selector: 'vsf-fab-menu',
  imports: [CommonModule, FabItemComponent],
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss']
})
export class FabMenuComponent {
  @Input() items: FabItem[] = [];
  @Input() variant: 'solid' | 'glass' = 'glass';
  @Input() position: 'left' | 'right' = 'right';
  @Input() closing = false;

  @Output() itemSelected = new EventEmitter<FabItem>();
  @Output() backdropClick = new EventEmitter<void>();

  @HostBinding('class.vsf-fab-menu--glass')
  get isGlass(): boolean {
    return this.variant === 'glass';
  }

  @HostBinding('class.vsf-fab-menu--closing')
  get isClosing(): boolean {
    return this.closing;
  }

  @HostBinding('class.vsf-fab-menu--right')
  get isRight(): boolean {
    return this.position === 'right';
  }

  @HostBinding('class.vsf-fab-menu--left')
  get isLeft(): boolean {
    return this.position === 'left';
  }

  onItemClick(item: FabItem) {
    this.itemSelected.emit(item);
  }

  onBackdropClickHandler() {
    this.backdropClick.emit();
  }
}
