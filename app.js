let body = document.querySelector("body")
class web{
    nav(){
      let navbar = ""
      navbar+=`
      <div class="page1" id="nav">
      <div class="contain">
      <nav>
          <div class="nav_logo">
              <a href="home.html"> <img src="media/logo.png" alt=""></a>
          </div>
          <input type="checkbox" id="check">
          <div class="nav_ul">
              <ul>
                  <li><a href="#" class="nav_a">Home</a></li>
                  <li><a href="#">Destinations</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Partner</a></li>
              </ul>
              <button>Login</button>
              <button>Register</button>
              <label for="check" class="label"><img src="media/Group 15.1.png" alt=""></label>
          </div>
      </nav>
  </div>
  </div>
      `
      body.insertAdjacentHTML("beforebegin" ,navbar)
      return this;
  }
   main(){
    let main = "";
    main+=`
    <main id="main">
    <div class="contain">
   <div class="main_boxs">
       <div class="main_box">
          <img src="media/image1.png" alt="" width="100%">
          <div class="main_box_txt">
          <h5 class="p2">Marketing</h5>
          <h3>The Ultimate Google Ads Training Course</h3>
          <div class="summa">
            <p>$100</p>
            <p>|</p>
            <p>by Jerome Bell</p>
          </div>
        </div>
       </div>
       <div class="main_box">
        <img src="media/image2.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p3">Management</h5>
        <h3>The Ultimate Google Ads Training Course</h3>
        <div class="summa">
          <p>$480</p>
          <p>|</p>
          <p>by Marvin McKinney</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image3.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p4">HR & Recruting</h5>
        <h3>HR  Management and Analytics</h3>
        <div class="summa">
          <p>$200</p>
          <p>|</p>
          <p>by Leslie Alexander Li</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image4.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p2">Marketing</h5>
        <h3>Brand Management & PR Communications</h3>
        <div class="summa">
          <p>$530</p>
          <p>|</p>
          <p>by Kristin Watson</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image5.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p5">Design</h5>
        <h3>Graphic Design Basic</h3>
        <div class="summa">
          <p>$500</p>
          <p>|</p>
          <p>by Guy Hawkins</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image6.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p3">Management</h5>
        <h3>The Ultimate Google Ads Training Course</h3>
        <div class="summa">
          <p>$100</p>
          <p>|</p>
          <p>by Jerome Bell</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image7.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p3">Development</h5>
        <h3>The Ultimate Google Ads Training Course</h3>
        <div class="summa">
          <p>$600</p>
          <p>|</p>
          <p>by Jerome Bell</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image8.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p4">HR & Recruting</h5>
        <h3>Human Resources – Selection and Recruitment</h3>
        <div class="summa">
          <p>$150</p>
          <p>|</p>
          <p>by Kathryn Murphy</p>
        </div>
      </div>
     </div>
     <div class="main_box">
        <img src="media/image9.png" alt="" width="100%">
        <div class="main_box_txt">
        <h5 class="p5">Design</h5>
        <h3>User Experience. Human-centered Design</h3>
        <div class="summa">
          <p>$240</p>
          <p>|</p>
          <p>by Cody Fisher</p>
        </div>
      </div>
     </div>

   </div>
</div>
</main>
    `
    body.insertAdjacentHTML("afterbegin" ,main)
    return this;
}
footer(){
    let data = "";
        data+=`
        <footer id="footer">
        <div class="contain">
            <div class="footer_main">
            <div class="footer1">
                <div class="footer1_img">
                    <img src="media/logo.png" alt="">
                </div>
                <p>Plan and book your perfect trip with 
                    expert advice, travel tips destination
                    information from us</p>
                <p>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <div class="footer2">
                <ul>
                    <li>Destinations</li>
                    <li><a href="#">Africa</a></li>
                    <li><a href="#">Antarctica</a></li>
                    <li><a href="#"> Asia</a></li>
                    <li><a href="#"> Europe</a></li>
                    <li><a href="#"> America</a></li>
                </ul>
                <ul>
                    <li>Shop</li>
                    <li><a href="#">Destination Guides</a></li>
                    <li><a href="#"> Pictorial & Gifts</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#"> Delivery Times</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>

                <ul>
                    <li>Interests</li>
                    <li><a href="#">Adventure Travel</a></li>
                    <li><a href="#">Art And Culture</a></li>
                    <li><a href="#"> Wildlife And Nature</a></li>
                    <li><a href="#"> Family Holidays</a></li>
                    <li><a href="#">Food And Drink</a></li>
                </ul>
            </div>
            </div>
            <hr>
            <div class="web">
            </div>
        </div>
        </footer>
        `
       body.insertAdjacentHTML("beforeend" ,data)
        return this;

}
}

let website = new web();
website.nav().main().footer();
