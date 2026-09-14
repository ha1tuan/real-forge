import type { StepState } from "../../types";

/** Class màu nền cho chấm trạng thái trên lịch. */
export const STATE_DOT: Record<StepState, string> = {
  done: "bg-status-success",
  running: "bg-state-machine",
  human: "bg-action-human",
  failed: "bg-status-danger",
  idle: "bg-status-idle",
};
