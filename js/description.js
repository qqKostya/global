async function getText() {
  try {
    let response = await fetch("https://baconipsum.com/api/?type=lucky");
    let text = await response.json();
    let b = document.getElementById("title");
    b.innerText = text[0].substring(0, 100);

    return text;
  } catch (error) {
    alert(error);
  }
}

getText();
