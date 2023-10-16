const { execSync } = require('child_process');
const fs = require('fs');

try {
    // Step 1: Create a .env file in the /server/db folder
    const envContent = 'DATABASE_URL="mysql://<yourMysqlName>:<Password>@localhost:3306/<pairs>"';
    const envPath = '../server/db/.env';
    fs.writeFileSync(envPath, envContent);

    // Step 2: Install Server Dependencies
    execSync('npm i', { cwd: '../server' });
    
    // Step 4: Generate Prisma Client
    execSync('npx prisma generate', { cwd: '../server' });
    // Step 3: Run Migrations
    execSync('npx prisma migrate dev', { cwd: '../server/db' });


    // Step 5: Install Client Dependencies
    execSync('npm i', { cwd: './my-app' });

    // Step 6: Start Next.js Development Server
    execSync('npm run dev', { cwd: '../my-app' });

    console.log('Setup complete. Next.js application is running locally.');
} catch (error) {
    console.error('Error:', error.message);
}
