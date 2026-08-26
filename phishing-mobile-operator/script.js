// =========================================
// Логика для фишингового сайта MegaTel        
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы, чтобы JS мог ее перехватить

            // 1. Получаем значения полей
            const phone = document.getElementById('phone').value;
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;

            // 2. Базовая валидация (проверка на заполненность)
            if (!phone || !name || !password) {
                alert('Пожалуйста, заполните все поля перед входом!');
                return; // Останавливаем выполнение, если есть пустые поля
            }

            // 3. Имитация отправки данных (в реальном фишинге здесь был бы fetch() к серверу)
            console.log("=========================================");
            console.log("✅ Данные успешно получены и имитируются как отправленные на сервер!");
            console.log(`Телефон: ${phone}`);
            console.log(`Имя: ${name}`);
            console.log(`Пароль/PIN: ${password}`);
            console.log("=========================================");

            // 4. Визуальное подтверждение для пользователя
            alert('Успех! Ваши данные отправлены на сервер MegaTel. Перенаправление...');

            // В реальном фишинге здесь можно было бы перенаправить на страницу "Спасибо" или главную
            // window.location.href = "/success.html"; 
        });
    } else {
        console.error("Ошибка: Форма с ID 'loginForm' не найдена на странице.");
    }
});