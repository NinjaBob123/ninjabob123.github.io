<html>
<body>

$relay1 = <?php $_POST["relay1"]><br>
$step1 = explode($relay1 ", "): array
$step2 = array()
if ($step1[3] == "p4=True") {
	if ($step1[1] == "p2=True") {
		$step2 = ["p1=True"]
	}
}
else {
	$step2 = ["p1=False"]
}
if ($step1[0] ==  "p1=True") {
	if ($step1[2] == "p3=True") {
		$step2 = ["p2=True"]
	}
}
else {
	$step2 = ["p2=False"]
}
if ($step1[1] == "p2=True") {
	if ($step1[3] == "p4=True") {
		$step2 = ["p3=True"]
	}
}
else {
	$step2 = ["p3=False"]
}
if ($step1[2] == "p3=True") {
	if ($step1[0] == "p1=True") {
		$step2 = ["p4=True"]
	}
}
else {
	$step2 = ["p4=False"]
}
$relay2 = "$step2[0], $step2[1], $step2[2], $step2[3]"

<body>
<html>