# TodoCraft
![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/f06f50fa-2bd0-4075-a195-c20d8ee78b42)

TodoCraft is a powerful and intuitive Todo application designed to help you manage your tasks and projects efficiently. With TodoCraft, you can not only create individual todos, but also group them into projects for better organization and tracking.

Key Features:

- **Project Creation**: Create distinct projects for different areas of your life or work. Each project can hold its own set of todos, helping you segregate tasks based on their context.

- **Todo Management**: Within each project, you can create, update, and delete todos. Each todo can have a title, description, giving you full control over your tasks.

- **Markdown Export**: One of the standout features of TodoCraft is its ability to export todos as a markdown file. This allows you to share your tasks with others in a universally readable format, or to keep a static copy of your tasks for reference.

Whether you're managing a complex work project or just trying to keep track of daily tasks, TodoCraft provides the tools you need to stay organized and productive.

## Project Setup

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose installed on your machine. You can download Docker [here](https://www.docker.com/get-started) and Docker Compose [here](https://docs.docker.com/compose/install/).


### Installation

1. Clone the repository:

   ```sh
    git clone https://github.com/pranavmadhu01/todocraft

   ```

2. Navigate to the project directory:

   ```sh
   cd todocraft

   ```

3. Run the container: 

   ```sh
   docker-compose up

   ```
   or
   ```sh
   docker compose up

   ```
   *If you're running the container on Linux or Ubuntu and encounter permission issues, you may need to run the command with `sudo`*

5. Access the Application:

   Once the Docker container is up and running, you can access the application in your web browser. Simply navigate to the following URL:

   ```sh
   http://localhost:3000/
## Project Walkthrough

Once you have the application running, you can follow these steps to use its features:
![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/ebee76db-9569-47bf-8aac-df1fc63b2961)

1. **Sign Up:**

   If you're a new user, you'll need to create an account. Click on the "Get Started" button on the home page, fill in your details, and submit the form.
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/8d89ae1b-a5fa-4595-abba-f855e81d7d13)
   
3. **Sign In:**

   Login with your created account to view your dashboard
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/28e84682-48b5-4194-bd03-c7f385e2a432)
   
5. **Create a Project:**

   After logging in, you'll be taken to your dashboard. Click on the "Add Project" button, enter a name for your project, and click "Submit".
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/c9fa4597-b21d-418d-9a69-eca1c342ee70)


7. **Add Todos to the Project:**

   Once you've created a project, you can start adding todos. Click on your project to open it, then click on the "Add Todo" button. Fill in the details of your todo (like its title and description), and click "Submit".
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/c01e4fcd-caec-45e6-b0d9-815d492df3fc)

9. **Export Project:**

   If you want to export your project as a markdown file, go to your project page and click on the "Export" button. This will preview the markdown with all your todos which you can download as a file.
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/350ddb94-69d3-441a-8c9e-40140fc96b13)
   ![image](https://github.com/pranavmadhu01/todocraft/assets/84242267/bb1bb475-5aad-45d4-8f63-5983ff0aa7d3)



Remember, you can create multiple projects and add as many todos as you want to each project. Enjoy using TodoCraft!

