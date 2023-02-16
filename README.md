#### step instalation jes

``` 
npm install jest --save-dev
```
#### edit package.json file
```
"scripts": {
    "test": "jest"
  }
 ```
#### install babel bc jest not support js module
```
npm install --save-dev babel-jest
```
#### edit package.json again, add below scripts
```
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
```
#### create babel.config.json
#### install babel-jest
```
npm install @babel/preset-env --save-dev
```
#### add this to babel.config.json
```
{
  "presets": ["@babel/preset-env"]
}
```

#### to run test
```
npx jest
```
