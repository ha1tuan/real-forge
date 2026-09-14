import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "../../lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  size?: number;
  strokeWeight?: "regular" | "light";
}

/** Glyph Lucide — kế thừa currentColor nên tự tuân luật human/machine. */
export default function Icon({ icon: Glyph, size = 18, strokeWeight = "regular", className, ...rest }: IconProps) {
  return (
    <Glyph
      size={size}
      aria-hidden="true"
      className={cn("inline-block flex-none", strokeWeight === "light" && "opacity-70", className)}
      {...rest}
    />
  );
}
