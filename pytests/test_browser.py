from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def test_open_browser():
    """Открытие браузера"""
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service)
    try:
        driver.get("http://localhost:5173/")
        print("Страница загружена")
        print("Заголовок:", driver.title)
    finally:
        driver.quit()
        print("Браузер закрыт")
