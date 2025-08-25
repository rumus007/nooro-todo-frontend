import * as React from "react";

// export type SvgProps = React.SVGProps<SVGSVGElement> & {
//   /** sets width & height together (e.g., 24 or "1.25rem") */
//   size?: number | string;
// };

// function applySize(props: SvgProps) {
//   const { size, width, height, ...rest } = props;
//   return {
//     width: width ?? size ?? 24,
//     height: height ?? size ?? 24,
//     ...rest,
//   };
// }

export function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M14 4c2.5 1 4.5 3 5.5 5.5l-3 3-4-4 1.5-4.5z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8l4 4-6 6-3-3 5-7z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="7" r="1" fill="currentColor"/>
      </svg>
    );
  }

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

export function EmptyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

export function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
    return <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }

export function PlusIconTask(props: React.SVGProps<SVGSVGElement>) {
    return <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
  }

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }  


export function CheckIconCard(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
export function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M3 6h18M9 6V4h6v2M8 10v8M12 10v8M16 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }