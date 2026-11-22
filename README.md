<div align="center">

  ### my very own **portfolio** 💾️
  My personal website acting as my résumé, showing my projects, skills, and personal infos

  [features](#features)  - [how it's done](#hiw) - [about](#about) - [screenshots](#screenshots)
</div>

---------------


### ✅️ features <a id='features'></a>
- floating windows manager like thought javascript and css
- shows skills, projects, personal infos, etc
- monochrome theme
- custom fonts
- scrollable to see more windows
- (planned) better phone support

### 💻️ how it's done <a id='hiw'></a>
It's vanilla html/css/js code, without the help of any framework.

**Edit it yourself :**

```bash
cd ~
git clone https://github.com/t0qen/portfolio
cd portfolio
```
Here you can easly modify the html/css/js.
The [assets](https://github.com/t0qen/portfolio/tree/master/assets) folder contains all images related to README, and the [images](https://github.com/t0qen/portfolio/tree/master/images) contains every images that are on the **website**.

**Run it yourself :**

Just go in *~/portfolio* (created above) and open *index.html* in your fav browser.
I personally host it with an [nginx](https://nginx.org/en/) server, here is my docker compose :
```docker-compose
services:
  web:
    image: nginx:alpine
    container_name: nginx
    restart: unless-stopped
    ports:
      - "8070:80"
    volumes:
      - /srv/data/utility/website/srv:/usr/share/nginx/html:ro
```
Then, the website is exposed with a cloudflare tunnel.

### ✏️ about <a id='about'></a>
**Responsive design**

I hadn't the level and the patience to create a natural rasponsive design so instead of make something bad visually I just set everything to a fixed size in pixel and made possible to zoom/dezoom.

**Why did I made this ?**


To quickly introduce myself on the internet and share my works and my skills. After more dev and polish it might even be showed to a future employer.

### 📷️ screenshots <a id='screenshots'></a>
**New look**


<img src='assets/4.png'>
<img src='assets/5.png'>
<img src='assets/6.png'>
------------


**Old one**
<img src='assets/1.png'>
<img src='assets/2.png'>
<img src='assets/3.png'>

