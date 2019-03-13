var canvasuno=document.getElementById("uno");
var imagencargada=null;
var imagencargada2=null;
 var imagencargada3=null;
 var imagencargada4=null;
 var imagencargada5=null;
var imagencargada6=null; 
 var imagencargada7=null;
var imagencargada8=null;

function loadimagen(){
  var imagenes=document.getElementById("fentrada");
      imagencargada=new SimpleImage(imagenes);
      imagencargada2=new SimpleImage(imagenes);
      imagencargada3=new SimpleImage(imagenes);
      imagencargada4=new SimpleImage(imagenes);
      imagencargada5=new SimpleImage(imagenes);
      imagencargada6=new SimpleImage(imagenes);
      imagencargada7=new SimpleImage(imagenes);
      imagencargada8=new SimpleImage(imagenes);
      imagencargada.drawTo(canvasuno)
   return;
    alert("Image has been load")
}


function applyrojo(){
  alert("Filter rojo has been load")
  for (var pixel of imagencargada2.values()){
       var newR=255;
       pixel.setRed(newR);
        }
  imagencargada2.drawTo(canvasuno)
  }


function applyGrises(){
  alert("filter grises has been apply")
 for( var pixel of imagencargada3.values()){
     var uno=pixel.getRed();
    var dos=pixel.getGreen();
    var tres=pixel.getBlue();
   var cuatro=((uno+dos+tres)/3);
    pixel.setRed(cuatro);
    pixel.setGreen(cuatro);
    pixel.setBlue(cuatro);    
}
 imagencargada3.drawTo(canvasuno) 
}


function applyarcoiris(){
  alert("filter arcoiris has been apply")
  var largo= imagencargada4.getHeight(); 
for (var pixel of  imagencargada4.values()){
    if  (pixel.getY()<(largo*(1/7)) ){
        var newR=255;
        pixel.setRed(newR); 
    }else if ((pixel.getY())>((largo)*1/7) && (pixel.getY())<((largo)*(2/7))){
      var newR=255;
      var newG=140;
      var newB=0;
         pixel.setRed(newR);
         pixel.setGreen(newG); 
    }else if ((pixel.getY())>((largo)*2/7) && (pixel.getY())<((largo)*(3/7))){
         var newR=255;
         var newG=255;
          var newB=0;
        pixel.setRed(newR);
         pixel.setGreen(newG);
      }else if ((pixel.getY())>((largo)*3/7) && (pixel.getY())<((largo)*(4/7))){
           var newG=255;
           pixel.setGreen(newG);
     }else if ((pixel.getY())>((largo)*4/7) && (pixel.getY())<((largo)*(5/7))){
         var newG=170;
          var newB=255;
         pixel.setGreen(newG);
         pixel.setBlue(newB);
      }else if ((pixel.getY())>((largo)*5/7) && (pixel.getY())<((largo)*(6/7))){
        var newB=255;
         pixel.setBlue(newB);  
    }else {
          var newR=170;
          var newB=255;
         pixel.setRed(newR);
         pixel.setBlue(newB);
        }
}
 imagencargada4.drawTo(canvasuno)
}


function applymatizrojos(){
  alert("filter Matiz de rojos has been apply")
  for (var pixel of imagencargada5.values()){
    
    var rojo =pixel.getRed();
    var verde=pixel.getGreen();
    var azul =pixel.getBlue();
    var promedio=(rojo+verde+azul)/3
    
    if (promedio < 128){
      var c=(2*promedio)
        pixel.setRed(c);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }  
}
    imagencargada5.drawTo(canvasuno)
}



function Agregarmarco(){
   alert("filter Marco Especial has been apply")
  for (var pixel of imagencargada6.values()){
   
    var x=pixel.getX();
    var y=pixel.getY();
   var anchode=imagencargada6.getWidth();
   var largode=imagencargada6.getHeight();
 if (x<(25) || y>(1500)  || x>((anchode-30)))  {  
     
     pixel.setRed(255);
     pixel.setBlue(4);
 }
  if ( y<(150*Math.abs(Math.cos(x))) || (70*Math.abs(Math.cos(x)))>x || x>(500000*Math.abs(Math.cos(x)))   )  {
  pixel.setRed(255);
  pixel.setBlue(4);
    }
}
  imagencargada6.drawTo(canvasuno) 
}




function Rainbow2(){
   
 var largo= imagencargada7.getHeight();
 
for (var pixel of  imagencargada7.values()){
   var Rc;
    var Gc;
    var Bc;
    var avg= ((Rc+Gc+Bc)/3);
  
  if  (pixel.getY()<(largo*(1/7)) ){
    
    Rc=255;
    Gc=0;
    Bc=0;
    
  if (avg<128){
         var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
     pixel.setRed(R);
    }else if(avg >=128){
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setRed(R);
            pixel.setGreen(G);
            pixel.setBlue(B);
    }       
   }else if ((pixel.getY())>((largo)*1/7) && (pixel.getY())<((largo)*(2/7))){
    Rc=255;
    Gc=140;
    Bc=0;
    
  if (avg<128){
    
          var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
            pixel.setRed(R);
            pixel.setGreen(G)
  }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setRed(R);
            pixel.setGreen(G);
        
 
  }
   }else if ((pixel.getY())>((largo)*2/7) && (pixel.getY())<((largo)*(3/7))){
      
    Rc=255;
    Gc=255;
    Bc=0;
    
  if (avg<128){
          var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
    
            pixel.setRed(R);
            pixel.setGreen(G)
            
  }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setRed(R);
            pixel.setGreen(G);
        
  }
   
   }else if ((pixel.getY())>((largo)*3/7) && (pixel.getY())<((largo)*(4/7))){
         
    Rc=0;
    Gc=255;
    Bc=0;
    
  if (avg<128){
      var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
         
            pixel.setGreen(G)
                  
 }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setGreen(G);
            
 }   
        
      }else if ((pixel.getY())>((largo)*4/7) && (pixel.getY())<((largo)*(5/7))){
          
    Rc=0;
    Gc=0;
    Bc=255;
    
  if (avg<128){
    
          var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
    
            pixel.setBlue(R);
        
 }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
           
            pixel.setBlue(B);
        
 }  
        
      }else if ((pixel.getY())>((largo)*5/7) && (pixel.getY())<((largo)*(6/7))){
     
    Rc=170;
    Gc=0;
    Bc=255;
    
  if (avg<128){
    
          var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
    
            pixel.setRed(R);
            pixel.setBlue(B)
            
 }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setRed(R);
            pixel.setBlue(B);
 }   
     }else {
    Rc=1.8*(avg);
    Gc=0;
    Bc=1.8*(avg);
    
  if (avg<128){
    
          var R = Rc/127.5*avg;   
          var G = Gc/127.5*avg;   
          var B = Bc/127.5*avg;   
    
            pixel.setRed(R);
            pixel.setBlue(B)
            
            
 }else if(avg >=128){
             
          var R = ((2 - Rc/127.5)*avg + 2*Rc - 255);  
          var G = ((2 - Gc/127.5)*avg + 2*Gc - 255); 
          var B = ((2 - Bc/127.5)*avg + 2*Bc - 255);  
            pixel.setRed(R);
            pixel.setBlue(B);
  
    }
} 
  
}
     alert("filter Rainbow has been apply")
imagencargada7.drawTo(canvasuno)
}

  function Reset(){
  alert("Reset has been apply")
       loadimagen()
           }

function alea(x, y){
    
   var x2=x+(Math.round(Math.random()));
   var y2=y+(Math.round(Math.random())) ;
    return [x2 , y2];
    
}
function Blurde(){
     alert("Blur has been apply")
var imgnueva =new SimpleImage(imagencargada8.getWidth(),imagencargada8.getHeight());

var ancho= imagencargada8.getWidth();
var alto=imagencargada8.getHeight();
  
for (var pixel of imagencargada8.values()) {
               
    var aleatoria=Math.random(); 
    
    if (aleatoria<=0.5){
   
    var x= pixel.getX();
    var y= pixel.getY();
   
    imgnueva.setPixel(x,y,pixel);
    
    }else {
      var yu=alea(x,y);
        
              var x1=yu[0];
              var y1=yu[1];
              

            if (x1<(ancho-1) && y1<(alto-1)){
               
                imgnueva.setPixel(x1,y1,pixel)
                
              
            }  
      
    }
     
 
}
 imgnueva.drawTo(canvasuno) 
}