## CSS gradient ECMA5 simpliest parser

Solution basement is desciption of linear-gradient in w3c site.

#### What it can do?

**Preface**: any changes in gradient function are mutable through CSS file, js script will process it in any mutadet format of gradient function inside CSS, from there it starts forward:

1. you can choose between linear or repeating-linear-gradient

2. you can add or NOT angle in first linear-gradient function argument in any format

3. you can add any numbers and any formats of colors into linear-gradient function

4. JS script program will recognize any linear-gradient function in any format

5. You can manipulate linear-gradient by multiple ColorPickers (All color pickers start values are taken from linear-gradient after style computing; All color pickers after manual color setttings changes their own linear-gradient function argument inside it; After manual mutabiling of particular LGradient color-inside element it will NOT recognize rgbA<-(A exectly) and "Color stop")

This is my simpliest way of solution of Linear-gradient problem

P.S.

There is another maniac solutions and considerations on it from Lea Verou, more difficult than my, maybe more professional, but not optimal and huge

[Lea Verou blog professional solution](http://lea.verou.me/2011/03/create-complex-regexps-more-easily/ "Lea Verou blog")

###### Next ambitions:

1 Manipulating by ANGLE argument and deconfusing directions of color pickers regardly to direction of angle argument

2 Manipulating by linear or repeating-linear-gradient function first name

3 Manipulating by "Color stops" === "...  To create a linear gradient you must define at least two color stops. Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient effect. ... === Syntax === background-image: linear-gradient(direction, color-stop1, color-stop2, ...);   ..." &copy; w3c

   
[**Interactive CodePen direct source**](https://codepen.io/pen/MPdxpd)