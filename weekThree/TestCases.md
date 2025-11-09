# Test Case Document - Swag Labs

## This docs include few test cases for the site [Swag Labs](https://www.saucedemo.com/).

#### Swag Labs is a a demo e-commerce website used for learning and practicing software test automation. It simulates a basic online store with features like login, product browsing, adding to a cart, and checkout.

#### As for uploading a file test case, another site (QA Playground) will be used as Swag Labs does not contain such functionality.

---

### TC-01 — Login (Happy path)

- Objective: Verify successful login with valid credentials.
- Preconditions: Browser opened and navigated to https://www.saucedemo.com/; user is logged out.
- Test data: `standard_user` / `secret_sauce`
- Steps:
  1. Navigate to https://www.saucedemo.com/
  2. Enter username: `standard_user`
  3. Enter password: `secret_sauce`
  4. Click the _Login_ button
- Expected result:
  - User is authenticated and redirected to https://www.saucedemo.com/inventory.html
  - Inventory page header and product list are visible

---

### TC-02 — Order a product (Add to cart → Checkout → Complete)

- Objective: Verify a product can be added to cart and an order completed.
- Preconditions: User is logged in and on the inventory page.
- Test data: any values for First name / Last name / Postal code during checkout
- Steps:
  1. On inventory page, locate `Sauce Labs Backpack"`
  2. Click _Add to cart_ for `Sauce Labs Backpack`
  3. Click the cart icon (top-right)
  4. Verify `Sauce Labs Backpack` appears in the cart items
  5. Click _Checkout_
  6. Enter First name, Last name, and Postal code → click _Continue_
  7. On the Checkout Overview page, verify item description, quantity, and price are correct
  8. Click _Finish_
- Expected result:
  - After Finish, user sees the order confirmation page (_"Thank you for your order!"_)
  - _Back Home_ button is shown

---

### TC-03 — Add and remove a product from the cart

- Objective: Verify adding an item to cart and removing it works as expected.
- Preconditions: User is logged in and on the inventory page.
- Test data: N/A
- Steps:
  1. On inventory page, locate `Sauce Labs Backpack`
  2. Click _Add to cart_ for `Sauce Labs Backpack`
  3. Click the cart icon
  4. Verify `Sauce Labs Backpack` is listed in the cart
  5. Click _Remove_ for `Sauce Labs Backpack`
- Expected result:
  - After removal, `Sauce Labs Backpack` is no longer listed in the cart
  - Cart count updates accordingly in inventory page

---

### TC-04 — Upload a file (Image)

- Objective: Verify the image upload flow works and the uploaded image is displayed/acknowledged by the app.
- Preconditions: Browser opened and navigated to https://qaplayground.dev/apps/upload/; user is on the Upload page.
- Test data:
  - Valid image file

1. Navigate to https://qaplayground.dev/apps/upload/
2. Click _Select Image File_
3. Select any valid image file from your files and confirm selection
4. Verify if image has been added and image is displayed on page.
