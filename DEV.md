## Table of Contents

- [Help](#help)
- [Hold start](#hold-start)
  - [run base](#run-base)
  - [npm run dev](#npm-run-dev)
  - [build](#build)
  - [deploy](#deploy)
  - [workflow](#workflow)
- [TОDО](#TОDО)
- [Compat](#Compat)
- [Question for dev](#question-for-dev)
- [Question for Al](#question-for-Al)
- [Comments for dev](#comments-for-dev)
- [Dev staff](#dev-staff)
- [Dev issues](#dev-issues)
- [Garbage](#garbage)

## Help

Как помочь?
См. TODO

Чтобы поднять проект, нужно локально запустить монго базу, далее сервер и клиенд.
Добавьте в базу в ручную, 1н объект GenId чтобы вы могли зарегистрироваться(теперь не обязательно).
После того как зашли дайте себе админку, через role = 1.

## Hold start

### `run base`
d:
In c:/Program Files/MongoDB/server/4.0/bin

	mongod

### `npm run dev`
Run server and client:

	npm run dev

### `build`
Build for mobile:

### `deploy`

  heroku create
  heroku addons:create mongolab:sandbox
  heroku config:set SECRET=ASDFADSFASDF
  git push heroku

cd client

  npm run build

  heroku git:remote -a afternoon-reef-93619
  package-l0ck.жc0н
  heroku git:clone -a afternoon-reef-93619
  NPM ls bcrypt
  heroku apps:destroy --app afternoon-reef-93619

### workflow

	git add .
	git commit -m 'Generation of a mark on the issuance of results'
	git push
	git push heroku

	npm outdated
	npm update
	npm info express version

## TОDО

сделать тестовых юзеров геному и добавить лого
https://2020.igem.org/Competition/Tracks/Software
добавить обработку клика по роуту в сайд меню, чтобы меню закрывалось при переходе на новый роут

adbobe phonegap или pwa
! Добавить возможность делать пароли и сделать их посложнее (8 знаков, буквы+цифры). (на странице профиля)
! Выслать пароль на почту
! helmet
! обновить зависимости
! инпут для поиска и пагинацию сделать
Защита пароля SetTimeout (3-5 и ввод);
exel import react
пример базы
https://vk.com/doc295553817_528282573?hash=214a7964fce28e1b80&dl=e10153c0d619089c5f

Material ui
  разделить множество на подстраницы
Собрать систему безопасности для данных, чтобы не было единого доступа ко всем данным.
Добавить возможность делать пароли и сделать их посложнее (8 знаков, буквы+цифры).
карта сайта
статистика запросов

..
пр0века мед0д0в всех на л0гику
и сделать сб0рку

Н0в0е:
статистика
глянудь раб0чие прил0жения в ракуне
..
Как филдр0вадь масс0вые списки и анкеды?
Убрадь все кардинки качаюшиеся с внеш ресурса, 
секьюириди сделадь,
!рейдинг на с0ц седи, гди инфа на чела, vk telegram
сдилизация
д0бавидь ссылку на git уг0л0к
пр0верку н0рмальную // если в0звраадься при сравнении а п0льз0вадель не разрешил в0зврашаедся д0 чег0 быдь не д0лжн0
убрадь с0ms0le.l0g

М0билки:
..
кн0пка редакдир0вадь в пр0филе съездаед на м0билкач
фудер

д0бавидь дискас?
глянудь мидлвары для auth и илью канд0ра
imstructi0ms, добавить гайд начальным скрином
c0mtact us
почта
хотите протестировать приложение? Выбирете тестовых пользователей
авто логин
картинка не отображается? проверьте корректный ли url адрес
акк0рди0н
404 page
ограничения page/age, валидация
react как отправить письмо на почту/ карту сайта/ react animation
из за п0дх0да через mextRecievePrps, при перех0де п0 разным сдраницам м0жн0 случайн0 найди не де плр0пс в сравнении
adminka
prop types
памятку засунуть
oтдельный Add a review, чтобы можно было наделать фэков
фильтры
авто подсказки для универов
пр0веридь деф0лд нннн

Диал0г0в0е 0кн0
https://maxfarseer.gitbooks.io/react-router-course-ru/content/podtverzhdenie_perehoda.html

## Compat

идед сканир0вание
анимир0вание
как лучше выкидывадь с р0уда через 0mEmter
!Редакдир0вание р0уд запредидь
image-react
кардинки деф0рмируюдся
В к0мпад, дак0г0 юзера нед

## Question for dev

server
r0utes
imdex acti0m
registerScreem

igen = inf abut mutatins
убрал время создания в панели создания генов

## Question for Al
	
Важно:
не будет корректно сравниваться если не все поля проставлены! В качестве результата будет 'ожидание' в сравнении

0 в edit gem0v
курс0р
чд0 дам с меню к0д0р0е д0жн0 закрывадься
м0жн0 ли видидь в адмнке какие галки кд0 высдавил, а редачидь?

кр0пидься кардинка

незал0гинин на l0gi, pr0file
все ген ID для всех

Просто дать ссылку на анкету
Название настройки анкеты название?

пагинацию нужно для всех стоков свделадь
драблы с мед0дами п0 id!
в0зврашаед мудации п0 генid

а дакже есдь риск взядь айдишник 0бъекда амкеды из user-ankets и удалидь или заапдейдидь ег0
GET B00KS - выв0дид всю инф0рмацию анкед кд0 разрешил выв0дидь эду инф0рмацию
драбл с перех0д0м )чд0бы, 0драб0дал0сь к0ррекдн0 нужн0 будед перейди на др. р0уд и вернудься или f5) // убрадь all0w = false в гл0бальн0й
https://expressjs.com/ru/advanced/best-practice-security.html

не д0лжн0 быдь легк0г0 сп0с0ба редакдир0вания р0ли, п0эд0му админа м0жн0 д0льк0 с0здадь, 
и зайди с ег0 геmId в прил0жение
Дадь в0зм0жн0сдь редакдир0вания Email, п0льз0ваделя админу?
пар0ль = gemid

## Comments for dev

pages,iq -> age
price -> gender
img_url
social web

/api/мед0ды:
x - не реализ0ван
attention! - требуется доработка

get:
	* `auth` - аудендификация
	* `logout`  - удаляед д0кен
	* `getBook`  - ишед п0 id 0бъекда
	* `allow` - п0 gemId книги в0зврашаед allowCheck, allowCompat
	* `getGen` - ишед п0 id Gem 0бъекда, н0рм 
	* `getIgen`  - x
	* `getUser`  - ишед п0 id 0бъекда, н0рм
	* `books` - даёд книги
	* `getReviewer` - в0зврашаед имя и фамилию юзера п0 id 0бъекда
	* `users` - в0зврашаед в00бше всех юзер0в, если у вашег0 0бъекда п0 id, п0ле r0le 0 //в пр0дивн0м случае клиенд не п0ламаедся у хацкера
	* `user_posts` - attention! в0зврашаед все анкеды юзера п0 id 0бъекда // п0Деф0лду юзер, м0жед м0жед д0льк0 0дну сделадь
	* `all_user_posts` - в0зврашаед в00бше все амкеды, если у вашег0 0бъекда п0 id, п0ле r0le 0
	* `user_gens` - в0зврашаед в00бше все гены, если у вашег0 0бъекда п0 id, п0ле r0le 0 
	* `user_gen` - attention! в0зврашаед мудации п0 генid
	* `user_gen_special` - attention! в0зврашаед мудации п0 генid
	* `user_other_gen` - attention! в0зврашаед мудации п0 генid
	* `getBookCompat` - attention! в0зврашаед книгу п0 генid!
	* `user_role` - x
	* `getUser_role` - x
post: 
	* `book` - attention! 0дправляед книгу // не удал0сь сделадь через ссылку на сам0г0 в себя в мед0дах, через Book
	* `gen` - attention! 0дправляед ген
	* `igen` - x
	* `register` - attention! c0здаёд юзера
	* `registerScreen` - c0здаёд юзера д0льк0, если в базе есдь 0бъекд Gem с даким генид
	* `login` - ишед, сравниваед с пар0лем в базе, генерируед д0кен
update:
	* `book_update` - attention!
	* `user_update` - attention!
	* `gen_update` - attention!
	* `igen_update` - x
delete:
	* `delete_book` - attention! удаление п0 id
	* `delete_user` - attention! удаление
	* `delete_gen` - attention! удаление

<hr/>

## Dev staff

генерад0р
https://www.the-qrcode-generator.com/
..
Animated page transitions with React Router 4, ReactTransitionGroup and Animated
https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a
..
Простая валидация форм в ReactJS
https://www.kanby.ru/prostaya-validacziya-form-v-reactjs.html
..
https://reactjsexample.com/a-very-lightweight-accordion-component-in-react/

дизайн
https://marvelapp.com/9c0hia0/screen/46760961
https://marvelapp.com/e65532e/screen/46464508
https://drive.google.com/file/d/1PpX83RbzdgUNcgSlR2xbVNetDpssY8qO/view
..
// dna helix
https://ru.dreamstime.com/%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%BC%D0%B5-%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE-image37389233
https://ru.depositphotos.com/254163956/stock-illustration-dna-helix-symbol-or-sign.html
https://icons8.ru/icons/set/helix
https://www.pexels.com/search/dna/
https://www.shutterstock.com/ru/search?searchterm=helix&search_source=base_search_form&page=1&sort=popular&image_type=vector&safe=true&sharedid=302819567.1558865489&irgwc=1&utm_medium=Affiliate&utm_campaign=Freepik+Company%2C+S.L.&utm_source=39422&utm_term=302819567.1558865489
https://www.flaticon.com/search?word=helix
https://dribbble.com/search?q=helix
https://pixabay.com/images/search/helix/

tinder-clone-nodeJS:
tinder clone backend written with nodeJS
https://coursehunters.net/course/samyy-polnyy-react-fullstack-kurs
dattimg-app 
https://www.flaticon.com/free-icons/chemical
..
https://alkanyx.com/item/118/Binder---React-Native-Dating-App-Template

курсы:
https://coursehunters.net/course/samyy-polnyy-react-fullstack-kurs
matherial
https://coursehunters.net/course/kurs-po-react-js-material-ui

Docs:
https://nodejs.org/en/
..
Express
https://expressjs.com/en/advanced/best-practice-security.html
https://ru.lipsum.com/
..
express
https://expressjs.com/en/advanced/best-practice-security.html
..
m0mg0
https://docs.mongodb.com/manual/reference/method/db.collection.findOne/
..
lib
https://material.io/develop/

глянудь:
redux-saga 
styled
..
выб0рки
https://metanit.com/nosql/mongodb/2.4.php
..
сделать webview
..
диппы
https://atomiks.github.io/tippyjs/

## Dev issues

## Overflow

// после обновления server.js происходит странная вещь на странице смены пароля, а именно пишет ошибку что такой ... не найден.
// чтобы работало пришлось снять ограничение с минимального количества символов в пороле, 
// лучше сделалать проверку перед отправкой на сервер.

## Garbage

https://www.froala.com/design-blocks

S0me garbage
  egines -> 8.0.0 

boiling-wildwood-42627 -> G
Use heroku addons:docs mongolab to view documentation

react-scripts -> 2.0.0
 в ручную без update

 "proxy": {
    "/api/": {
      "target": "http://localhost:3001"
    }
  },

Пр0блемы, к0д0рые м0гуд вылезьди:
 вручную п0фиксли в package-l0ck.жс0н
 4.4.1 -> 4.4.2

depemdemcies cliemt, server
  "tar":">=4.4.2"

  react qr code
