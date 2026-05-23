export interface FabItem {
  id: string;
  label: string;
  sub?: string;
  tone: 'pink' | 'gold' | 'cyan' | 'violet' | 'neutral';
  icon: string; // SVG content or icon identifier
  current?: boolean;
}

export type FabVariant = 'solid' | 'glass';

export type FabPosition = 'left' | 'right';

export type ToastPosition = 'top' | 'center' | 'bottom';

export interface FabConfig {
  style: FabVariant;
  position: FabPosition;
  currentProductId?: string;
  toastPosition?: ToastPosition;
}
