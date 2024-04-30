import { Context } from "#root/bot/context.js";
import { getUser } from "#root/database/schemas/user.js";

export async function executeStartProfile(ctx: Context, userId: number) {
  const requestUser = await getUser(userId);
  if (requestUser === undefined) {
    return ctx.reply(ctx.t("errors.no-select-user-found"));
  }
  // просмотр пользователя
}
