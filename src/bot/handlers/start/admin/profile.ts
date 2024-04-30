import { Context } from "#root/bot/context.js";
import { getUser } from "#root/database/schemas/user.js";

export async function executeAdminProfile(
  ctx: Context,
  profileAction: string,
  userId: number,
) {
  const requestUser = await getUser(userId);
  if (requestUser === undefined) {
    return ctx.reply(ctx.t("errors.loose_data"));
  }
  switch (profileAction) {
    case "view": {
      // просмотр статы и профиля
      break;
    }
    case "inventory": {
      // просмотр и редактирование инветаря
      break;
    }
    default: {
      break;
    }
  }
}
