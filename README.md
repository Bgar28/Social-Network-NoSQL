# Social-Network-NoSQL
 ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
 ![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
 ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  
  ## Description 
  
  This is a back-end application for a social network that allows users to share their thoughts, react to friend's thoughts, and create a friends list using the API that has been created.  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
   
  ## Installation
Clone this repository. Install the dependecies by running this command:
```
npm i
```
    
    Then start the application using nodemon by running this command:
    ```
    npm run dev
    ```

    You then can create users for your social network using the corresponding POST route. You can update a user's information using the corresponding PUT route, as well delete a user using the corresponding DELETE route. Additionally, you can add a friend or delete that friend to a user's key value by using the corresponding POST/DELETE route. Lastly, you can get all the users (with friends) or one individual user by using the corresponding GET route. <br>
    Also, you can add thoughts for a user (think tweet or Facebook post) by using the corresponding POST route. You can update that by using the corresponding PUT route and delete that thought using the corresponding DELETE route. You can have a user react to one's thought by using the corresponding POST route and you can delete the reaction by using the corresponding DELETE route. Lastly, you can get all the thoughts (with reaction) or one individual thought by using the corresponding GET route.


  ## Usage

  This application utilizes a MongoDB database which is popular for its flexibility with unstructured data and its speed with large amounts of data. It uses the Mongoose package which is a MongoDB object modeling tool which works in an asycronchronous environment. Additionally, it uses the Express.js and Moment packages. Below, I have attached screenshots showing the socialnetworkDB within MongoDB Compass, as well as Insomnia.  <br>
  ![screenshot](https://github.com/Bgar28/Social-Network-NoSQL/blob/main/assets/users.png) <br>
  ![screenshot](https://github.com/Bgar28/Social-Network-NoSQL/blob/main/assets/thoughts.png)
 

  ## License
  ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg) Licensed under MIT.

  

  ## Questions?

  Any questions or concerns, please contact me via the information provided below:

  Github: Bgar28 <br> https://github.com/Bgar28/ <br>
  ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

  Or

  Email: briangarlandk@gmail.com <br>
  ![GMAIL](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)