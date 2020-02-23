```bash
# Install vuepress globally
yarn global add vuepress
# OR
npm install -g vuepress

# Clone this repo
git clone https://github.com/ManUtopiK/silkaj_doc.git

#  Go to docs
cd silkaj_doc/docs

# Start writing.
vuepress dev
# Go to http://localhost:8080/ and edit markdown file. Automatic hot-reload, compiling, linting and webpack...

# Build
vuepress build
# Deploy build in .vuepress/dist to any static hosting.
```
All images are build with [https://carbon.now.sh](). You can use the same design with `carbon-config.json` file.

In carbon app, choose "Presets > Misc > Import config".