# Project-mgmt-api-Hactoberfest-2022


## How to contribute to this project 

Contributors are expected to write code for the routes mentioned in `routes/main.routes.js` file.<br>
Starter code is already provided in `controllers/main.controllers.js` file.<br>

## Format for Response

* Successful response -> 
```
res.status(statuscode).json({success: true, data:your response goes here})
```

* Unsuccessful response ->
```
res.status(statuscode).json({success: false, error: err.message | custom error message })
```

* statuscodes
```
200 -> successful query
400 -> Invalid id
404 -> ID not found
500 -> Internal server error <catch block error>
```
  
  

## Getting started

## How to create an issue?

### New Issue

if you find any new issue or any bug in the code itself then,
1. Click on  [new issue](https://github.com/Google-Developer-Student-Club-DMCE/project-mgmt-api-hactober2022/issues/new/choose) present on the top right side of the [issue](https://github.com/Google-Developer-Student-Club-DMCE/project-mgmt-api-hactober2022/issues/new/choose) tab of this repository.
2. Add title and discription of issue that you want to raise and ask the maintainer to assign the issue.
3. Click on Submit New Issue option.
Now you have raised a new issue, wait for the maintainer to assign it and you are good to go.

### Existing Issue

if you want to work on an existing issue that has not been assigned then,

 1. Go in the  [issue](https://github.com/Google-Developer-Student-Club-DMCE/project-mgmt-api-hactober2022/issues) tab of this repository.
 2. Choose the issue that you want to work on.
 3. Click on that issue and in the comments ask the maintainer to assign you that particular issue.
 4. Lastly click on comment and wait for the issue to be assigned by the maintainer.
 

## How to create a Pull Request?
 
 
 Once the issue is assigned
  
* Fork this repository (Click the Fork button in the top right of this page, click your Profile Image)
* Clone your fork down to your local machine

```markdown
git clone https://github.com/your-username/project-mgmt-api-Hactoberfest-2022.git
```

* Create a branch

```markdown
git checkout -b branch-name
```

* Make your changes (choose from any task below)
* Fix the issue
* Commit and push

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

* Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)
* Wait for your PR review and merge approval!
* ⭐ repository if you had fun!
