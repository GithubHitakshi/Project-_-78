var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://cdn4.vectorstock.com/i/1000x1000/23/08/super-dad-cartoon-vector-36752308.jpg", "https://media.istockphoto.com/id/832179306/vector/super-hero-super-mom-happy-smiling-super-mother-with-her-children.jpg?s=612x612&w=0&k=20&c=1lFfmLVGEkKBVyufaqDaqyJQPjMy8rE8seFnqbaPHwc=" , "https://img.freepik.com/free-vector/little-indian-girl-looks-up-shows-her-fingers-up-dark-skin-cartoon-character_71593-1022.jpg?w=2000", "https://static.vecteezy.com/system/resources/previews/006/634/891/original/cartoon-a-boy-waving-hand-free-vector.jpg"];
var names = ["Family Book","Harsh - Father", "Aarti - Mother", "Hitakshi - Me", "Rivan - Bro"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
