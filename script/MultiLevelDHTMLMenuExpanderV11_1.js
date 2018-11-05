//--------------------------------------------------------------------------------------------------
// All material contained within this document and associated downloaded pages 
// is the property of 4thorder(TM) unless otherwise noted
// Copyright � 2005.  All rights reserved.
//
// Author: Michael Falatine || Authors email: 4thorder@4thorder.us
//
// USAGE: You may use this script for commercial or personal use, however, the copyright is retained-
// by 4thorder (TM).
//
// For other free Scripts visit: http://www.4thorder.us/Scripts/
//---------------------------------------------------------------------------------------------------

//-----------------begin insertAdjacent code-----------------------------------------------------
// This portion written by Thor Larholm thor@jscript.dk
// Allows for insertAdjacentHTML(), insertAdjacentText() and insertAdjacentElement()
// functionality in Netscape / Mozilla /Opera
if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement){
	HTMLElement.prototype.insertAdjacentElement = function(where,parsedNode)
	{
		switch (where){
		case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode,this)
			break;
		case 'afterBegin':
			this.insertBefore(parsedNode,this.firstChild);
			break;
		case 'beforeEnd':
			this.appendChild(parsedNode);
			break;
		case 'afterEnd':
			if (this.nextSibling) this.parentNode.insertBefore(parsedNode,this.nextSibling);
			else this.parentNode.appendChild(parsedNode);
			break;
		}
	}

	HTMLElement.prototype.insertAdjacentHTML = function(where,htmlStr)
	{
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var parsedHTML = r.createContextualFragment(htmlStr);
		this.insertAdjacentElement(where,parsedHTML)
	}


	HTMLElement.prototype.insertAdjacentText = function(where,txtStr)
	{
		var parsedText = document.createTextNode(txtStr)
		this.insertAdjacentElement(where,parsedText)
	}
}
//----------------------end insertAdjacent code-------------------------------------------------------

// :::::::::::::::::::::::::
// :::: Global Variables :::
// :::::::::::::::::::::::::
var firstLoad=0
var GlobalECState=0

var firstLoad1=0
var GlobalECState1=0
// :::::::::::::::::::::::::
// :::: Global Functions :::
// :::::::::::::::::::::::::
window.onload=InitializePage;

function InitializePage()
{defineLayout(); createTopMenu(); prepareListStyles(); setLEVELs(); Icons(); attachEventhandlers();}

function defineLayout()
{
// Set Page position
document.getElementById("MDME").style.position="static";
document.getElementById('MDME').style.left= PagePositionLEFT+"px";
document.getElementById('MDME').style.top= PagePositionTOP+"px";
document.getElementById('MDME').style.zIndex=50;
}


function setLEVELs()
{
ULCollection=document.getElementById("MDME").getElementsByTagName("UL");
ULCollection.item(0).setAttribute("level", 1);

// Initally set all LI to level 1
LICollection=document.getElementById("MDME").getElementsByTagName("LI");
for (a=0; a<LICollection.length;a++)
		{LICollection.item(a).setAttribute("level", 1);}

// Set all non-level 1 LI to respective levels
if (ULCollection!=null)
	{
	for (u=0; u<ULCollection.length; u++)
		{
		var ULChildrenCollection=ULCollection.item(u).getElementsByTagName("UL");
		for (l=0; l<ULChildrenCollection.length; l++)
			{
			var previousLevel=parseInt(ULCollection.item(u).getAttribute("level"));
			ULChildrenCollection.item(l).setAttribute("level", previousLevel+1);
			var LIChildrenCollection=ULChildrenCollection.item(l).getElementsByTagName("LI");
			for (m=0; m<LIChildrenCollection.length; m++)
				{LIChildrenCollection.item(m).setAttribute("level", previousLevel+1);}
			}
		}
	}
}

function setLEVELs1()
{
ULCollection11=document.getElementById("MDME1").getElementsByTagName("UL");
ULCollection11.item(0).setAttribute("level", 1);

// Initally set all LI to level 1
LICollection=document.getElementById("MDME1").getElementsByTagName("LI");
for (a=0; a<LICollection.length;a++)
		{LICollection.item(a).setAttribute("level", 1);}

// Set all non-level 1 LI to respective levels
if (ULCollection1!=null)
	{
	for (u=0; u<ULCollection1.length; u++)
		{
		var ULChildrenCollection=ULCollection1.item(u).getElementsByTagName("UL");
		for (l=0; l<ULChildrenCollection.length; l++)
			{
			var previousLevel=parseInt(ULCollection1.item(u).getAttribute("level"));
			ULChildrenCollection.item(l).setAttribute("level", previousLevel+1);
			var LIChildrenCollection=ULChildrenCollection.item(l).getElementsByTagName("LI");
			for (m=0; m<LIChildrenCollection.length; m++)
				{LIChildrenCollection.item(m).setAttribute("level", previousLevel+1);}
			}
		}
	}
}

function createTopMenu()
{
if(showECOption=='yes' && oneBranch!='yes')
	{
	var str='';
	str+='<TABLE border="0" cellpadding="2" cellspacing="0" class="topMenu">';
	str+='<TR>';
	str+='<TD id="expandAllMenuItem" onClick="ECALL(1)">';
	if(imageEXPANDALL=="")
		{str+='Expand ALL<\/TD>';	}	
	else
		{str+='<IMG border="0" src="images\/'+imageEXPANDALL+'" alt="Expand ALL"><\/TD>';}
	str+='<TD id="collapseAllMenuItem" onClick="ECALL(0)">';
	if(imageCOLLAPSEALL=="")
		{str+='Collapse ALL<\/TD>';}	
	else	
		{str+='<IMG border="0" src="images\/'+imageCOLLAPSEALL+'" alt="Collapse ALL"><\/TD>';}
	str+='<\/TR>';
	str+='<\/TABLE>';
	document.getElementById("MDME").insertAdjacentHTML("afterBegin", str);

	if(GlobalECState==0)
		{document.getElementById("expandAllMenuItem").style.display='inline'; 
		document.getElementById("collapseAllMenuItem").style.display='none';}
	else
		{document.getElementById("expandAllMenuItem").style.display='none'; 
		document.getElementById("collapseAllMenuItem").style.display='inline'}
	}
}

function createTopMenu1()
{
if(showECOption=='yes' && oneBranch!='yes')
	{
	var str='';
	str+='<TABLE border="0" cellpadding="2" cellspacing="0" class="topMenu">';
	str+='<TR>';
	str+='<TD id="expandAllMenuItem1" onClick="ECALL1(1)">';
	if(imageEXPANDALL=="")
		{str+='Expand ALL<\/TD>';	}	
	else
		{str+='<IMG border="0" src="images\/'+imageEXPANDALL+'" alt="Expand ALL"><\/TD>';}
	str+='<TD id="collapseAllMenuItem1" onClick="ECALL1(0)">';
	if(imageCOLLAPSEALL=="")
		{str+='Collapse ALL<\/TD>';}	
	else	
		{str+='<IMG border="0" src="images\/'+imageCOLLAPSEALL+'" alt="Collapse ALL"><\/TD>';}
	str+='<\/TR>';
	str+='<\/TABLE>';
	document.getElementById("MDME1").insertAdjacentHTML("afterBegin", str);

	if(GlobalECState1==0)
		{document.getElementById("expandAllMenuItem1").style.display='inline'; 
		document.getElementById("collapseAllMenuItem1").style.display='none';}
	else
		{document.getElementById("expandAllMenuItem1").style.display='none'; 
		document.getElementById("collapseAllMenuItem1").style.display='inline'}
	}
}


function prepareListStyles()
{
ULCollection=document.getElementById("MDME").getElementsByTagName("UL");
if (ULCollection!=null)
	{for (u=0; u<ULCollection.length; u++)
		{ULCollection.item(u).style.listStyleType="none";
		 ULCollection.item(u).setAttribute("id", "ULID"+u);}}
}

function prepareListStyles1()
{
ULCollection1=document.getElementById("MDME1").getElementsByTagName("UL");
if (ULCollection1!=null)
	{for (u=0; u<ULCollection1.length; u++)
		{ULCollection1.item(u).style.listStyleType="none";
		 ULCollection1.item(u).setAttribute("id", "AULID"+u);}}
}

function attachEventhandlers()
{
// Attach event handlers to all images within container
LICollection=document.getElementById("MDME").getElementsByTagName("LI");
if (LICollection!=null)
	{	for (l=0; l<LICollection.length; l++)
			{LICollection.item(l).onmouseup=onMouseUpHandler;}
	}


// Set Transparency level
if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById('MDME').style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+TValue+")"
	}
else
	{
	document.getElementById('MDME').style.MozOpacity=1;
	TValue=parseFloat(TValue/100-.001); // .001 is fix for moz opacity/image bug
	document.getElementById('MDME').style.MozOpacity=TValue;}
}

function attachEventhandlers1()
{
// Attach event handlers to all images within container
LICollection=document.getElementById("MDME1").getElementsByTagName("LI");
if (LICollection!=null)
	{	for (l=0; l<LICollection.length; l++)
			{LICollection.item(l).onmouseup=onMouseUpHandler1;}
	}


// Set Transparency level
if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById('MDME1').style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+TValue+")"
	}
else
	{
	document.getElementById('MDME1').style.MozOpacity=1;
	TValue=parseFloat(TValue/100-.001); // .001 is fix for moz opacity/image bug
	document.getElementById('MDME1').style.MozOpacity=TValue;}
}

function ECALL(o) // Expand or Collapse "ALL" routine
{
//strip all images
LICollection=document.getElementById("MDME").getElementsByTagName("LI");
	if (LICollection!=null)
		{
		for (d=0; d<LICollection; d++)
			{LICollection.item(i).style.listStyleImage="none";}}
			
firstLoad=0; GlobalECState=o; Icons();
if(showECOption=='yes' && oneBranch!='yes')
	{
	if(GlobalECState==0)
		{document.getElementById("expandAllMenuItem").style.display='inline'; 
		document.getElementById("collapseAllMenuItem").style.display='none';}
	else
		{document.getElementById("expandAllMenuItem").style.display='none'; 
		document.getElementById("collapseAllMenuItem").style.display='inline'}
	}
}

function ECALL1(o) // Expand or Collapse "ALL" routine
{
//strip all images
LICollection=document.getElementById("MDME1").getElementsByTagName("LI");
	if (LICollection!=null)
		{
		for (d=0; d<LICollection; d++)
			{LICollection.item(i).style.listStyleImage="none";}}
			
firstLoad1=0; GlobalECState1=o; Icons1();
if(showECOption=='yes' && oneBranch!='yes')
	{
	if(GlobalECState1==0)
		{document.getElementById("expandAllMenuItem1").style.display='inline'; 
		document.getElementById("collapseAllMenuItem1").style.display='none';}
	else
		{document.getElementById("expandAllMenuItem1").style.display='none'; 
		document.getElementById("collapseAllMenuItem1").style.display='inline'}
	}
}

function Icons(tarObj)
{
LICollection=document.getElementById("MDME").getElementsByTagName("LI");
// Loop through and insert icons at LI elements with children
if (LICollection!=null)
	{for (i=0; i<LICollection.length; i++)
		{
		// Collection used to determine if list item has UL children
		ULChildrenCol=LICollection.item(i).getElementsByTagName("UL");
		// If children then put a "-" or "+" on folder depending on ECState or GlobalECState
		//Set ECState attributes
		if(ULChildrenCol.length>0)
			{// Yes HAS Children
			// Grab first UL underneath LI
			FirstULWithinLI_ELEMENT=LICollection.item(i).getElementsByTagName("UL");
			if(firstLoad==0)
				{// Yes: FIRST LOAD OF PAGE -- insert image
				if(GlobalECState==0)
					{// Global ECState is COLLAPSED (+)	(0)
					// set ECState, attach image to LI, Hide UL children				
					LICollection.item(i).setAttribute("ECState",0);
					if(imagePLUS!='')
						{	LICollection.item(i).style.background='url(images/'+imagePLUS+') right top no-repeat';}
					LICollection.item(i).style.cursor="pointer";
					FirstULWithinLI_ELEMENT.item(0).style.display='none';
					}
				else
					{// Global ECState is EXPANDED (-) (1)
					// set ECState, attach image to LI, Show UL children
					LICollection.item(i).setAttribute("ECState",1);
					if(imageMINUS!='')
						{	LICollection.item(i).style.background='url(images/'+imageMINUS+') right top no-repeat';}
					LICollection.item(i).style.cursor="pointer";
					FirstULWithinLI_ELEMENT.item(0).style.display='block';
					}
				}
			else
				{// No: FIRST LOAD OF PAGE - change image
				 //	Grab ECState of image and expand or collapse branch
				 State=LICollection.item(i).getAttribute("ECState");
				if(State==0)
					{// ECState is COLLAPSED (+) (0)
					// Change Image and set cursor style
					if(imagePLUS!='')
						{	LICollection.item(i).style.background='url(images/'+imagePLUS+') right top no-repeat';}
					// Hide UL
					FirstULWithinLI_ELEMENT.item(0).style.display='none';
					}
				else
					{
					// ECState is EXPANDED (-) (1)				
						// If option activated: Rountine to close all branches on same level as target but NOT target
						if(oneBranch=='yes' && tarObj!=null)
							{
							targetLevel=tarObj.getAttribute("level");
							tarObjParentLICol=tarObj.parentNode.getElementsByTagName("LI");
							for (tar=0;tar<tarObjParentLICol.length; tar++)
								{
								ItemLevel=tarObjParentLICol.item(tar).getAttribute("level");
								if(targetLevel==ItemLevel)
									{
									tarObjParentLIULCol=tarObjParentLICol.item(tar).getElementsByTagName("UL");
									if(tarObjParentLIULCol.length!=0 && tarObj!=tarObjParentLICol.item(tar))
										{
										tarObjParentLIULCol.item(0).style.display='none';
										if(imagePLUS!='')
											{	tarObjParentLICol.item(tar).style.background='url(images/'+imagePLUS+') right top no-repeat';
												tarObjParentLICol.item(tar).style.listStylePosition='inside';
												tarObjParentLICol.item(tar).setAttribute("ECState",0);}
										}
									}
								}
							}
						// Change Image and set cursor style
						if(imageMINUS!='')
							{	LICollection.item(i).style.background='url(images/'+imageMINUS+') right top no-repeat';
								LICollection.item(i).style.listStylePosition='inside';}
						// Show UL
						FirstULWithinLI_ELEMENT.item(0).style.display='block';
					}
				}
			}
			else   
				{LICollection.item(i).style.listStyleImage="none";}
		}
	}
if(firstLoad==0){firstLoad=1;}
if(showECOption=='yes' && oneBranch!='yes')
	{	document.getElementById('expandAllMenuItem').style.cursor="pointer";
		document.getElementById('collapseAllMenuItem').style.cursor="pointer";}
}


function Icons1(tarObj)
{
LICollection=document.getElementById("MDME1").getElementsByTagName("LI");
// Loop through and insert icons at LI elements with children
if (LICollection!=null)
	{for (i=0; i<LICollection.length; i++)
		{
		// Collection used to determine if list item has UL children
		ULChildrenCol=LICollection.item(i).getElementsByTagName("UL");
		// If children then put a "-" or "+" on folder depending on ECState or GlobalECState
		//Set ECState attributes
		if(ULChildrenCol.length>0)
			{// Yes HAS Children
			// Grab first UL underneath LI
			FirstULWithinLI_ELEMENT=LICollection.item(i).getElementsByTagName("UL");
			if(firstLoad1==0)
				{// Yes: FIRST LOAD OF PAGE -- insert image
				if(GlobalECState1==0)
					{// Global ECState is COLLAPSED (+)	(0)
					// set ECState, attach image to LI, Hide UL children				
					LICollection.item(i).setAttribute("ECState",0);
					if(imagePLUS1!='')
						{	LICollection.item(i).style.background='url(images/'+imagePLUS1+') right top no-repeat';}
					LICollection.item(i).style.cursor="pointer";
					FirstULWithinLI_ELEMENT.item(0).style.display='none';
					}
				else
					{// Global ECState is EXPANDED (-) (1)
					// set ECState, attach image to LI, Show UL children
					LICollection.item(i).setAttribute("ECState",1);
					if(imageMINUS1!='')
						{	LICollection.item(i).style.background='url(images/'+imageMINUS1+') right top no-repeat';}
					LICollection.item(i).style.cursor="pointer";
					FirstULWithinLI_ELEMENT.item(0).style.display='block';
					}
				}
			else
				{// No: FIRST LOAD OF PAGE - change image
				 //	Grab ECState of image and expand or collapse branch
				 State=LICollection.item(i).getAttribute("ECState");
				if(State==0)
					{// ECState is COLLAPSED (+) (0)
					// Change Image and set cursor style
					if(imagePLUS1!='')
						{	LICollection.item(i).style.background='url(images/'+imagePLUS1+') right top no-repeat';}
					// Hide UL
					FirstULWithinLI_ELEMENT.item(0).style.display='none';
					}
				else
					{
					// ECState is EXPANDED (-) (1)				
						// If option activated: Rountine to close all branches on same level as target but NOT target
						if(oneBranch=='yes' && tarObj!=null)
							{
							targetLevel=tarObj.getAttribute("level");
							tarObjParentLICol=tarObj.parentNode.getElementsByTagName("LI");
							for (tar=0;tar<tarObjParentLICol.length; tar++)
								{
								ItemLevel=tarObjParentLICol.item(tar).getAttribute("level");
								if(targetLevel==ItemLevel)
									{
									tarObjParentLIULCol=tarObjParentLICol.item(tar).getElementsByTagName("UL");
									if(tarObjParentLIULCol.length!=0 && tarObj!=tarObjParentLICol.item(tar))
										{
										tarObjParentLIULCol.item(0).style.display='none';
										if(imagePLUS1!='')
											{	tarObjParentLICol.item(tar).style.background='url(images/'+imagePLUS1+') right top no-repeat';
												tarObjParentLICol.item(tar).style.listStylePosition='inside';
												tarObjParentLICol.item(tar).setAttribute("ECState",0);}
										}
									}
								}
							}
						// Change Image and set cursor style
						if(imageMINUS1!='')
							{	LICollection.item(i).style.background='url(images/'+imageMINUS1+') right top no-repeat';
								LICollection.item(i).style.listStylePosition='inside';}
						// Show UL
						FirstULWithinLI_ELEMENT.item(0).style.display='block';
					}
				}
			}
			else   
				{LICollection.item(i).style.listStyleImage="none";}
		}
	}
if(firstLoad1==0){firstLoad1=1;}
if(showECOption=='yes' && oneBranch!='yes')
	{	document.getElementById('expandAllMenuItem1').style.cursor="pointer";
		document.getElementById('collapseAllMenuItem1').style.cursor="pointer";}
}

// ::::::::::::::::::::::::
// :::: Event Handlers ::
// ::::::::::::::::::::::::

function onMouseUpHandler(e)
{
// Browser compatibility code
var tarObj;
if (!e) var e = window.event;
if (e.target) tarObj= e.target;
else if (e.srcElement) tarObj= e.srcElement;
if (tarObj.nodeType == 3) // defeat Safari bug
	tarObj= tarObj.parentNode;
	
tarObj=findTH(tarObj);

	// Toggle ECState
	State=tarObj.getAttribute("ECState");
	if(State==0)
		{tarObj.setAttribute("ECState",1);}
	else{tarObj.setAttribute("ECState",0);}

	Icons(tarObj);
	e.cancelBubble = true;
}

function onMouseUpHandler1(e)
{
// Browser compatibility code
var tarObj;
if (!e) var e = window.event;
if (e.target) tarObj= e.target;
else if (e.srcElement) tarObj= e.srcElement;
if (tarObj.nodeType == 3) // defeat Safari bug
	tarObj= tarObj.parentNode;
	
tarObj=findTH1(tarObj);

	// Toggle ECState
	State=tarObj.getAttribute("ECState");
	if(State==0)
		{tarObj.setAttribute("ECState",1);}
	else{tarObj.setAttribute("ECState",0);}

	Icons1(tarObj);
	e.cancelBubble = true;
}


function findTH(t)
{
  if (t.tagName == "LI")
  	{return t;}
  else if
  	(t.tagName == "UL")
  	{return null;}
  else
  {return findTH(t.parentNode);}
}

function findTH1(t)
{
  if (t.tagName == "LI")
  	{return t;}
  else if
  	(t.tagName == "UL")
  	{return null;}
  else
  {return findTH1(t.parentNode);}
}
