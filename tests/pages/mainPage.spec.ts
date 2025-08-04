import { test, expect } from '../fixtures/mainPage';
import { before, beforeEach } from 'node:test';
import { MainPage } from '../models/MainPage';

test.describe('тесты главной страницы', () => {
  test('1. Проверка отображения элементов навигаций хэдера', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  test('2. Проверка названий элементов навигаций хэдера', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  test('3. Проверка атрибутов href элементов навигаций хэдера', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });
  test('4. Проверка изменения лайт мода на странице', async ({ mainPage }) => {
    await test.step('Нажатие на иконку переключения лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test(`5.Проверка стилей со cветлой темой`, async ({ mainPage }) => {
    await test.step('Переключение на светлую тему', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test(`6.Проверка стилей с темной темой`, async ({ mainPage }) => {
    await test.step('Переключение на темную тему', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
