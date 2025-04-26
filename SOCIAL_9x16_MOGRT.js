Composition Name: Social_9x16_30s

Layer: "DISHY INVITES YOU FOR A FIRST LOOK"

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

Composition Name: NO TEXT LAYER

Layer: "NO TEXT LAYER"

Opacity: Written by Oz Havis
m = comp("9x16 Master Control Comp ").layer("NO TEXT BOARDER").effect("NO TXT BORDER")("Checkbox"); //Locates the 'checkbox control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the check box is clicked, then the opacity of the layer will be set to 100
else 0; //If the check box is left unclicked, the the opacity of the layer will be set to 0


Composition Name: ENDBOARD TEXT

Layer: "COMING SOON"

Opacity: Written by Oz Havis
m = comp("9x16 Master Control Comp ").layer("ENDBOARD TEXT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'COMING SOON' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "FOLLOW US"

Opacity: Written by Oz Havis
m = comp("9x16 Master Control Comp ").layer("ENDBOARD TEXT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'FOLLOW US' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "WEBSITE"

Opacity: Written by Oz Havis
m = comp("9x16 Master Control Comp ").layer("ENDBOARD TEXT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'WEBSITE' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "SLOGAN"

Opacity: Written by Oz Havis
m = comp("9x16 Master Control Comp ").layer("ENDBOARD TEXT").effect("Dropdown Menu Control")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'SLOGAN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Composition Name: LOGO BUG

Layer: "WHITE LOGO"

Opacity:
m = comp("9x16 Master Control Comp ").layer("LOGO BUG").effect("9x16 LOGO BUG")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'SLOGAN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "PINK LOGO"

Opacity:
m = comp("9x16 Master Control Comp ").layer("LOGO BUG").effect("9x16 LOGO BUG")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'SLOGAN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%

Layer: "BLUE LOGO"

Opacity:
m = comp("9x16 Master Control Comp ").layer("LOGO BUG").effect("9x16 LOGO BUG")("Menu"); //Links the layer to the 'DropDown Menu Control' in the MASTER CONTROL COMP
i = index;
if (m==i)100; //If the layer name 'SLOGAN' is selected in the dropdown menu then the opacity will be 100%
else 0; //If another layer name is selected in the dropdown menu then the opacity will be 0%