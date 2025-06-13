# Use official Node LTS image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy all files into the container
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Expose the default Next.js port
EXPOSE 3000

# Start the dev server
CMD ["npm", "run", "dev"]
