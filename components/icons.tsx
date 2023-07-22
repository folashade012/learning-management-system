import {
  User,
  Loader2,
  SunMedium,
  Moon,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Menu,
  Plus,
  Minus,
  Eye,
  EyeOff,
  FileTerminal,
  Settings,
  LogOut,
  ShoppingCart,
  Image,
  X,
  type Icon as LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  user: User,
  spinner: Loader2,
  sun: SunMedium,
  moon: Moon,
  close: X,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  menu: Menu,
  add: Plus,
  remove: Minus,
  view: Eye,
  hide: EyeOff,
  terminal: FileTerminal,
  settings: Settings,
  logout: LogOut,
  cart: ShoppingCart,
  placeholder: Image,

  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='discord'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 488 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' {...props}>
      <path
        fill='currentColor'
        d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
      />
    </svg>
  ),
};
