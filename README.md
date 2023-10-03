"""
# PairsForWala

This is a project that generates pairs of two people. It uses Prisma and Next.js.

## Getting Started

### Prerequisites

- **Node.js and npm**: Make sure Node.js and npm are installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository:**
    git clone https://github.com/Mohamedazizmrabet/PairsForWala.git
    cd PairsForWala

2. **Create a .env file in the project directory.**

3. **Add your database connection URL to the .env file.**
Go to the folder server and then db add.env file and add like this: "DATABASE_URL="mysql://<yourMysqlName>:<Password>@localhost:3306/<pairs>"

4. **Run Migrations:**
    npx prisma migrate dev

5. **Generate Prisma Client:**
    npx prisma generate

6. **Start the Next.js Development Server:**
    npm run dev

Now, the Next.js application should be running locally. You can access the website by navigating to http://localhost:3000 in your web browser.
"""