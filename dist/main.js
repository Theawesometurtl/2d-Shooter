/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/Bullet.js":
/*!***************************!*\
  !*** ./src/app/Bullet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/app/globals.js\");\n\r\n\r\nclass Bullet {\r\n    static numberOfBullets = 0;\r\n\r\n    constructor(angle, x, y, speed, type, colour) {\r\n        this.type = type;\r\n        this.colour = colour;\r\n\r\n        Bullet.numberOfBullets++;\r\n        this.bulletNumber = Bullet.numberOfBullets\r\n        \r\n        this.angle = angle;\r\n        this.speed = speed;\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        }\r\n        this.xSpeed = Math.cos(angle) * speed;\r\n        this.ySpeed = Math.sin(angle) * speed;\r\n        this.radius = 2;\r\n        this.killed = false;\r\n    }\r\n    update() {\r\n        this.position.x += this.xSpeed;\r\n        this.position.y += this.ySpeed;\r\n        let x = this.position.x\r\n        let y = this.position.y\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.cameraLock === true) {\r\n            x += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerX;\r\n            y += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerY;\r\n        }\r\n        if (x > canvas.width  || x < 0 ||\r\n            y > canvas.height || y < 0) {\r\n                for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList[this.type].length; i++) {\r\n                    if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList[this.type][i].bulletNumber === this.bulletNumber) {\r\n                        _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList[this.type].splice(i, 1); \r\n                    } \r\n                }\r\n        }\r\n    }\r\n    draw() {\r\n        let x = this.position.x\r\n        let y = this.position.y\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.cameraLock === true) {\r\n            x += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerX;\r\n            y += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerY;\r\n        }\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.colour;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 5;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = this.colour;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/Bullet.js?");

/***/ }),

/***/ "./src/app/Enemy.js":
/*!**************************!*\
  !*** ./src/app/Enemy.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/app/globals.js\");\n/* harmony import */ var _utils_changeScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/changeScore.js */ \"./src/app/utils/changeScore.js\");\n\r\n\r\n\r\nclass Enemy {\r\n    static numberOfEnemies = 0;\r\n    static radius = 12;\r\n\r\n    constructor(xpos, ypos) {\r\n        this.type = 'normal';\r\n\r\n        this.colour = 'red';\r\n        this.position = {x : xpos, y : ypos};\r\n        this.speed = 3;\r\n        this.radius = Enemy.radius;\r\n        Enemy.numberOfEnemies ++;\r\n        this.enemyNumber = Enemy.numberOfEnemies; \r\n        \r\n    }\r\n    draw() {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\r\n        let x = this.position.x\r\n        let y = this.position.y\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.cameraLock === true) {\r\n            x += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerX;\r\n            y += -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y + _globals_js__WEBPACK_IMPORTED_MODULE_0__.centerY;\r\n        }\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.colour;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 5;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = '#003300';\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\r\n\r\n    }\r\n    update() {\r\n        this.move();\r\n        this.collisionCheck();\r\n    }\r\n\r\n    move() {\r\n        let xDistance = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x - this.position.x;\r\n        let yDistance = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y - this.position.y;\r\n        let distance = Math.abs(xDistance) + Math.abs(yDistance);\r\n        this.position.x += (xDistance / distance) * this.speed;\r\n        this.position.y += (yDistance / distance) * this.speed;\r\n    }\r\n    collisionCheck() {\r\n        for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet?.length; i++) {\r\n            if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet[i].position.x > this.position.x -this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet[i].position.x < this.position.x + this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet[i].position.y > this.position.y - this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet[i].position.y < this.position.y + this.radius) {\r\n                    _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.playerBullet[i].killed = true;\r\n                    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy.length; i++) {\r\n                        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy[i].enemyNumber === this.enemyNumber) {\r\n                           _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy.splice(i, 1);\r\n                           (0,_utils_changeScore_js__WEBPACK_IMPORTED_MODULE_1__.changeScore)(1); \r\n                        } \r\n                    }\r\n            }\r\n        }\r\n\r\n        if (Math.abs(this.position.x - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x) +\r\n            Math.abs(this.position.y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y) < \r\n            _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.radius + this.radius) {\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.hurt();\r\n            for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy.length; i++) {\r\n                if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy[i].enemyNumber === this.enemyNumber) {\r\n                   _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy.splice(i, 1);\r\n                   (0,_utils_changeScore_js__WEBPACK_IMPORTED_MODULE_1__.changeScore)(1); \r\n                } \r\n            }\r\n        }\r\n        \r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/Enemy.js?");

/***/ }),

/***/ "./src/app/Player.js":
/*!***************************!*\
  !*** ./src/app/Player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _utils_gameEnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/gameEnd */ \"./src/app/utils/gameEnd.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ \"./src/app/globals.js\");\n/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bullet.js */ \"./src/app/Bullet.js\");\n\r\n\r\n\r\nclass Player {\r\n    constructor(xPos, yPos) {\r\n        this.position = {\r\n            x : xPos,\r\n            y : yPos\r\n        };\r\n        this.velocity = {\r\n            x : 0,\r\n            y : 0\r\n        };\r\n        this.speed = 3;\r\n        this.radius = 10;\r\n        this.gunRadius = 2;\r\n        this.drag = 0.7;\r\n        this.maxSpeed = 12;\r\n        this.gunAngle = 0;\r\n        this.bulletSpeed = 12;\r\n        this.life = 3;\r\n        this.spinAttackTimer = 50;\r\n        this.spinAttackAngle;\r\n        this.invulnerable = false;\r\n    }\r\n    draw() {\r\n        let x;\r\n        let y;\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.cameraLock === true) {\r\n            x = _globals_js__WEBPACK_IMPORTED_MODULE_1__.centerX;\r\n            y = _globals_js__WEBPACK_IMPORTED_MODULE_1__.centerY;\r\n        } else {\r\n            x = this.position.x;\r\n            y = this.position.y;\r\n        }\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = 'green';\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fill();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = 5;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = '#003300';\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.closePath();\r\n\r\n        let gunX = Math.cos(this.gunAngle) * this.radius;\r\n        let gunY = Math.sin(this.gunAngle) * this.radius;\r\n        \r\n        //console.log(gunX, gunY, this.gunAngle, mousePos.x, mousePos.y);\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.arc(gunX + x, gunY + y, this.gunRadius, 0, 2 * Math.PI, false);\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = 'green';\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.fill();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = 5;\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = '#003300';\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__.ctx.closePath();\r\n        \r\n    }\r\n    update() {\r\n        if (Math.abs(this.velocity.x) + Math.abs(this.velocity.y) < this.maxSpeed) {\r\n            if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.pressedKeys[87]) {//w\r\n            this.velocity.y += -this.speed;\r\n        }\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.pressedKeys[65]) {//a\r\n            this.velocity.x += -this.speed;\r\n        }\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.pressedKeys[83]) {//s\r\n            this.velocity.y += this.speed;\r\n        }\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.pressedKeys[68]) {//d\r\n            this.velocity.x += this.speed;\r\n        }\r\n        }\r\n        \r\n\r\n        this.velocity.x *= this.drag;\r\n        this.velocity.y *= this.drag;\r\n        this.position.x += this.velocity.x;\r\n        this.position.y += this.velocity.y;\r\n\r\n        let mouseX = _globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.mousePos.x;\r\n        let mouseY = _globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.mousePos.y;\r\n\r\n        if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.globals.cameraLock === true) {\r\n           mouseX += this.position.x -_globals_js__WEBPACK_IMPORTED_MODULE_1__.centerX;//the 300 here is the center of the screen where the player starts at\r\n           mouseY += this.position.y -_globals_js__WEBPACK_IMPORTED_MODULE_1__.centerY;\r\n        }\r\n        \r\n        this.gunAngle = Math.atan((this.position.y - mouseY) / (this.position.x - mouseX));\r\n        if (mouseX < this.position.x) {\r\n            this.gunAngle += Math.PI;\r\n        }\r\n\r\n        for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet?.length; i++) {\r\n            if (_globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet[i].position.x > this.position.x -this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet[i].position.x < this.position.x + this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet[i].position.y > this.position.y - this.radius &&\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet[i].position.y < this.position.y + this.radius) {\r\n                    _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.shooterBullet.splice(i, 1);\r\n                    this.hurt();\r\n            }\r\n        }\r\n        if (this.spinAttackTimer != 50) {\r\n            this.spinAttackTimer++;\r\n            this.spinAttackAngle += 0.2;\r\n            for (let i = 0; i < 6; i+=0.3) {\r\n                let b = new _Bullet_js__WEBPACK_IMPORTED_MODULE_2__.Bullet(this.spinAttackAngle + i, this.position.x, this.position.y, this.bulletSpeed, 'playerBullet', 'black');\r\n                _globals_js__WEBPACK_IMPORTED_MODULE_1__.entityList.playerBullet.push(b); \r\n            }\r\n            \r\n        } else {\r\n            this.invulnerable = false;\r\n        }\r\n        //console.log(\"x velocity: \" + this.velocity.x + \", y velocity: \" + this.velocity.y);\r\n    }\r\n    hurt() {\r\n        if (this.invulnerable === false) {\r\n            this.life-=1;\r\n            if (this.life === 0) {\r\n                (0,_utils_gameEnd__WEBPACK_IMPORTED_MODULE_0__.gameEnd)();\r\n            }\r\n            this.spinAttackTimer = 1;\r\n            this.spinAttackAngle = 0;\r\n            this.invulnerable = true;\r\n        }\r\n        \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/Player.js?");

/***/ }),

/***/ "./src/app/Shooter.js":
/*!****************************!*\
  !*** ./src/app/Shooter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Shooter\": () => (/* binding */ Shooter)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/app/globals.js\");\n/* harmony import */ var _Enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy.js */ \"./src/app/Enemy.js\");\n/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bullet.js */ \"./src/app/Bullet.js\");\n\r\n\r\n\r\n\r\nclass Shooter extends _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy {\r\n    constructor(x, y) {\r\n        super(x, y);\r\n        this.shootDistance = 300;\r\n        this.type = 'shooter';\r\n        this.reloadSpeed = 0.01;\r\n        this.reload = 0;\r\n        this.colour = 'purple';\r\n        this.bulletSpeed = 4;\r\n    }\r\n    update() {\r\n        if (Math.abs(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x - this.position.x) +\r\n            Math.abs(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y - this.position.y) <\r\n            this.shootDistance) {\r\n                if (this.reload > 1) {\r\n                    this.reload = 0;\r\n                    let angle = Math.atan((this.position.y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y) / (this.position.x - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x));\r\n                    if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x < this.position.x) {\r\n                        angle += Math.PI;\r\n                    }\r\n                    let b = new _Bullet_js__WEBPACK_IMPORTED_MODULE_2__.Bullet(angle, this.position.x, this.position.y, this.bulletSpeed, 'shooterBullet', 'red');\r\n                    _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.shooterBullet.push(b);\r\n                }\r\n                \r\n        } else {\r\n            super.move();\r\n        }\r\n        super.collisionCheck();\r\n        this.reload+=this.reloadSpeed;\r\n    }\r\n}\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/Shooter.js?");

/***/ }),

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/app/globals.js\");\n/* harmony import */ var _utils_spawnEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/spawnEnemy */ \"./src/app/utils/spawnEnemy.js\");\n\r\n\r\n\r\n\r\n\r\nlet spawn = 0;\r\nlet spawnrate = 0.03;\r\nlet spawnrateGrowth = 0.00001\r\n\r\n\r\nfunction main() {\r\n    _globals__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\r\n    _globals__WEBPACK_IMPORTED_MODULE_0__.globals.player.update();\r\n    _globals__WEBPACK_IMPORTED_MODULE_0__.globals.player.draw();\r\n    for (const [key, value] of Object.entries(entityList)) {\r\n        for (let j = 0; j < entityList[key]?.length; j++) {\r\n            //console.log(key, entityList[key][j]);\r\n            entityList[key][j].update();\r\n            try {//I have no clue at all why this part of code will give an error when the enemy is destroyed but this works ig\r\n            entityList[key][j].draw();\r\n            }\r\n            catch (e) {\r\n            }\r\n        \r\n        \r\n    }\r\n    }\r\n    \r\n    \r\n    spawn += spawnrate;\r\n    spawnrate += spawnrateGrowth;\r\n    if (spawn >= 1) {\r\n        let type = 'normal';\r\n        if (Math.random() > 0.75) {\r\n            type = 'shooter'\r\n        }\r\n        (0,_utils_spawnEnemy__WEBPACK_IMPORTED_MODULE_1__.spawnEnemy)(type);\r\n        spawn = 0;\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/game.js?");

/***/ }),

/***/ "./src/app/globals.js":
/*!****************************!*\
  !*** ./src/app/globals.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"centerX\": () => (/* binding */ centerX),\n/* harmony export */   \"centerY\": () => (/* binding */ centerY),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"entityList\": () => (/* binding */ entityList),\n/* harmony export */   \"globals\": () => (/* binding */ globals),\n/* harmony export */   \"recenter\": () => (/* binding */ recenter)\n/* harmony export */ });\n\r\nlet globals = {\r\n    score : 0,\r\n    highscore : 0,\r\n    game : undefined,\r\n    cameraLock : true,\r\n    mousePos : {},\r\n    pressedKeys : {},\r\n    player : undefined\r\n}\r\n\r\nlet canvas = document.querySelect\r\nlet ctx = canvas.getContext('2d')\r\nlet centerX = canvas.width / 2\r\nlet centerY = canvas.height / 2\r\nlet entityList = {};\r\n\r\nfunction recenter() {\r\n    centerX = canvas.width / 2\r\n    centerY = canvas.height / 2\r\n}\r\n\r\n\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/globals.js?");

/***/ }),

/***/ "./src/app/utils/changeScore.js":
/*!**************************************!*\
  !*** ./src/app/utils/changeScore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeScore\": () => (/* binding */ changeScore)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/app/globals.js\");\n\r\nfunction changeScore(addAmount) {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.score += addAmount;\r\n    if (score > highscore) {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.highscore = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.score;\r\n    }\r\n    document.getElementById('score').innerHTML = 'Score: ' + _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.score;\r\n    document.getElementById('highscore').innerHTML = 'Highscore: ' + _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.highscore;\r\n}\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/utils/changeScore.js?");

/***/ }),

/***/ "./src/app/utils/findMousePos.js":
/*!***************************************!*\
  !*** ./src/app/utils/findMousePos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findMousePos\": () => (/* binding */ findMousePos)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/app/globals.js\");\n\r\nfunction findMousePos(event) {\r\n    //needed to get mouse position relative to the canvas\r\n    var rect = canvas.getBoundingClientRect();\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.mousePos = { x: event.clientX - rect.left, y: event.clientY - rect.top};\r\n    //console.log(event.clientX - rect.left, event.clientY - rect.top);\r\n}\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/utils/findMousePos.js?");

/***/ }),

/***/ "./src/app/utils/gameEnd.js":
/*!**********************************!*\
  !*** ./src/app/utils/gameEnd.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameEnd\": () => (/* binding */ gameEnd)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/app/globals.js\");\n\r\nfunction gameEnd() {\r\n    clearInterval(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.game);\r\n    canvas.style = 'display: none';\r\n    document.getElementById('game-over').style.display = 'block';\r\n    document.getElementById('highscore').style.display = 'block';\r\n    document.getElementById('login-screen').style.display = 'block';\r\n    document.body.style.backgroundColor = '#1bafdb';\r\n    if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.score > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.highscore) {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.highscore = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.score;\r\n        document.getElementById('highscore').innerText = 'HighScore: ' + _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.highscore;\r\n    }\r\n}\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/utils/gameEnd.js?");

/***/ }),

/***/ "./src/app/utils/spawnEnemy.js":
/*!*************************************!*\
  !*** ./src/app/utils/spawnEnemy.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spawnEnemy\": () => (/* binding */ spawnEnemy)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/app/globals.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enemy */ \"./src/app/Enemy.js\");\n/* harmony import */ var _Shooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shooter */ \"./src/app/Shooter.js\");\n\r\n\r\n\r\n\r\nfunction spawnEnemy(type) {\r\n    let random1 = Math.random();\r\n    let random2 = Math.random();\r\n    let x;\r\n    let y;\r\n    let e;\r\n    if (random1 < 0.25) {\r\n        x = parseInt(random2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width)\r\n        y = parseInt(-_Enemy__WEBPACK_IMPORTED_MODULE_1__.Enemy.radius)\r\n        \r\n    }\r\n    else if (random1 < 0.5) {\r\n        x = parseInt(_globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width + _Enemy__WEBPACK_IMPORTED_MODULE_1__.Enemy.radius)\r\n        y = parseInt(random2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height)\r\n\r\n    }\r\n    else if (random1 < 0.75) {\r\n        x = parseInt(random2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width)\r\n        y = parseInt(_globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height + _Enemy__WEBPACK_IMPORTED_MODULE_1__.Enemy.radius)\r\n\r\n    } else {\r\n        x = parseInt(random2- _Enemy__WEBPACK_IMPORTED_MODULE_1__.Enemy.radius)\r\n        y = parseInt(random2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height)\r\n\r\n    }\r\n    if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.cameraLock === true) {\r\n        x += (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.x -centerX);\r\n        y += (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.player.position.y -centerY);\r\n    }\r\n    if (type === 'normal') {\r\n        e = new _Enemy__WEBPACK_IMPORTED_MODULE_1__.Enemy(x, y);  \r\n    } else if (type === 'shooter') {\r\n        e = new _Shooter__WEBPACK_IMPORTED_MODULE_2__.Shooter(x, y); \r\n    }\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.entityList.enemy.push(e);\r\n}\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/utils/spawnEnemy.js?");

/***/ }),

/***/ "./src/app/utils/start.js":
/*!********************************!*\
  !*** ./src/app/utils/start.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game.js */ \"./src/app/game.js\");\n/* harmony import */ var _findMousePos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findMousePos.js */ \"./src/app/utils/findMousePos.js\");\n/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bullet.js */ \"./src/app/Bullet.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player.js */ \"./src/app/Player.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals.js */ \"./src/app/globals.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction start () {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.canvas.style = 'display: block';\r\n    document.getElementById('start').style.display = 'none';\r\n    document.getElementById('game-over').style.display = 'none';\r\n    document.getElementById('highscore').style.display = 'none';\r\n    document.getElementById('login-screen').style.display = 'none';\r\n    document.getElementById('score').innerHTML = 'Score: ' + _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.score;\r\n    \r\n    document.body.style.backgroundColor = '#ffffff';\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.entityList.enemy = [];\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.entityList.playerBullet = [];\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.entityList.shooterBullet = [];\r\n    \r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.player = new _Player_js__WEBPACK_IMPORTED_MODULE_3__.Player(_globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.centerX, _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.centerY);\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.score = 0;\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.game = setInterval(_game_js__WEBPACK_IMPORTED_MODULE_0__.main, 30);\r\n\r\n    //event listeners\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.canvas.addEventListener(\"click\", function(){\r\n        let b = new _Bullet_js__WEBPACK_IMPORTED_MODULE_2__.Bullet(_globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.player.gunAngle, _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.player.position.x, _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.player.position.y, _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.player.bulletSpeed, 'playerBullet', 'black');\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_4__.entityList.playerBullet.push(b);\r\n        //console.log( b);\r\n    });\r\n    \r\n    _globals_js__WEBPACK_IMPORTED_MODULE_4__.canvas.addEventListener(\"mousemove\", _findMousePos_js__WEBPACK_IMPORTED_MODULE_1__.findMousePos);\r\n    \r\n    \r\n    \r\n    window.onkeyup = function(e) { _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.pressedKeys[e.keyCode] = false; }\r\n    window.onkeydown = function(e) { _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals.pressedKeys[e.keyCode] = true; }\r\n    \r\n  };\n\n//# sourceURL=webpack://firstgamejammaybe/./src/app/utils/start.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils/start.js */ \"./src/app/utils/start.js\");\n/* harmony import */ var _app_utils_gameEnd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/gameEnd.js */ \"./src/app/utils/gameEnd.js\");\nalert('hello from webpack');\r\n\r\n\r\n\r\nconst canvas = document.querySelector('canvas');\r\ncanvas.style = 'display: none';\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\nlet startbtn = document.getElementById(\"start\");\r\nstartbtn.addEventListener(\"change\", (0,_app_utils_start_js__WEBPACK_IMPORTED_MODULE_0__.start)());\r\nlet gameEndbtn = document.getElementById(\"gameEnd\");\r\ngameEndbtn.addEventListener(\"change\", (0,_app_utils_gameEnd_js__WEBPACK_IMPORTED_MODULE_1__.gameEnd)());\n\n//# sourceURL=webpack://firstgamejammaybe/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;