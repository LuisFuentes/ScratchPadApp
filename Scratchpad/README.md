Scratch Pad App
======================
Scratchpad: (noun) a notepad, or a small fast memory for temporary storage of data.

Scratchpad is a light-weight web application that allows you to type quick notes into
the app. Dont fear - The app will auto-save your notes for you into the browser 
in case you lose connection or accidentally close the page.


Setting up the app
-------------------
Install Docker Desktop, Heroku CLI, and .net core 3.1 LTS for Windows.
Clone the github repository.
Launch powershell in the directory of the project

The Dockerfile contains the installation for Docker:
```bash
docker build -t scratchpad .
```

Tag the Docker source image into Heroku registry:
```bash
docker tag scratchpad registry.heroku.com/scratch-pad-app/web
```

Use Heroku CLI to login (enter your email and password):
```bash
heroku container:login
```

Push the container to Heroku site. If successful, release it: 
```bash
heroku container:push web -a scratch-pad-app
heroku container:release web -a scratch-pad-app
```

View the site:
```
<your-scratch-pad-app>.heorkuapp.com
```
