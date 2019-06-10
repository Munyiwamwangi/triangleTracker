# Project Title
Delani Studio

# Author name
 Munyi Mwangi Wanjiku

## Description
This app collects three sides of a triangle from user, and determines what type of a triangle can be formed

# BDD

| Input   |Example|  Behavior | Expected Output|
|:---------|:-------|:---------|:--------------|
|For zero or lesser than zero values|0,0,0| Requires the user to input positive values since the triangle can not be ideal.| Alert the user to input valid values|
|In the case that one field is empty, or one value is zero|0,1,3|Alerts user to ensure all fields are not less than zero|an alert notifies the user that they have to fill all the three spaces with values greater than zero, and terminates functionality and resets the fields for a fresh start.
|In the case that the values can not form a triangle|1,2,12|Your values can not form a triangle| Your values can not form a triangle program terminates|
|Two similar sides|4,4,5|Your values give an isosceles triangle. Two sides equal|Your values give an isosceles triangle. Two sides equal|
|All sides equal| 5,5,5 |Your values make an equilateral triangle. All sides equal|Your values make an equilateral triangle. All sides equal|
|All sides not equal|3,4,5|Your values give an scalene triangle. all sides not equal|Your values give an scalene triangle. all sides not equal|

# Further Explanation
* The Triangle Tracker accepts three values in the three provided spaces.
* Once the values are entered, the triangle checks if all the fields have values and whether the values are greater than zero.
* In the case that one field is empty, or one value is zero, an alert notifies the user that they have to fill all the three spaces with values greater than zero, and terminates functionality and resets the fields for a fresh start.
* Otherwise, the project goes on checking whether the given values can make a triangle as per the logic provided.
* In the case that the values can not form a triangle, the user is alerted correspondingly.
* Otherwise, the user is informed on the type of triangle that their values can form.

# Project setup instructions
* git clone <https://github.com/Munyiwamwangi/triangleTracker>
* cd Triangle Tracker
* Open index.html from a browser (preferably chrome)

# Technologies used
* I used HTML,
* CSS and
* JavaScript

# Known bugs
 No bugs. If any found, freely contact me at josseymunyi@gmail.com

 ### Support and contact details
 * email:josseymunyi@gmail.com
 * link to live site on GitHub Pages
 * link; <https://munyiwamwangi.github.io/triangleTracker/>

# copyright and license information MIT License

## Copyright (c) [2019][munyiwamwangi]

# License Information

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
