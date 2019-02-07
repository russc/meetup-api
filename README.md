This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Final Demo](https://reactjs-dallas-upcoming.herokuapp.com/)

## Planning and Development
### 2/2/19 and 2/3/19 (2 hours)

* Reading through challenge requirements
* Getting familiar with meetup api docs and api key specifics
* Initializing new CRA, Github Repo, etc.
* Considering the pros and cons of using fetch vs axios [I read this](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5).  
* Testing api endpoints with both.  
* Seeing cors errors with both options, and Googling it. [Found this](https://github.com/meetup/api/issues/130) and decided to go with fetch-jsonp.
### 2/4/19 (2 hours)
* Completing async/await calls for both endpoints to save data on state.
* Building out main description section and summary sidebar.
* Customizing MUI components with styled components.
* Building out members section and tweaking layout.
* Adding in group image, and various icons for sidebar.
* Adjusting css and font styles
* Adding pin to map component for Robert Half location
### 2/6/19 (2 hours)
* Discovering that I can use Mike’s head as a pin for Robert Half location, and following through with it.
* Adding tooltip to Mike’s head.
* Cleaning up styles
* Adding polyfills
* Deploying to heroku

## Dependencies
* [Material UI core, icons, lab](https://material-ui.com/) 
  * I use this on most React projects as a default.
* [Polyfills](https://github.com/stefanpenner/es6-promise) 
  * This was needed for IE11 Promises and Object.assign() 
* [Date FNS](https://date-fns.org/)
  * I have used this as well as moment.js on React and Vue projects.  Moment is a very large library and I prefer the leaner aspect of date-fns.
* [Fetch JSONP](https://github.com/camsong/fetch-jsonp)
  * I chose this due to the cors issues and recommendations on the relevant github issue.
* [Google Map React](https://github.com/google-map-react/google-map-react) 
  * I wanted to display a map of the meetup location and I liked this implementation.
* [Content Loader](https://github.com/danilowoz/react-content-loader) 
  * I have used this on other React projects and I like the editor [here](http://danilowoz.com/create-content-loader/)
* [Styled Components](https://www.styled-components.com) 
  * This is my personal preference among the multitude of React css options out there.  I like how MUI can be integrated with it as well.
* [React HTML Parser](https://www.npmjs.com/package/react-html-parser) 
  * The meetup api returned a string of html for the description so I grabbed this for that specific purpose.
