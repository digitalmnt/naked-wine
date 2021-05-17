# naked-wines

# Challenges
I found it hard to find a good source/api that provides free data on wines. I was able to find one github repo that had a large json file and I added an api service to query that data. Unfortunately its has 10k objects and the requests were too slow to use. I left a request example in ```./src/services/api``` to display a simple way I would have used it to provide data to the page.

To overcome this I grabbed the first 20ish values from the file and included them via a local JSON file.

It was also interesting to not use a css library. We use tailwind at my current position and rely on it for most styling. It was nice to dust the old media query skills up 😊

Other than that everything else was pretty straightforward. Looking forward to any feedback. Thanks for looking!
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
