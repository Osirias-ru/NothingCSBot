start_command = 
    .description = Перезапустить бота
language_command = 
    .description = Поменять язык
setcommands_command =
    .description = Обновить команды
roll_command =
    .description = Кидай кубик

start = 
    .new-user = Новенький!
    .register = Пройдите калибровку!
    .welcome = Приветик!
start_buttons =
        .calibration = 🔫 Калибровка
        .profile = 🪪 Профиль
        .workout = 🔫 Тренировка

calibration =
        .end = Калибровка завершена
        Вам присвоен ранг {$rang}

workout =
        .main = Меню тренировок!

workout_buttons = 
        .shoot = Стрелять
        .additionally = Мишени
        .home = Назад

shoot = 
        .no-targets = У вас нет мишеней!
        .start = Стрельба по мишеням началась
        .end-head = Хедшот! {$reward}
        .end-body = Моя печень! {$reward}
        .end-arm = Больно в руке {$reward}
        .end-leg = Больно в ноге {$reward}
        .end-miss = Промах {$reward}

profile = 
        .main = Ваш профиль {$id}

language = 
    .select = Пожалуйста, выберите ваш язык
    .changed = Обновления языка успешо!

admin =
    .commands-updated = Команды обновлены
    .panel-coment = Укажите комментарий
    .panel-main = Это админ панель
    .panel-pick_user = Выберите пользователя
    .panel-change_user = Изменение пользователя
    Имя пользователя: {$user}
    .panel-sucsess = Успешно
    .money-choose = Укажите количество монеток и комментарий в формате
    новое кол-во монеток/комментарий
    .targets-choose = Укажите количество мишеней и комментарий в формате
    новое кол-во мишеней/комментарий

notifications =
    .money_change = Ваши монетки изменены
    Ваш баланс: {$coins}
    Комментарий: {$reason}
    .shoot_change = Ваши выстрелы изменены
    Ваш баланс: {$shoot}
    Комментарий: {$reason}
    .status_change = Ваш ранг изменён
    Ваш ранг: {$rang}
    Комментарий: {$reason}
    .day_update = Новый день - ноая жизнь
    .reminder_shoots = У вас ещё есть выстрелы
    .reminder_additionally = Вы ещё не собрали все доп. выстрелы
    .reminder_hour = Остался час до сброса! Соберите выстрелы и потренеруйтесь

admin_buttons =
    .choose-user = Получить пользователя
    .status = Изменить статус
    .shoot = Выстрелы
    .money = Монетки
    .data = {$count}
    .mange-user = Управление пользователями
    .mange-item = Управление предметами

errors =
    .regestration = Что то произошло в момент вашей регестрации.
    Нажмите /start и попробуйте ещё раз.
    Если это не поможет обратитесь в техническую поддержку
    .no-registered-user = Вы не зарегестрированы.
    Нажмите /start чтобы начать игру!
    .no-calibration-user = Вы не прошли калибровку!
    Нажмите /start чтобы пройти её!
    .no-select-user-found = Выбраный вами пользователь не найден!
    Скорее всего он не зарегестрирован!
    .forbiden = Недостаточно прав для выполнения взаимодействия
    .invalid-input = Невернные ввод! Введите в формате '{$format}'
    .an-error-has-occurred = Произошла неизвестная ошибка

unhandled = Неизвестное взаимодействие. Нажмите /start
##

pino = pino