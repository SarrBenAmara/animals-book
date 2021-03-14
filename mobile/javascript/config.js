	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#808040";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.jpg";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#808040";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#000000";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=16;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1012;;bookConfig.securityType="1";bookConfig.bookTitle="Animal Farm booklet";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "French",btnFirstPage:"Première page",btnNextPage:"Page suivante",btnLastPage:"Dernière page",btnPrePage:"Page précédente",btnDownload:"Télécharger",btnPrint:"Imprimer",btnSearch:"Recherche",btnClearSearch:"Vider",frmSearchPrompt:"Clear",btnBookMark:"Table des matières",btnHelp:"Aide",btnHome:"Home",btnFullScreen:"Plein écran",btnDisableFullScreen:"Fenêtre",btnSoundOn:"Son",btnSoundOff:"Muet",btnShareEmail:"Partager",btnSocialShare:"Réseaux sociaux",btnZoomIn:"Zoom en",btnZoomOut:"Zoom hors",btnDragToMove:"Drag move mode",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Début",frmHelpCaption:"Aide",frmHelpTip1:"Double click pour zoom In ou OUT",frmHelpTip2:"Tirer sur le coin de page",frmPrintCaption:"Imprimer",frmPrintBtnCaption:"Imprimer",frmPrintPrintAll:"Imprimer toutes les pages",frmPrintPrintCurrentPage:"Imprimer la page actuelle",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Exemple: 2,5,8-26",frmPrintPreparePage:"Préparation de la page :",frmPrintPrintFailed:"Défaillance de l'impression",pnlSearchInputInvalid:"(La requette minimale et de 3 caractères",loginCaption:"Connexion",loginInvalidPassword:"Mot de passe invalide",loginPasswordLabel:"Mot de passe :",loginBtnLogin:"Connexion",loginBtnCancel:"Annuler",btnThumb:"Thumbnails",lblPages:"Pages :",lblPagesFound:"Pages :",lblPageIndex:"Page",btnAbout:"A propos",frnAboutCaption:"A propos et contact",btnSinglePage:"Page simple",btnDoublePage:"Double page",btnSwicthLanguage:"Changer de langue",tipChangeLanguage:"SVP sélectionnez la langue ci-contre",btnMoreOptionsLeft:"Plus d'options",btnMoreOptionsRight:"Plus d'options",btnFit:"Ajuster à la fenêtre",smallModeCaption:"Cliquez pour voir en plein écran",btnAddAnnotation:"Ajouter Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Sauvegardez et quittez",FlipPageEditor_Exit:"Quitter",DrawToolWindow_Redo:"Refaire",DrawToolWindow_Undo:"Annuler",DrawToolWindow_Clear:"Vider",DrawToolWindow_Brush:"Brosse",DrawToolWindow_Width:"Largeur ",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Couleur",DrawToolWindow_Eraser:"Gomme",DrawToolWindow_Rectangular:"Rectangulaire",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Bordure Largeur",TStuff_BorderAlph:"Bordure Alpha",TStuff_BorderColor:"Bordure Couleur",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Marque page",lastpagebtnHelp:"Dernière page",firstpagebtnHelp:"Première page",homebtnHelp:"Retour à la page d'accueil",aboubtnHelp:"À propos",screenbtnHelp:"Ouvrez cette application dans une fenêtre plein",helpbtnHelp:"Ouvrez la fenêtre d'aide",searchbtnHelp:"Recherche de pages",pagesbtnHelp:"Jetez un oeil à la miniaturede cette brochure",bookmarkbtnHelp:"Ouvrez un marque-page",AnnotmarkbtnHelp:"Ouvrez Table des matières",printbtnHelp:"Imprimer la brochure",soundbtnHelp:"Activer ou désactiver le son",sharebtnHelp:"Envoyer un message",socialSharebtnHelp:"Envoyer un message",zoominbtnHelp:"Zoomer",downloadbtnHelp:"Télécharger la brochure",pagemodlebtnHelp:"Page Uniqe et double",languagebtnHelp:"Mettez Lauguage",annotationbtnHelp:"Ajouter des Annotations",addbookmarkbtnHelp:"Ajouter Marque-page",removebookmarkbtnHelp:"Supprimer Marque-page",updatebookmarkbtnHelp:"Mettre à jour Marque-page",btnShoppingCart:"Panier d'Achat",Help_ShoppingCartbtn:"Panier d'Achat",Help_btnNextPage:"Page Suivante",Help_btnPrePage:"Page Précédente",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Arrêter atuo filp",btnaddbookmark:"Ajouter",btndeletebookmark:"Supprimer",btnupdatebookmark:"Mettre à Jour",frmyourbookmarks:"Vos marque-pages",frmitems:"articles",DownloadFullPublication:"Publication Complète ",DownloadCurrentPage:"Page Actuelle",DownloadAttachedFiles:"Fichiers Joints",lblLink:"Lien",btnCopy:"Copier Bouton",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Voulez-vous restaurer la session précédente",tmpl_Backgoundsoundon:"Acitver Son de Fond",tmpl_Backgoundsoundoff:"Désactiver Son de Fond",tmpl_Flipsoundon:"Acitver Son de Flip",tmpl_Flipsoundoff:"Désactiver Son de Flip",Help_PageIndex:"Le numéro de la page actuelle",tmpl_PrintPageRanges:"Intervalle de Pages",tmpl_PrintPreview:"Pré-visualiser",btnSelection:"Sélectionnez Texte",loginNameLabel:"Nom:",btnGotoPage:"Aller",btnSettings:"Paramètres",soundSettingTitle:"Paramètres de Son",closeFlipSound:"Fermer Son de Flip",closeBackgroundSound:"Fermer Son de Fond",frmShareCaption:"Partager",frmShareLinkLabel:"Lien:",frmShareBtnCopy:"Copier",frmShareItemsGroupCaption:"Partager sur Réseaux Sociaux",TAnnoActionPropertyStuff_GotoPage:"Aller à La Page",btnPageBack:"Reculer",btnPageForward:"Avancer",SelectTextCopy:"Copier Texte",selectCopyButton:"Copier",TStuffCart_TypeCart:"Panier d'Achat",TStuffCart_DetailedQuantity:"Quantité ",TStuffCart_DetailedPrice:"Prix",ShappingCart_Close:"Fermer",ShappingCart_CheckOut:"Caisse",ShappingCart_Item:"Article",ShappingCart_Total:"Total",ShappingCart_AddCart:"Ajouter au Panier",ShappingCart_InStock:"en Stock",TStuffCart_DetailedCost:"Livraison",TStuffCart_DetailedTime:"Délai de livraison",TStuffCart_DetailedDay:"jour(s)",ShappingCart_NotStock:"Not enough en stock",btnCrop:"Couper",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double page",btnBookStatus:"Book View",checkBoxInsert:"Insérer cette page",lblLast:"Ceci est la dernière page.",lblFirst:"Ceci est la première page.",lblFullscreen:"Cliquez pour voir en plein écran",lblName:"nom",lblPassword:"Mot de passe",lblLogin:"S'identifier",lblCancel:"annuler",lblNoName:"Nom d'utilisateur ne peut pas être vide.",lblNoPassword:"Mot de passe ne peut pas être vide.",lblNoCorrectLogin:"S'il vous plaît entrez le nom d'utilisateur et mot de passe.",btnVideo:"Galerie Vidéo",btnSlideShow:"diaporama",pnlSearchInputInvalid:"(La requette minimale et de 3 caractères",btnDragToMove:"Drag move mode",btnPositionToMove:"Move de position de la souris",lblHelp1:"Faites glisser le coin de la page pour voir",lblHelp2:"Double-cliquez pour zoomer, sur",lblCopy:"copie",lblAddToPage:"ajouter à la page",lblPage:"page",lblTitle:"Titre",lblEdit:"Modifier",lblDelete:"Effacer",lblRemoveAll:"Enlever tout",tltCursor:"curseur",tltAddHighlight:"ajouter clou",tltAddTexts:"ajouter des textes",tltAddShapes:"ajouter des formes",tltAddNotes:"ajouter des notes",tltAddImageFile:"ajouter fichier image",tltAddSignature:"ajouter la signature",tltAddLine:"ajouter la ligne",tltAddArrow:"ajouter flèche",tltAddRect:"ajouter rect",tltAddEllipse:"ajouter ellipse",lblDoubleClickToZoomIn:"Double-cliquez pour agrandir.",frmShareCaption:"Partager",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",lblSelectMode:"Select view mode please."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202114422292235","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.037875","y":"0.557463","width":"0.278677","height":"0.048","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:Sarahinoubli@gmail.com","linkTarget":"Blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422299647","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.058333333333333334","y":"0.08333333333333333","width":"0.14276041666666667","height":"0.25416666666666665","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/dog/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422299439","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape2","x":"0.7958333333333333","y":"0.06851851851851852","width":"0.14307291666666666","height":"0.2523148148148148","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/Bear/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422296382","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape3","x":"0.057291666666666664","y":"0.08333333333333333","width":"0.145","height":"0.25435185185185183","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/cat/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422297300","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape4","x":"0.7958333333333333","y":"0.06712962962962964","width":"0.14463541666666666","height":"0.25296296296296295","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/Frog/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422297993","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape5","x":"0.057291666666666664","y":"0.08287037037037037","width":"0.14572916666666666","height":"0.2569444444444444","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/monkey/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422299001","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape6","x":"0.7947916666666667","y":"0.06481481481481481","width":"0.14604166666666665","height":"0.25472222222222224","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/pig/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422295323","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape7","x":"0.058333333333333334","y":"0.08518518518518518","width":"0.14380208333333336","height":"0.25527777777777777","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/Horse/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422294270","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape8","x":"0.7947916666666667","y":"0.06666666666666667","width":"0.14640625000000002","height":"0.2530555555555556","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/cow/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422299393","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape9","x":"0.057291666666666664","y":"0.08333333333333333","width":"0.14479166666666668","height":"0.2537037037037037","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/Turtle/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422291738","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape10","x":"0.7947916666666667","y":"0.06296296296296296","width":"0.14479166666666668","height":"0.25925925925925924","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/penguin/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422299370","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape11","x":"0.05625","y":"0.08148148148148149","width":"0.14583333333333334","height":"0.2574074074074074","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/mouse/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202114422296642","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0.07","borderWidth":"1","borderColor":"26112","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape12","x":"0.7979166666666667","y":"0.06481481481481481","width":"0.14015625","height":"0.25555555555555554","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"560","windowHeight":"426","windowURL":"https://sarrbenamara.github.io/Elephant/"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202114422292300","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.344875","y":"0.991011","width":"0.283578","height":"-0.033378","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"960","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://Sarra.teacher.com","linkTarget":"Blank"}}]]};
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
