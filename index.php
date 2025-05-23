<?php
$isscreenshot = 0;
$mattetrue = '';

$atts['ffuusstype'] = '';



//$_GET['ffuusstype'] = 'eos'; //dom one eos
$_GET['color'] = '4b4b4b';
$_GET['colorbottom'] = 'bfbfbf';
$_GET['colorintone'] = '4';
$_GET['dark'] = true;
$_GET['matte'] = false;
$_GET['darkbottom'] = true;


if(isset($_GET['color'])){
	$color = $_GET['color'];
	$colorintone = $_GET['colorintone'];
	$matte = $_GET['matte'];
	$dark = $_GET['dark'];
	$darkbottom = $_GET['darkbottom'];
	$isscreenshot = 1;

	if($matte == 'true'){
		$mattetrue = 'matte';
	}
	if($dark == 'true'){
		$darktrue = 'diy_dark';
	}
	if($darkbottom == 'true'){
		$darkbottomtrue = 'diy_dark';
	}
}else{
	$color = '4b4b4b';
}


if(isset($_GET['colorbottom'])){
	$colorbottom = $_GET['colorbottom'];
}else{
	$colorbottom = 'bfbfbf';
}


if(isset($_GET['ffuusstype'])){
	$ffuusstype = $_GET['ffuusstype'];
}else{
	$ffuusstype = $atts['ffuusstype'];
}


if($ffuusstype == 'dom'){
	$datamenumov = 'top-color';
}else{
	$datamenumov = 'exterior-color';
}



ob_start(); ?>



<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Do it yourself</title>

		<link rel='stylesheet' id='doityourself-css' href='css/custom.css' type='text/css' media='all' />
		<link rel='stylesheet' id='spectrum-css' href='css/spectrum.min.css' type='text/css' media='all' />

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
	</head>
	<body>



		<div class="doityourself" data-type="<?php echo $ffuusstype;?>" id="doityourself" color="<?php echo $color; ?>" colorbottom="<?php echo $colorbottom; ?>" colorintone="<?php echo $colorintone; ?>" data-menumov="<?php echo $datamenumov; ?>">

			<div id="genColorExt" class="diy <?php echo $mattetrue;?>">
				<div class="diy_ext <?php echo $darktrue;?>" style="background-color: #<?php echo $color; ?>;">
				</div>
				<div class="diy_logo">
				</div>
				<div class="diy_int">
				</div>
				<div class="diy_bottom <?php echo $darkbottomtrue;?>" style="background-color: #<?php echo $colorbottom; ?>;">
				</div>
			</div>

			<div class="text-interiorcolor">Interior color</div>
			<div class="color-palette color-palette-interior">
				<span class="color" color="1"></span>
				<span class="color" color="2"></span>
				<span class="color" color="3"></span>
				<span class="color" color="4"></span>
			</div>

			<div class="text-exteriorcolor">Exterior color</div>
			<div class="text-topcolor">Top color</div>

			<div class="exterior-gm">
				<div class="exterior-gloss exterior-selected">Gloss<span></span></div>
				<div class="exterior-matte">Matte<span></span></div>
			</div>

			<div class="text-bottomcolor">Bottom color<span></span></div>


			<input id="color-picker" value='#4b4b4b' />
			<input id="color-picker-2" value='#bfbfbf' />


			<div class="text-image">Image<span></span></div>
			<div class="sample-images-title">Sample images</div>
			<div class="sample-images">
				<div data-background="doityourself/doityourself-buffi.png" style="background-image: url(doityourself/doityourself-buffi.png);"></div>
				<div data-background="doityourself/doityourself-efhomes.png" style="background-image: url(doityourself/doityourself-efhomes.png);"></div>
				<div data-background="doityourself/doityourself-dletter.png" style="background-image: url(doityourself/doityourself-dletter.png);"></div>
				<div data-background="doityourself/doityourself-medisafe.png" style="background-image: url(doityourself/doityourself-medisafe.png);"></div>
			</div>
			<div class="toolshelef_0 show">
				<div class="btn-doityourself btn-custom-img">Upload image</div>
			</div>

			<div class="toolshelef_a">
				<div class="btn-doityourself toolshelef" tools-btn=".btn-zoom-in">+</div>
				<div class="btn-doityourself toolshelef" tools-btn=".btn-zoom-out">-</div>
				<!--<div class="btn" tools-btn=".btn-cancel">CANCEL</div>-->
				<div class="btn-doityourself toolshelef" tools-btn=".btn-ok">OK</div>
			</div>

			<div class="toolshelef_b">
				<div class="btn-doityourself toolshelef" tools-btn=".btn-edit">Edit</div>
				<div class="btn-doityourself toolshelef" tools-btn=".btn-del">Delete</div>
			</div>

			<div class="dropcustom">
				<div class="dropzone" data-ghost="false" data-smaller="true" data-canvas-image-only="true" data-originalsize="true" data-ajax="false" data-resize="true" style="width: 183px; height: 180px;" data-dimensionsonly="true">
			        <input type="file" id="thumb" name="thumb" style="position: absolute;">
			    </div>
			</div>


			<div class="pantoneral">
				<p>Do you need a specific <strong>Pantone</strong> or <strong>RAL</strong> color? <br>Get in contact with us and we will prepare it for you.</p>
				<a class="btn-doityourself" href="/?ffuusstype=<?php echo $_GET['ffuusstype'];?>">CONTACT</a>
			</div>
			<a id="downloadImage" class="btn-doityourself">DOWNLOAD IMAGE</a>
			<div class="doityourself-menumov">
				<ul>
					<li class="active" data-menumov="exterior-color">Exterior color</li>
					<li data-menumov="interior-color">Interior color</li>				
					<li class="active" data-menumov="top-color">Top color</li>
					<li data-menumov="bottom-color">Bottom color'</li>
					<li data-menumov="image">Image</li>
				</ul>
			</div>

		</div>


		<?php ob_end_flush(); ?>


		<script src="js/jquery-3.5.1.min.js"></script>
		<script src="js/jquery.ez-plus.js"></script>
		<script src="js/html5imageupload.js"></script>
		<script src="js/spectrum.min.js"></script>
		<script type='text/javascript' src='js/custom.js' id='doityourself-js'></script>

	</body>
</html>