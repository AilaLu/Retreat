# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Transpile TypeScript to JavaScript
RUN npm run build

# Expose the app port (adjust to your app's actual port)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
