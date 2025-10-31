"""test_login.py"""
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

class TestLogin:
    """Класс для тестирования авторизации"""
    driver: webdriver.Chrome
    wait: WebDriverWait

    def setup_method(self):
        """Запускает браузер перед каждым тестом"""
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service)
        self.wait = WebDriverWait(self.driver, 10)

    def teardown_method(self):
        """Закрывает браузер после каждого теста"""
        self.driver.quit()

    def test_valid_login(self):
        """Тестирование авторизации с валидными данными"""
        self.driver.get("http://localhost:5173/")
        username_field = self.wait.until(
            EC.presence_of_element_located((By.ID, "username"))
        )
        password_field = self.driver.find_element(By.ID, "password")
        login_button = self.driver.find_element(By.ID, "login-button")

        username_field.send_keys("admin")
        password_field.send_keys("secret123")
        login_button.click()

        logout_button = self.wait.until(
            EC.presence_of_element_located((By.ID, "logout-button"))
        )

        assert logout_button.is_displayed()
        