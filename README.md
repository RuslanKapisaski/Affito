# Affitо

**Affitо** is a full-stack property management application built with **Node.js, MongoDB, React.js, and JWT**. It helps landlords manage their properties, tenants, and rental operations efficiently. The app supports both long-term and short-term rentals and integrates with major OTA platforms.

---

## Features

- User Roles: Landlord & Tenant
- Property Categories & Listings
- Rental Management (Long-term & Short-term)
- Income Tracking
- Real-time Chat Module
- Integration with Airbnb, Booking.com, PochivkaBG, TripAdvisor
- Notifications & Calendar Sync

---

## Tech Stack

- Backend: Node.js, Express, MongoDB, JWT
- Frontend: React.js
- Real-time Chat: Socket.io
- Integrations: APIs and iCal for OTA platforms

---

## Project Structure

```
/api        – Backend (Node.js + Express + Mongoose models)
/client     – Frontend (React.js)
.gitignore  – Files to ignore in Git
LICENSE     – MIT license
README.md   – Project documentation
```

---

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/affito.git
cd affito
```

2. Install backend dependencies:
```bash
cd api
npm install
```

3. Setup environment variables (.env):
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/affito
JWT_SECRET=your_secret_key
```

4. Start the backend server:
```bash
npm run dev
```

5. Start the frontend:
```bash
cd ../client
npm install
npm start
```

---

## 📜 License

MIT License – see [LICENSE](LICENSE) for details