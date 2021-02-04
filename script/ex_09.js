
window.onload = function () {

  // get the footer
  let bloc = document.getElementsByClassName('exercice')[0].children[2];

  // get the first div inside the footer
  let element = bloc.children[0];

  // get the canvas inside the div selected before
  let canvas = element.children[0];

  // update the style of our canvas container
  element.style.position = "relative";
  element.style.overflow = "hidden";

  // Set our canvas style
  canvas.draggable = true;
  canvas.style.position = "absolute";
  canvas.style.margin = "0";

  // get coords of the canvas
  function getCoords(el, event) {
      // returns the distance of the outer border of the canvas relative to the inner border of the parent div
      let ox = -el.offsetLeft,
          oy = -el.offsetTop;

      
      // el.scrollLeft||el.scrollTop sets the number of pixels that an element's content is scrolled from its left/top edge.
      while (el = el.offsetParent) {
          ox += el.scrollLeft - el.offsetLeft;
          oy += el.scrollTop - el.offsetTop;
      }
      
      // return the new coords of the canvas
      return { x: parseInt(event.clientX + ox) - 13, y: parseInt(event.clientY + oy) - 13 };
  }

  // Set new position of the canvas
  function updatePosition(coords) {
      canvas.style.left = coords.x + "px";
      canvas.style.top = coords.y + "px";
  }

  // Set new coords of the canvas
  function updateCoords(e) {
      let coords = getCoords(this, e);
      bloc.children[1].innerHTML =
          "Nouvelles coordonnées => {x:" + coords.x + ", y:" + coords.y + "}";
  }

  // Event for trigger the drag action
  element.addEventListener('dragover', function (e) {
      e.preventDefault();
      element.style.border = "2px solid black";
  });
  
  // Event for trigger the drop action
  element.addEventListener('drop', function(e) {
      e.preventDefault();
      element.style.border = "none";

      // get new coords of the canvas
      let coords = getCoords(this, e);

      // Use the new coords for set the new position of the canvas
      updatePosition(coords);
  });

  // Event for trigger the move when we drag the canvas
  element.addEventListener('dragover', updateCoords);
  
};



// let dragAndDrop = document.querySelector("footer > div:first-child");
// let item= document.querySelector("footer > div:last-child");
// let canva = dragAndDrop.querySelector("canvas");
// canva.draggable = true;

// canva.addEventListener("dragstart", dragStart);
// canva.addEventListener("dragend", dragEnd);
// canva.addEventListener("drag", drag);

// function dragStart(e){
    
// }

// function dragEnd(e){
    
// }

// function drag(e){
    
// }


// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var XoffSet= 0;
// var YoffSet= 0;






























// let tata = document.querySelector( "footer div:nth-child(2)");
// let dragItem = document.querySelector("footer div canvas");
// let container = document.querySelector("footer div");
// let active = false;
// let startigX;
// let startigY;
// let currentX;
// let currentY;
// let xOffset = 0;
// let yOffset = 0;


// container.addEventListener("mousedown", dragStart);
// container.addEventListener("mouseup", dragEnd);
// container.addEventListener("mousemove", drag);

// container.style.overflow = "hidden";
// function dragStart(e) {
 
// startigX = e.clientX - xOffset;
// startigY = e.clientY - yOffset;

//   if (e.target === dragItem) {
//     active = true;
//   }
// }


// function drag(e) {
//   if (active) {
  
//     e.preventDefault();
//     currentX = e.clientX - startigX;
//     currentY = e.clientY - startigY;
//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, dragItem);
//   }
// }

// function dragEnd(e) {
//     currentX = startigX ;
//     currentY = startigY ;
//     active = false;
// }


// function setTranslate(currentX, currentY, dragItem) {
//   dragItem.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)";
//   tata.innerHTML =  "Nouvelles coordonnées => {" + "x " + currentX + ","  + "y " + currentY + "}";
// }
