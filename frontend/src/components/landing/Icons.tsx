interface IconProps { size?: number }

export const IconCheck = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrow = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconClose = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const IconFounder = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 21V18C3 16.3 4.3 15 6 15H10C11.7 15 13 16.3 13 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11L18 13L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconVC = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 20V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 20V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconAccelerator = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 17L8 14L11 17L13 15L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5L19 5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconSun = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1.5V3M8 13v1.5M14.5 8H13M3 8H1.5M12.6 3.4l-1.05 1.05M4.45 11.55L3.4 12.6M12.6 12.6l-1.05-1.05M4.45 4.45L3.4 3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconMoon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z" fill="currentColor" />
  </svg>
);

export const IconBrandMark = ({ size = 44 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="brand-logo">
    <path d="M174.63 243.123V300.471H253.134V164.619L174.63 243.123Z" fill="currentColor" />
    <path d="M147 270.691L232.266 185.404V99H147V270.691Z" fill="currentColor" />
  </svg>
);
