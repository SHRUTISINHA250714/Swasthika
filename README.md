# Swasthika — AI-Powered Mental Health Rehabilitation Platform

## Overview
**Swasthika** is an AI-driven platform that integrates clinical psychology principles with modern artificial intelligence to assist users in their mental health recovery journey. It supports individuals dealing with conditions such as PTSD, addiction, social anxiety, depression, binge eating, obesity, and more.

## Features
- **Preliminary Mental Health Quiz**: Assists in detecting potential mental health conditions.
- **AI-Powered Chatbot**: Simulates therapeutic conversations based on user input.
- **Gamified Recovery Journey**: Tracks progress through badges, rewards, and milestones.
- **Custom Diet Chart Generation**: Provides diet plans based on mental health conditions and physical requirements.
- **Privacy-First Architecture**: Ensures anonymized data flow to protect user privacy.

## Video Demo

[![Swasthika Demo Video](https://img.youtube.com/vi/pXk0scN35GI/0.jpg)](https://www.youtube.com/watch?v=pXk0scN35GI)

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, TypeScript
- **Backend**: FastAPI
- **AI Model**: Gemini API (Google AI)
- **Database**: PostgreSQL
- **Authentication & Email**: Resend API
- **Gamification Engine**: Custom logic using state-based progression

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SHRUTISINHA250714/Swasthika.git
cd Swasthika
```

### 2. Create a Vitual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate the environment
# For Windows:
venv\Scripts\activate

# For macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Run the Backend

```bash
cd FastAPIBackend
uvicorn main:app --reload
```

### 3.In a new terminal Run the Frontend

```bash
cd ..
npm install
npm run dev

```

## Contributing

We welcome contributions in the following areas:

- Prompt engineering & AI fine-tuning
- UI/UX for the gamified modules
- NLP improvements for chatbot interaction
- Integration of voice support and accessibility features

### To contribute:

- Fork this repo
- Create a branch: `git checkout -b feature-name`
- Submit a pull request

## License

[MIT](LICENSE)

---

