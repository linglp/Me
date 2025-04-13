# Visit portfolio site
Visit the portfolio site [here](https://linglp-portfolio-f62c063d84a8.herokuapp.com/)

# Run application locally 
Run `npm install`
Run `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Deploy to Heroku
Before deploying to Heroku, make sure that the application can be built and served locally. 

For making sure `npm build` works, run `npm run build`, and then run `serve -s build`. Make sure that everything is working there. For more information, see [Deployment -> Static Server](https://create-react-app.dev/docs/deployment/#static-server)

Then, commit all your local changes to Github and push to your remote branch. 

Follow the following steps for Heroku deployment: 
1. Register a Heroku account and add payment methods. 
2. Install Heroku [CLI command interface](https://devcenter.heroku.com/articles/heroku-cli)
3. Follow the heroku guideline [here](https://blog.heroku.com/deploying-react-with-zero-configuration). Note: when you are deploying using your local branch, the command to deploy should be: `git push heroku <Your local branch>:main`
4. Rename application if needed. See instructions [here](https://devcenter.heroku.com/articles/renaming-apps#updating-git-remotes)
Note: You should be able to see your app in Heroku dashboard!

# Deploy to Github Pages
Follow the instructions [here](https://github.com/gitname/react-gh-pages) to deploy to github pages. 


# References
The portfolio site was created thanks to the guidance provided by this Youtube video [here](https://www.youtube.com/watch?v=bmpI252DmiI). I tweaked some stylings and customized it based on my needs. 