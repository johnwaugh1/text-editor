const textarea = document.getElementById("document");

function f1(e)
{
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e)
{
    if(textarea.style.fontWeight == "bold")
    {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else
    {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e)
{
    if(textarea.style.fontStyle == "italic")
    {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else
    {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e)
{
    if(textarea.style.textDecoration == "underline")
    {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else
    {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

// function slash(e)
// {
//     if(textarea.style.textDecoration == "line-through")
//     {
//         textarea.style.textDecoration = "none";
//         e.classList.remove("active");
//     }
//     else
//     {
//         textarea.style.textDecoration = "line-through";
//         e.classList.add("active");
//     }
// }

// function indent(e)
// {
//     if(textarea.style.textIndent == "text-indent")
//     {
//         textarea.style.textIndent == "none";
//         e.classList.remove("active");
//     }
//     else
//     {
//         textarea.style.textIndent == "text-indent";
//         e.classList.add("active");
//     }
// }

function f5(e)
{
    textarea.style.textAlign = "left";
}

function f6(e)
{
    textarea.style.textAlign = "center";
}

function f7(e)
{
    textarea.style.textAlign = "right";
}

function f8(e)
{
    if(textarea.style.textTransform == "uppercase")
    {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else
    {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9()
{
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e)
{
    let value = e.value;
    textarea.style.color = value;
}

// function download() 
// {
//     var fileName = document.getElementById("title").value; // Get the filename from the textarea
//     var fileContent = document.getElementById("document").value; // Get the content from the textarea
  
//     if (fileName === "" || fileContent === "") {
//         alert("Please enter a title and document before downloading.");
//         return;
//       }

//     var element = document.createElement("a");
//     element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
//     element.setAttribute("download", fileName + ".txt");
  
//     element.style.display = "none";
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
// }

function dropdown() 
{
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function saveAs() {
    var fileContent = document.getElementById("document").value; // Get the content from the textarea

    if (fileContent === "") {
        alert("Please enter some content before saving.");
        return;
    }

    var fileName = prompt("Enter the filename:", "Untitled Document");
    if (fileName === null) {
        // User clicked Cancel in the prompt
        return;
    }

    if (fileName.trim() === "") {
        alert("Please enter a valid filename.");
        return;
    }

    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
    element.setAttribute("download", fileName + ".txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// function openFileExplorer() {
//     var fileInput = document.getElementById("fileInput");
//     fileInput.click();

//     fileInput.addEventListener("change", function() {
//       var file = fileInput.files[0];
//       if (file) {
//         var reader = new FileReader();
//         reader.onload = function(event) {
//           var fileContent = event.target.result;
//           var fileName = file.name.replace(/\.[^/.]+$/, ""); 
//           downloadAsTxtFile(fileName, fileContent);
//         };
//         reader.readAsText(file);
//       }
//     });
//   }

//   function downloadAsTxtFile(fileName, fileContent) {
//     var blob = new Blob([fileContent], { type: "text/plain" });
//     var url = URL.createObjectURL(blob);

//     var element = document.createElement("a");
//     element.setAttribute("href", url);
//     element.setAttribute("download", fileName + ".txt");

//     element.style.display = "none";
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
//     URL.revokeObjectURL(url); 
//   }

  function download() {
    var fileName = document.getElementById("title").value.trim() || "Untitled Document";
    var fileContent = document.getElementById("document").value;

    if (fileName === "" || fileContent === "") {
      alert("Please enter a title and document before downloading.");
      return;
    }

    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
    element.setAttribute("download", fileName + ".txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }