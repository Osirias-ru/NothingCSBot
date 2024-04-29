import { Composer } from "grammy";
import type { Context } from "#root/bot/context.js";
import { logHandle } from "#root/bot/helpers/logging.js";
import { shoot } from "#root/bot/helpers/utils.js";
import { getRangById } from "#root/bot/helpers/variables.js";
import { workoutData, shootData } from "#root/bot/callback-data/index.js";
import { createWorkoutKeyboard } from "#root/bot/keyboards/index.js";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.callbackQuery(
  workoutData.filter(),
  logHandle("keyboard-workout-select"),
  async (ctx) => {
    if (ctx.database === undefined) {
      return ctx.reply(ctx.t("errors.no-registered-user"));
    }
    const userDatabase = ctx.database.user;
    if (userDatabase.status_id === -1) {
      return ctx.reply(ctx.t("errors.no-calibration-user"));
    }
    const userInventory = ctx.database.inventory;
    const rang = getRangById(userDatabase.status_id);
    ctx.reply(
      ctx.t("workout.main", {
        name: userDatabase.username,
        rang,
        coins: userInventory.coins,
        targets: userInventory.targets,
      }),
      {
        reply_markup: createWorkoutKeyboard(ctx),
      },
    );
    ctx.answerCallbackQuery();
  },
);

feature.callbackQuery(
  shootData.filter(),
  logHandle("keyboard-shoot-select"),
  async (ctx) => {
    if (ctx.database === undefined) {
      return ctx.reply(ctx.t("errors.no-registered-user"));
    }
    if (ctx.database.user.status_id === -1) {
      return ctx.answerCallbackQuery(ctx.t("errors.no-calibration-user"));
    }
    if (ctx.database.inventory.targets < 1) {
      return ctx.answerCallbackQuery(ctx.t("shoot.no-targets"));
    }
    ctx.database.inventory.targets -= 1;
    await ctx.database.inventory.save();
    ctx.answerCallbackQuery();
    shoot(ctx, ctx.database.user, ctx.database.inventory, ctx.database.stats);
  },
);

export { composer as workoutFeature };
