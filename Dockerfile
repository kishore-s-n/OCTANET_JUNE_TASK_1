# First let's select a node module version that 
# Comes with a alpine linux os as a base image
FROM node:22-alpine


# Adding a user group to make it confilct less and useful to manage the files later
# This is just a best practice that we can use if required
RUN addgroup app && adduser -S -G app app

# Change the root user to app which is the user that we just created
USER app

# Here we are assigning the work directory 
# Here the files will be stored and can be accessed throught the docker container
WORKDIR /app

# First we copy the package.json and the package-lock.json 
# These files contains the dependencies which we have to install to run the app
COPY package*.json ./

# Now we change back to the root user to install the dependencies globally
USER root

# This line says that we are changing the owner from root to app
# Chown means change owner...
RUN chown -R app:app .

# This is where we change back to app to continue the installation and go ahead 
USER app

# Here we run the npm install command 
# This is run to install the listed dependencies in package.json
RUN npm install

# Here is the main part where we copy all the files from our system to the docker image
COPY . .

# This line exposes the running port to the system that runs the created image
EXPOSE 5173

# This starts the running process
CMD npm run dev
