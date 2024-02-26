<html>
<body>

<script>
    const relay1 = <php echo json_encode($_POST["relay1"]); ?>;
    const step1 = relay1.split(", ");
    let step2 = [];

    if (step1[3] === "p4=True") 
        if (step1[1] === "p2=True") 
            step2 = ["p1=True"]
    else {
        step2 = ["p1=False"]}

    if (step1[0] === "p1=True")
        if (step1[2] === "p3=True") 
            step2 = ["p2=True"] 
    else {
        step2 = ["p2=False"]}

    if (step1[1] === "p2=True") 
        if (step1[3] === "p4=True") 
            step2 = ["p3=True"]
    else {
        step2 = ["p3=False"]}

    if (step1[2] === "p3=True")
        if (step1[0] === "p1=True")
            step2 = ["p4=True"] 
    else {
        step2 = ["p4=False"]}

    const relay2 = step2.join(", ");
    document.write(`<p>${relay2}</p>`);
</script>

</body>
</html>
