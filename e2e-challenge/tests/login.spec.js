import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login', async ({ page }) => {

    // A) Validar/automatizar el proceso de login:
    // 1: Ir a la página de login del portal.
    const loginPage = new LoginPage(page);
    await page.goto('https://login.hyphalab.dev/');

    // 2: Ingresar usuario y contraseña.
    await loginPage.login('hyphatest', 'Hypha2025.');

    // 3: Validar que se redirige al dashboard.
    await expect(page).toHaveURL('https://pas.hyphalab.dev/');


    // B) Validar elementos post-login:
    // 1: Confirmar que el dashboard carga correctamente (por ejemplo, que aparece el texto “Bienvenido” o un elemento único).
    await expect(page).toHaveTitle(/.*Administration.*/);
    await page.getByRole('link', { name: 'Settings' }).click(); 

    // 2: Validar que el nombre de usuario se muestre en la interfaz.
    await page.locator('#headlessui-menu-button-\\:re\\:').dblclick();
    await expect(page.getByRole('menuitem', { name: 'hyphatest' })).toBeVisible();


    // C) Realizar navegación y acción clave:
    // 1: Ir al menú de Viewership > Households (Panel > Households).
    await page.getByRole('button', { name: 'Panel' }).click(); 

    // 2: Seleccionar una opción específica.
    await page.getByRole('link', { name: 'Households' }).click(); 

    // 3: Validar que se cargue una tabla o sección esperada.
    await expect(page.getByText('Household')).toBeVisible();
});