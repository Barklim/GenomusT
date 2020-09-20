## 0.1.1 (September 13, 2020)

add internationalisation with i18n
add Matherial ui

## 0.1.0 (April 28, 2019)

G-app App 0.1 brings some exciting new features including support for [Hooks](https://hooks-intro.html)!

Thanks to all the maintainers and contributors who worked so hard on this release! :tada:

# Highlights

- Create main page: #0001
- Delete rating: #0002
- Helming routes + random page: #0003
- Do api methods: #0004
- Upgrade macadress issuses: #6278
- Debugging and someon else: #6278

# Migrating from 0.0.1 to 0.1.0

	bcrypt 1.0.3 -> 2.0.1
	upgrade macadress

## New Features

- Can watch hows add gen
- В панеле анкет, зайдя кликнув по genId, перейдем к модели genId
- Пока анкет не наделаешь в админке
- Админ может менять рейтинг анкеты, который по дефолту 9
- Только у одной учётки есть права удалять/редактировать/создавать юзеров/посты/мутации 
- Нельзя из админки редакдир0вадь р0ль, д.к. иначе не в0зм0жн0 будед вернудь себе права
- Обработка fetch img из0бражения
- Validation
- Fr0m registerScreem

 ## 0.1.1 (December 12, 2019)

 In the next version we will be introduced: 
 - SetTimeout password protection (3-5 and water);
 - Matherial UI Theme;
 - Change Password;

# Highlights

- Edited the settings page in the profile;
- Redid the render rule of the settings button in the profile;
- If the user is logged in then throw on the profile;
- Edit info on profile page (0 -> нет, 1 -> да, н, undefined -> н/д);
- Error handling for matches in the email and password database;

 ## 0.1.2 (December 15, 2019)

 In the next version we will be introduced: 
 - Statistics on requests;

# Highlights

- x    1. Add the ability to import from EXCEL or another database.
- ?/✓  2. Collect a security system for data so that there is no single access to all data.
- ?    3. Add the ability to make passwords and make them more complicated (8 characters, letters + numbers).
- ✓    4. In the data on genetic mutations leave: 0 - no mutation, 1 - heterozygous for the mutation, 2 - homozygous for the mutation, n / a - no data.

 ## 0.1.3 (December 16, 2019)

# Highlights

- Fix text on different pages.
- Edited the registration method, now it is not possible to create an admin using the post-method.
- Error handling during registration:
- 1. There is no such GenId in the database.
- 2. A user with such mail or GenId is already registered.
- After the first registration, it redirects to login and substitutes the entered mail and genId for login.

 ## 0.1.4 (December 23, 2019)

- After changing the password, it takes you to enter the page and requires you to enter a new password, and automatically
- the old password is entered in input input.
- Validation Procedure:
- The password has not been changed because the new password was repeated incorrectly.
- The password has not been changed, since the new password is shorter than six characters, consists only of numbers, or contains invalid characters.
- Invalid old password (no).
- There is no such GenId in the database;
- A user with such mail or GenId is already registered;
- Changed qrcode Api to qrcode generator (qrcode.react);

 ## 0.1.5 (December 28, 2019)

- The problem with changing the password has been fixed.
- When changing the password, the user always becomes normal.

 ## 1.0.1 (July 5, 2020)

- Generation of a mark on the issuance of results
- Generating a code entry note from a form.