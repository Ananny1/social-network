# Social Network

## Frontend
### Overview
Frontend development is the art of creating sites and web applications that render on the "client-side." It includes everything that users experience directly, such as:
- Text colors and styles
- Images, graphs, and tables
- Buttons and navigation menus

Frontend focuses on:
1. Making requests to the backend to retrieve or store data.
2. Ensuring responsiveness and performance.

Languages used: HTML, CSS, and JavaScript.

### Framework
You must use a JavaScript framework to simplify development and implementation of features. Recommended frameworks include:
- Next.js
- Vue.js
- Svelte
- Mithril

**Note:** Frameworks differ from libraries. Frameworks provide the groundwork for your project, while libraries are collections of code snippets for specific tasks.

## Backend
### Overview
The backend handles incoming requests, processes them, and generates responses. It consists of:
1. **Server**: The entry point for incoming requests.
2. **App**: Core logic for processing requests and interacting with the database.
3. **Database**: Organizes and stores data.

### Application Logic
The backend application should include middleware such as:
1. **Authentication**: Use sessions and cookies to authenticate users.
2. **Image Handling**: Support JPEG, PNG, and GIF formats. Store images in the file system and save file paths in the database.
3. **WebSocket**: Manage real-time connections for private chats.

**Web Server:** Use Caddy (written in Go) or create your own.

### SQLite
Use SQLite to organize and store data. Create an Entity-Relationship Diagram (ERD) for better database performance.

#### Migrations
Migrations should:
1. Automatically create necessary tables during application startup.
2. Follow the folder structure below:

```
backend
├── pkg
│   ├── db
│   │   ├── migrations
│   │   │   └── sqlite
│   │   │       ├── 000001_create_users_table.down.sql
│   │   │       ├── 000001_create_users_table.up.sql
│   │   │       ├── 000002_create_posts_table.down.sql
│   │   │       └── 000002_create_posts_table.up.sql
│   └── sqlite
│       └── sqlite.go
└── server.go
```

Use the `golang-migrate` package or another suitable package.

## Docker
Containerize the project with two Docker images:
1. **Backend Container**: Runs server-side logic and interacts with the database.
2. **Frontend Container**: Serves HTML, CSS, and JavaScript to users.

Ensure appropriate ports are exposed for communication.

## Authentication
### Registration Form
Users must provide:
- Email
- Password
- First Name
- Last Name
- Date of Birth
- Avatar/Image (Optional)
- Nickname (Optional)
- About Me (Optional)

### Login
Users stay logged in until they choose to log out. Implement sessions and cookies.

## Features
### Followers
Users can:
- Follow/unfollow others.
- Accept/decline follow requests for private profiles.

### Profile
Profiles include:
- User information (excluding password).
- User activity (posts).
- Followers and following lists.

Profiles can be public or private. Users can toggle visibility.

### Posts
Users can create posts and specify privacy levels:
1. **Public**: Visible to all users.
2. **Almost Private**: Visible to followers.
3. **Private**: Visible to selected followers.

### Groups
Users can:
- Create groups with a title and description.
- Invite others or accept join requests.
- Post and comment within groups.

Groups can also have events with:
- Title
- Description
- Date/Time
- Options (e.g., Going/Not Going)

### Chat
Users can:
- Send private messages to followers.
- Use WebSockets for real-time messaging.
- Access group chat rooms.

### Notifications
Users receive notifications for:
- Follow requests (for private profiles).
- Group invitations.
- Group join requests (for group creators).
- Event creation (for group members).

