Webcam.set({ width:300, height:300, image_format:'png', png_quality:100 });
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){ 
    Webcam.snap(function (data_uri){ 
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="cap_img">';
 });
 }
 console.log(ml5.version,"m15");
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/E2DXrr306/model.jason',modelLoaded) ;
  function modelLoaded(){ console.log('modelloaded');
}
function check(){ img=document.getElementById("cap_img"); classifier.classify(img,gotResult); }
function gotResult(error, results){
     if (error) {
console.error(error);
} else { console.log(results); 
   document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3); } }