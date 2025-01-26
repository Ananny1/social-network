# social-network
Followers: Users can send follow requests, accept/decline them, or follow directly for public profiles.
Profile: Includes user info, posts, activity, followers, and following. Users can switch between public and private profiles.
Posts: Users can create posts and comments, optionally adding images or GIFs. Posts can be public, almost private (followers only), or private (specific followers).
Groups: Users can create and join groups, invite others, request membership, and create events (with RSVP options).
Chat: Private and group chats with real-time messaging via WebSockets, including emoji support.
Notifications: Alert users for follow requests, group invitations, membership approvals, events, and other interactions.
Frontend
Built with a JavaScript framework (e.g., Next.js, Vue.js).
Handles user interactions, makes requests to the backend, and ensures responsiveness.
Languages: HTML, CSS, JavaScript.
Backend
Server: Processes requests and serves responses.
App: Core logic, including authentication, image handling, and WebSocket connections.
Database: SQLite for data storage with structured migrations.
Authentication
Users must register (email, password, name, DOB, optional avatar/nickname/about me) and login.
Implemented with sessions and cookies for persistent login.
Database and Migrations
SQLite for data storage.
Organized migration system (up/down SQL scripts) to manage schema changes.
Docker
Containerized frontend and backend for deployment.
Containers communicate via appropriate ports.
Notifications
Real-time alerts for follow requests, group invitations, membership approvals, events, etc.
Separate notification and chat systems.
