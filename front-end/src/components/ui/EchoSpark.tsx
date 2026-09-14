import type { SVGAttributes } from "react";

interface EchoSparkProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export const SPARK_D = "M312 88 L156 288 H244 L200 424 L364 216 H272 Z";

/** Chữ ký "echo offset": 1 khối nhân đôi ±6%, cyan phía sau, magenta phía trước, trắng trên cùng. */
export default function EchoSpark({ size = 64, ...rest }: EchoSparkProps) {
  const layer = (fill: string, dx: number, dy: number, opacity: number) => (
    <g transform={`translate(${dx} ${dy})`} key={fill + dx}>
      <path d={SPARK_D} fill={fill} opacity={opacity} stroke={fill} strokeWidth="28" strokeLinejoin="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} aria-hidden="true" {...rest}>
      {layer("#22D3EE", 30, 26, 0.78)}
      {layer("#F0348C", -30, -26, 0.82)}
      {layer("#FFF6EE", 0, 0, 1)}
    </svg>
  );
}
