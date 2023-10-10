# PRESS CTRL & F5 To run this file 
import os
import subprocess

# Step 1: Create a .env file in the /server/db folder
env_content = 'DATABASE_URL="mysql://<yourMysqlName>:<Password>@localhost:3306/<pairs>"'
env_path = os.path.join('server', 'db', '.env')
with open(env_path, 'w') as env_file:
    env_file.write(env_content)

# Step 2: Run Migrations
subprocess.run(['npx', 'prisma', 'migrate', 'dev'], cwd='server')

# Step 3: Generate Prisma Client
subprocess.run(['npx', 'prisma', 'generate'], cwd='server')

# Step 4: Start Next.js Development Server
subprocess.run(['npm', 'run', 'dev'], cwd='my-app')

print('Setup complete. Next.js application is running locally.')
