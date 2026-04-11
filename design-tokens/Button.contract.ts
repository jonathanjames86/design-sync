export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'warning';
export type ButtonSize = 'md' | 'sm' | 'lg';

export interface ButtonContract {
  disabled?: boolean;
  variant: ButtonVariant;
  size: ButtonSize;
}

/** @designsync auto-generated — do not edit manually */