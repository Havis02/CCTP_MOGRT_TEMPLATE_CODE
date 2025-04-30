Composition Name: Social_1x1_30s

Layer: "Upper Endboard Text"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box


Scale: Written by Oz Havis
maxW = thisComp.width*.8; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Layer: "Lower Endboard Text"

SourceText: - https://www.youtube.com/@Animoplex and https://www.motionscript.com/index.html 
chars = text.sourceText.length; //Charater is equal to the length of the text box
timePerChar = 0.065; //the time between each letter revealed
visibleChars = Math.floor((time - inPoint) / timePerChar); //This is code that creates a countdown of numbers as 'math.floor' forces the numbers to be rounded down. The time - inPoint is making the code focus on the text and divide it by the time between each letter being revealed
text.sourceText.substr(0, visibleChars); //creates a substring of text which allows it to be edited without effecting the original text

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: Written by Oz Havis
maxW = thisComp.width*.8; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Layer: "All Pots"

Scale: https://youtube.com/shorts/zF1fbIIL82k?si=AjEWMcNnUDrT_eds and https://www.youtube.com/watch?v=8pPSd6aSVnQ 
amp = .1;
freq = 1.5;
decay = 3.0;
n = 0;
time_max = 4;
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){
n--;
}}
if (n == 0){ t = 0;
}else{
t = time - key(n).time;
}
if (n > 0 && t < time_max){
v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{value}

Composition Name: NO TEXT BOARDER

Layer: "No Text Boarder"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("NO TEXT BORDER 1x1").effect("NO TEXT  BORDER")("Checkbox"); //Locates the 'checkbox control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the check box is clicked, then the opacity of the layer will be set to 100
else 0; //If the check box is left unclicked, the the opacity of the layer will be set to 0

Composition Name: Upper Thirds Logo

Layer: "WHITE LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third Logo").effect("Upper Thirds Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'WHITE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "PINK LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third Logo").effect("Upper Thirds Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'PINK LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "BLUE LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third Logo").effect("Upper Thirds Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'BLUE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: Upper Thirds Text

Layer: "Slogan PINK"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Slogan PINK' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Website PINK"
 
Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Website PINK' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Shop New PINK"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Shop New PINK' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Like & Comment PINK"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Like & Comment PINK' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Like & Follow PINK"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Like & Follow PINK' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Slogan BLUE"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Slogan BLUE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Website BLUE"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Website BLUE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Shop New BLUE"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Shop New BLUE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Like & Comment BLUE"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Like & Comment BLUE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Like & Follow BLUE"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Upper Third TEXT").effect("Upper Thirds Text")("Menu");  //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Like & Follow BLUE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: Closer Logos

Layer: "WHITE LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Closer Logo").effect("Closer Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'WHITE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "BLUE LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Closer Logo").effect("Closer Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'BLUE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "PINK LOGO"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Closer Logo").effect("Closer Logo")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'PINK LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: Edit Text

Layer: "Flicker Text"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("TEXT EDIT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'FLICKER TEXT' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Normal Text"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("TEXT EDIT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'NORMAL TEXT' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Composition Name: Flicker Text

Layer: "collection flicker"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.55; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.55; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Opacity: https://www.motionscript.com/index.html - Dan Ebberts
opacity + 45 * Math.sin(time * 10 * Math.PI) 

Layer: "void flicker"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.25; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.25; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Opacity: https://www.motionscript.com/index.html - Dan Ebberts
opacity + 45 * Math.sin(time * 10 * Math.PI) 

Layer: "Midnight flicker"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.5; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.5; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Opacity: https://www.motionscript.com/index.html - Dan Ebberts
opacity + 45 * Math.sin(time * 10 * Math.PI) 


Composition Name: Normal Text

Layer: "collection"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.55; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.55; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Layer: "void"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.25; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.25; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

Layer: "Midnight"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.5; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.5; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width; 
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.


Composition Name: All Pots

Layer: "Black-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Black-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Blue-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Blue-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Green-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Green-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Grey-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Grey-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Orange-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Orange-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Purple-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Purple-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "Red-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'Red-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%f the

Layer: "White-pot"

Opacity: Written by Oz Havis
m = comp("1x1 4x5 Master Control Comp").layer("Coloured Pots").effect("Coloured Pots")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //I layer name 'White-pot' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%
