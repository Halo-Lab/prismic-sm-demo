## Get stagted

### Prismic/Slice Machine
- https://www.slicemachine.dev/ - новая версия Prismic

### Начало работы. Создание и подключение репозитория Prismic
1. Регистрируемся https://prismic.io/ 
2. Создаём prismic-репозиторий (кнопка Start building, it's free) 
    - указываем имя репозитория  
    - выбираем используемую технологию (Next.js)
    - выбираем тарифный план (Free)
    - кликаем на кнопку внизу "Create repository"
3. Выбираем язык контента
4. Если next.js проект ещё не создан, создаём. Название проекта произвольное. 
Для этого на компьютере в терминале выполняем команду  
```npx create-next-app project-name```
5. Подключаем prismic-репозиторий, созданный в п.2, к проекту  
    - заходим в папку next.js проекта
    - выполняем командy  
    ```npx @slicemachine/init --repository prismic-repository-name```
6. Настройка Prismic
    - Документация: https://prismic.io/docs/technologies/setup-nextjs
    - Видео от разработчиков CMS (18 минут): https://youtu.be/jSa_uskwaE0

    1) Устанавливаем библиотеку @prismicio/next
    ```npm install @prismicio/next```
    2) Добавляем в корень проекта файл `prismicio.js`
    - содержание файла копируем из [документации](https://prismic.io/docs/technologies/setup-nextjs#configure-prismic)
    3) В файле prismicio.js настраиваем функцию `linkResolver()`, которая отвечает за роутинг. Пример:
        ```js
          export function linkResolver(doc) {
            switch (doc.type) {
                case 'homepage':
                return '/'
                case 'blog':
                return `/blog`
                case '/blog' && doc.uid:
                return `/blog/${doc.uid}`
                default:
                return '/'
            }
          }
        ```
    4) Редактируем файл  `_app.js`
    Заменяем содержимое файла `/pages/_app.js` на указанное в [документации](https://prismic.io/docs/technologies/setup-nextjs#add-prismicprovider-and-prismicpreview)
    5) Создаём файл `slice-simulator.jsx` в папке pages
    Содержание файла копируем из [документации](https://prismic.io/docs/technologies/setup-nextjs#create-slice-simulator-page) 
    6) Редактируем файл `sm.json` 
    Добавляем в файл `sm.json` строку
    ```"localSliceSimulatorURL": "http://localhost:3000/slice-simulator"```  
7. Запускаем проект
    Для этого в папке проекта открываем **два** терминала и выполняем команды   
    ```npm run dev```  
    ```npm run slicemachine```  
    По адресу http://localhost:3000/ открываем проект   
    По адресу http://localhost:9999/ открываем `prismic/slicemachine`  
8. Добавление данных в CMS и их отображение в проекте пошагово объясняются в статьях в блоге Prismic:
    - [The Easiest Way to Add a CMS to Next.js](https://prismic.io/blog/easiest-way-add-cms-nextjs)
    - [How to Implement a Scalable CMS with Slices](https://prismic.io/blog/scalable-cms-tutorial)
