System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@^1.3.1",
    "angular-mocks": "github:angular/bower-angular-mocks@^1.3.1"
  }
});

System.config({
  "versions": {
    "github:angular/bower-angular": "1.3.1",
    "github:angular/bower-angular-mocks": "1.3.1"
  }
});

