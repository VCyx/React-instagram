Описание проэкта:

1. Берлоус Дмитрий

##### Framework - Express.js
##### DataBase - PostgreSQL
##### ORM - Sequelize 
##### CORS - Cors
##### Окружение - Dotenv
##### JEST - для тестирование 
##### supertest - библиотека для отправки запростов из тестов
##### JWT Token
##### Sequelize 
##### PostgreSQL



### Запросы  к базе 
#### получить все карточки  ! GET
- http://localhost:7000/api/post

#### получить  карточку по id  ! GET
- http://localhost:7000/api/post/{id}

#### записать  карточку  ! POST
- http://localhost:7000/api/post
###### @ params 
  - name ( название поста)
  - img (передаем картинку)
  
##### получит с лимитом GET
- http://localhost:7000/api/post?limit={лимит}&page={страница}

###### @ для фронта сервер отдает  количество постов "count"
###### @ для фронта сервер отдает "rows" масив с постами

  


