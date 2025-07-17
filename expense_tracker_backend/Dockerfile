# Use official Node image
FROM node:18-alpine

# Set working dir
WORKDIR /app

# Copy package files & install
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]
# Use nodemon for development
# Use node for production