import { Context } from "#root/bot/context.js";
import { executeStartPromocode } from "./start/promocode.js";
import { executeStartProfile } from "./start/profile.js";
import { executeAdminCase } from "./start/admin/cases.js";
import { executeAdminProfile } from "./start/admin/profile.js";

export function executeStartMatch(
  ctx: Context,
  action: string,
  arguments_: string,
) {
  if (action.startsWith("admincase")) {
    const caseAction = arguments_.split("_")[0];
    const caseId = arguments_.split("_")[1];
    executeAdminCase(ctx, caseAction, caseId);
  } else if (action.startsWith("adminprofile")) {
    const profileAction = arguments_.split("_")[0];
    const userId = Number(arguments_.split("_")[1]);
    executeAdminProfile(ctx, profileAction, userId);
  } else if (action === "promo") {
    const code = arguments_;
    executeStartPromocode(ctx, code);
  } else if (action === "profile") {
    const userId = Number(arguments_);
    executeStartProfile(ctx, userId);
  }
}
