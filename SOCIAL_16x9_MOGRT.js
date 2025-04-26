Composition Name: Social_16x9_30s

Layer: "LINE 1"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.4; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width;
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.


Layer: "LINE 2"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.35; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width;
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.


Layer: "LINE 3"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.35; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width;
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.


Composition Name: UPPER THIRD LOGO

Layer: "WHITE LOGO"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD LOGO").effect("UPPER THIRD LOGO")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'WHITE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "PINK LOGO"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD LOGO").effect("UPPER THIRD LOGO")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'PINK LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "BLUE LOGO"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD LOGO").effect("UPPER THIRD LOGO")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'BLUE LOGO' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: WEBSITE TEXT

Layer: "NO TEXT"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD TEXT OPTIONS").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'NO TEXT' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "TEXT WITH PINK DARKEN"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD TEXT OPTIONS").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'PINK DARKEN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "TEXT WITH BLUE DARKEN"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("UPPER THIRD TEXT OPTIONS").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'BLUE DARKEN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: Subscribe Button 

Layer: "Pink Subscribe"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("Subscribe Button").effect("Subscribe Button")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Pink Subscribe' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "Blue Subscribe"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("Subscribe Button").effect("Subscribe Button")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'Blue Subscribe' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: Mouse Symbol 

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("Mouse png").effect("Mouse png")("Checkbox"); //Locates the 'checkbox control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the check box is clicked, then the opacity of the layer will be set to 100
else 0; //If the check box is left unclicked, the the opacity of the layer will be set to 0


Composition Name: ENDBOARD TEXT

Layer: "CENTRE ALIGNED TEXT"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("ENDBOARD TEXT").effect("ENDBOARD TEXT")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'CENTRE ALIGNED TEXT' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Layer: "LEFT ALIGNED TEXT"

Opacity: - Written by Oz Havis
m = comp("16x9 Master Control Comp").layer("ENDBOARD TEXT").effect("ENDBOARD TEXT")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'LEFT ALIGNED TEXT' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%


Composition Name: CENTRE ALIGNED TEXT

Layer: "Collection Name MIDDLE"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.7; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width;
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.


Composition Name: LEFT ALIGNED TEXT

Layer: "Collection Name LEFT"

AnchorPoint: - Written by Oz Havis
R = sourceRectAtTime(); //Measures the size of the box around the graphics or text
[R.left+R.width/2,R.top+R.height/2] //Sets the anchor point into the center of the scaling box

Scale: - Written by Oz Havis
maxW = thisComp.width*.57; //sets the maxium width to .8 x the width of the composition
maxH = thisComp.height *.2; //sets the maxium height to .2 x the height of the composition
r = sourceRectAtTime(31); // Sets the time of this code for all frames per second in the composition
w = r.width;
h = r.height;
s = w/h > maxW/maxH ? maxW/w: maxH/h; //automatically scales the text written to fit the specified dimentions
[100,100]*s; //Standard scale settings x if the current width and height of the written text is greater than the stated maximum.

