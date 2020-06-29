//DOM Elements
const woodImgHolder = document.getElementById("wood");
const vishnuImgHolder = document.getElementById("Vishnu");
const buddhaImgHolder = document.getElementById("buddha");
const ganeshaImgHolder = document.getElementById("ganesha");
const animalsImgHolder = document.getElementById("animals");
const godImgHolder = document.getElementById("gods");
const tenImgHolder = document.getElementById("ten");

//Enter total number of wood images
var woodimgs = 27;
var vishuimgs = 5;
var buddhaimgs = 5;
var ganeshaimgs = 6;
var godimgs = 6;
var animalsimgs = 9;
var tenimgs = 6;

insertImgs("Buddha", buddhaimgs, buddhaImgHolder, "Buddha");
insertImgs("ganesh", ganeshaimgs, ganeshaImgHolder, "Ganesha");
insertImgs("nara", vishuimgs, vishnuImgHolder, "vishu");
insertImgs("wood", woodimgs, woodImgHolder, "wood");
insertImgs("gods", godimgs, godImgHolder, "god");
insertImgs("animals", animalsimgs, animalsImgHolder, "Animals");
insertImgs("10", tenimgs, tenImgHolder, "Desavadharam");

/*
@params (directory_name, number of image , place holders, name)
*/
function insertImgs(dirName, size, placholder, name) {
  let singleImg = " ";

  for (var i = 1; i <= size; i++) {
    singleImg += `<div class="col-md-3">
              <div class="single-teachers-area text-center mb-70 wow fadeInUp" data-wow-delay="400ms">
                  <!-- Thumbnail -->
                  <div class="teachers-thumbnail">
                    <a href="img/gallery/${dirName}/${i}.jpg" class="gallery-img" title="${name}- ${i}"><img
                      src="img/gallery/${dirName}/${i}.jpg" alt="${name +
      " image " +
      i}"></a>
                  </div>
              </div>
              </div>
              `;
  }
  placholder.innerHTML = singleImg;
}
