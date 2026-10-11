import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-60 disabled:pointer-events-none";

const sizes = "px-7 py-3.5 text-sm sm:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-deep-green text-ivory shadow-card hover:bg-sage hover:-translate-y-0.5 hover:shadow-soft",
  secondary:
    "bg-transparent text-deep-green border border-deep-green/30 hover:bg-deep-green/5 hover:-translate-y-0.5",
  ghost: "bg-gold text-charcoal hover:bg-gold-dark hover:-translate-y-0.5",
};

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  href,
  ...rest
}: AnchorButtonProps | (NativeButtonProps & { href?: undefined })) {
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
