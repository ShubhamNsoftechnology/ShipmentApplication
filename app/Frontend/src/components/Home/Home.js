import './Homee.css'
import 'bootstrap/dist/css/bootstrap.css';
function Home() {

  return (
      <body id="top" >
        <main id="first" >
          <article>
            <section className="section hero has-bg-image" id="home" aria-label="home"
              style={{ background: ('./assets/images/hero-bg.svg').default }}>
              <div className="container">
                <div className="hero-content">

                  <h1 className="h1 section-title" id='logistic'>
                    Logistic Solution Around <span className="span">World</span> for Exchange
                  </h1>

                  <p className="hero-text">
                    We Carry Clearness to intricacy, Seperating basic subtitlies from contfounded data to make modern, direct arrangement
                  </p>

                  <a href="www.google.com" className="btn has-before">
                    <span className="span" id="find">Find Solution</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

                <figure className="hero-banner">

                  <div className="img-holder one" style={{ width: '270px', height: '300px' }}>
                    <img id="img1" src={require('./assets/images/nicolas-lindsay-qAamq4BaPu8-unsplash.jpg')} width="270" height="300" alt="hero banner not found" className="img-cover" />
                  </div>

                  <div className="img-holder two" style={{ width: '240px', height: '370px' }}>
                    <img src={require('./assets/images/caleb-ruiter-EmEQ6kK_5P0-unsplash.jpg')} width="240" height="370" alt="hero banner" className="img-cover" />
                  </div>

                  <img src={require('./assets/images/hero-shape-1.svg').default} width="380" height="190" alt="" className="shape hero-shape-1" />
                    
                  <img src={require('./assets/images/hero-shape-2.png')} width="622" height="551" alt="" className="shape hero-shape-2" />

                </figure>
              </div>
            </section>


            <section className="section category" aria-label="category">
              <div className="container">

                <p className="section-subtitle">Mode of Communication</p>

                <h2 className="h2 section-title">
                  Online <span className="span">Platform</span> For Remote Delivery.
                </h2>

                <p className="section-text">
                  Consectetur adipiscing elit sed do eiusmod tempor.
                </p>

                <ul className="grid-list">

                  <li>
                    <div className="category-card" style={{ color: 'hsl(170, 75%, 41%)' }}>

                      <div className="card-icon">
                        <img src={require('./assets/images/category-1.svg').default} width="40" height="40" loading="lazy"
                          alt="Online Degree Programs" className="img" />
                      </div>

                      <h3 className="h3">
                        <a href="www.google.com" className="card-title">Road Transportation</a>
                      </h3>

                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                      </p>

                      {/* <span className="card-badge">7 Courses</span> */}

                    </div>
                  </li>

                  <li>
                    <div className="category-card" style={{ color: 'hsl(351, 83%, 61%)' }}>

                      <div className="card-icon">
                        <img src={require('./assets/images/category-2.svg').default} width="40" height="40" loading="lazy"
                          alt="Non-Degree Programs" className="img" />
                      </div>

                      <h3 className="h3">
                        <a href="www.google.com" className="card-title">Air Freight</a>
                      </h3>

                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                      </p>

                      {/* <span className="card-badge">4 Courses</span> */}

                    </div>
                  </li>

                  <li>
                    <div className="category-card" style={{ color: 'hsl(229, 75%, 58%)' }}>

                      <div className="card-icon">
                        <img src={require('./assets/images/category-3.svg').default} width="40" height="40" loading="lazy"
                          alt="Off-Campus Programs" className="img" />
                      </div>

                      <h3 className="h3">
                        <a href="www.google.com" className="card-title">Ocean Freight</a>
                      </h3>

                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                      </p>

                      {/* <span className="card-badge">8 Courses</span> */}

                    </div>
                  </li>

                  <li>
                    <div className="category-card" style={{ color: 'hsl(42, 94%, 55%)' }}>

                      <div className="card-icon">
                        <img src={require('./assets/images/category-4.svg').default} width="40" height="40" loading="lazy"
                          alt="Hybrid Distance Programs" className="img" />
                      </div>

                      <h3 className="h3">
                        <a href="www.google.com" className="card-title">Train Transportation</a>
                      </h3>

                      <p className="card-text">
                        Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                      </p>

                      {/* <span className="card-badge">8 Courses</span> */}

                    </div>
                  </li>

                </ul>

              </div>
            </section>







            <section className="section about" id="about" aria-label="about">
              <div className="container">

                <figure className="about-banner">

                  <div className="img-holder" style={{ width: '520px', height: '370px' }}>
                    <img src={require('./assets/images/diego-fernandez-6Vg8N8u61aI-unsplash.jpg')} width="520" height="370" loading="lazy" alt="about banner"
                      className="img-cover" />
                  </div>

                  <img src={require('./assets/images/about-shape-1.svg').default} width="360" height="420" loading="lazy" alt=""
                    className="shape about-shape-1" />

                  <img src={require('./assets/images/about-shape-2.svg').default} width="371" height="220" loading="lazy" alt=""
                    className="shape about-shape-2" />

                  <img src={require('./assets/images/about-shape-3.png')} width="722" height="528" loading="lazy" alt=""
                    className="shape about-shape-3" />

                </figure>

                <div className="about-content">

                  {/* <p className="section-subtitle">About Us</p> */}

                  <h2 className="h2 section-title">
                    Over 10 Years in <span className="span">Distant Transportation</span> with Assurance and Inssurance
                  </h2>

                  <p className="section-text">
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
                    aliquaenim ad
                    minim.
                  </p>

                  <ul className="about-list">

                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Expert Teams</span>
                    </li>

                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Online Remote Solution</span>
                    </li>

                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Lifetime Service</span>
                    </li>

                  </ul>

                  <img src={require('./assets/images/about-shape-4.svg').default} width="100" height="100" loading="lazy" alt=""
                    className="shape about-shape-4" />

                </div>

              </div>
            </section>







            <section className="section course" id="courses" aria-label="course">
              <div className="container">

                {/* <p className="section-subtitle">Popular Courses</p> */}

                {/* <h2 className="h2 section-title">Pick A Course To Get Started</h2> */}

                <ul className="grid-list">

                  <li>
                    <div className="course-card">

                      <figure className="card-banner img-holder" style={{ width: '370px', height: '220px' }}>
                        <img src={require('./assets/images/course-1.jpg')} width="370" height="220" loading="lazy"
                          alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
                      </figure>

                      <div className="abs-badge">
                        <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                        {/* <span className="span">3 Weeks</span> */}
                      </div>

                      <div className="card-content">

                        <span className="badge">Advanced</span>

                        <h3 className="h3">
                          <a href="www.google.com" className="card-title">Quality Management System</a>
                        </h3>

                        <div className="wrapper">

                          <div className="rating-wrapper">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <p className="rating-text">(5.0/7 Rating)</p>

                        </div>

                        {/* <data className="price" value="29">$29.00</data> */}

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                            <span className="span">With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.</span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                            {/* <span className="span">20 Students</span> */}
                          </li>

                        </ul>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="course-card">

                      <figure className="card-banner img-holder" style={{ width: '370px', height: '220px' }}>
                        <img src={require('./assets/images/course-2.jpg')} width="370" height="220" loading="lazy"
                          alt="Java Programming MasterclassName for Software Developers" className="img-cover" />
                      </figure>

                      <div className="abs-badge">
                        <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                        {/* <span className="span">8 Weeks</span> */}
                      </div>

                      <div className="card-content">

                        <span className="badge">Advanced</span>

                        <h3 className="h3">
                          <a href="www.google.com" className="card-title">Ecommerce-Logistic Solution</a>
                        </h3>

                        <div className="wrapper">

                          <div className="rating-wrapper">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <p className="rating-text">(4.5 /9 Rating)</p>

                        </div>

                        {/* <data className="price" value="49">$49.00</data> */}

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                            <span className="span">With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.</span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                            {/* <span className="span">35 Students</span> */}
                          </li>

                        </ul>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="course-card">

                      <figure className="card-banner img-holder" style={{ width: '370px', height: '220px' }}>
                        <img src={require('./assets/images/course-3.jpg')} width="370" height="220" loading="lazy"
                          alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
                      </figure>

                      <div className="abs-badge">
                        <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                        {/* <span className="span">3 Weeks</span> */}
                      </div>

                      <div className="card-content">

                        <span className="badge">Advanced</span>

                        <h3 className="h3">
                          <a href="www.google.com" className="card-title">AfterMarket Services</a>
                        </h3>

                        <div className="wrapper">

                          <div className="rating-wrapper">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <p className="rating-text">(4.9 /7 Rating)</p>

                        </div>

                        {/* <data className="price" value="35">$35.00</data> */}

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                            <span className="span">With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.</span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                            {/* <span className="span">18 Students</span> */}
                          </li>

                        </ul>

                      </div>

                    </div>
                  </li>

                </ul>

                <a href="www.google.com" className="btn has-before">
                  <span className="span">Browse more Options</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </section>







            <section className="video has-bg-image" aria-label="video"
              style={{ backgroundimage: './assets/images/video-bg.png' }}>
              <div className="container">

                <div className="video-card">

                  <div className="video-banner img-holder has-after" style={{ width: '', height: '' }}>
                    <img src={require('./assets/images/video-banner.jpg')} width="970" height="550" loading="lazy" alt="video banner"
                      className="img-cover" />

                    <button className="play-btn" aria-label="play video">
                      <ion-icon name="play" aria-hidden="true"></ion-icon>
                    </button>
                  </div>

                  <img src={require('./assets/images/video-shape-1.png')} width="1089" height="605" loading="lazy" alt=""
                    className="shape video-shape-1" />

                  <img src={require('./assets/images/video-shape-2.png')} width="158" height="174" loading="lazy" alt=""
                    className="shape video-shape-2" />

                </div>

              </div>
            </section>






            <section className="section stats" aria-label="stats">
              <div className="container">

                <ul className="grid-list">

                  <li>
                    <div className="stats-card" style={{ color: '170px, 75%, 41%' }}>
                      <h3 className="card-title">300+</h3>

                      <p className="card-text">Warehouse Managed</p>
                      <p className="card-text" > We help you mitigate supply chain disruptions. </p>
                    </div>
                  </li>

                  <li>
                    <div className="stats-card" style={{ color: '351, 83%, 61%' }}>
                      <h3 className="card-title">120+</h3>

                      <p className="card-text">Supply Engineer</p>
                      <p className="card-text" > We help you mitigate supply chain disruptions. </p>
                    </div>
                  </li>

                  <li>
                    <div className="stats-card" style={{ color: '260px, 100%, 67%' }}>
                      <h3 className="card-title">180+</h3>

                      <p className="card-text">Country Cover</p>
                      <p className="card-text" > We help you mitigate supply chain disruptions. </p>
                    </div>
                  </li>

                  <li>
                    <div className="stats-card" style={{ color: '42, 94%, 55%' }}>
                      <h3 className="card-title">354+</h3>

                      <p className="card-text">Comapany We Helped</p>
                      <p className="card-text" > We help you mitigate supply chain disruptions. </p>
                    </div>
                  </li>

                </ul>

              </div>
            </section>







            <section className="section blog has-bg-image" id="blog" aria-label="blog"
              style={{ backgroundimage: './assets/images/blog-bg.svg' }}
              >
              <div className="container">

                <p className="section-subtitle">Happy Customer</p>

                <h2 className="h2 section-title">Across World</h2>

                <ul className="grid-list">

                  <li>
                    <div className="blog-card">

                      <figure className="card-banner img-holder has-after" style={{ width: '370px', height: '370px' }}>
                        <img src={require('./assets/images/blog-1.jpg')} width="370" height="370" loading="lazy"
                          alt="Become A Better Blogger: Content Planning" className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <a href="www.google.com" className="card-btn" aria-label="read more">
                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                        <p  className="card-subtitle">USA</p>

                        <h3 className="h3">
                          <p className="card-title">Harold perish </p>
                        </h3>

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                            <span className="span">Oct 10, 2021</span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                            <span className="span"></span>
                          </li>

                        </ul>

                        <p className="card-text">
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="blog-card">

                      <figure className="card-banner img-holder has-after" style={{ width: '370px', height: '370px' }}>
                        <img src={require('./assets/images/blog-2.jpg')} width="370" height="370" loading="lazy"
                          alt="Become A Better Blogger: Content Planning" className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <a href="www.google.com" className="card-btn" aria-label="read more">
                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                        <a href="www.google.com" className="card-subtitle">London</a>

                        <h3 className="h3">
                          <a href="www.google.com" className="card-title">Tomm Skywalker</a>
                        </h3>

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                            <span className="span">Oct 10, 2021 </span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                            
                          </li>

                        </ul>

                        <p className="card-text">
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="blog-card">

                      <figure className="card-banner img-holder has-after" style={{ width: '370px', height: '370px' }}>
                        <img src={require('./assets/images/blog-3.jpg')} width="370" height="370" loading="lazy"
                          alt="Become A Better Blogger: Content Planning" className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <a href="www.google.com" className="card-btn" aria-label="read more">
                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                        <a href="www.google.com" className="card-subtitle">UK</a>

                        <h3 className="h3">
                          <a href="www.google.com" className="card-title">Rozzi </a>
                        </h3>

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                            <span className="span">Oct 10, 2021</span>
                          </li>

                          <li className="card-meta-item">
                            <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                            <span className="span"></span>
                          </li>

                        </ul>

                        <p className="card-text">
                          Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>

                      </div>

                    </div>
                  </li>

                </ul>

                <img src={require('./assets/images/blog-shape.png')} width="186" height="186" loading="lazy" alt=""
                  className="shape blog-shape" />

              </div>
            </section>

          </article>
        </main>







        <footer className="footer" style={{ backgroundimage: './assets/images/footer-bg.png' }}>

          <div className="footer-top section">
            <div className="container grid-list">

              <div className="footer-brand">

                <a href="www.google.com" className="logo">
                  <h1 style={{font:'30px',color:'white'}}>Logistic Delivery</h1>
                  {/* <img src={require('./assets/images/logo-light.svg').default} width="162" height="50" alt="EduWeb logo" /> */}
                </a>

                <p className="footer-brand-text">
                  Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
                </p>

                <div className="wrapper">
                  <span className="span">Add:</span>

                  <address className="address">70-80 Upper St Norwich NR2</address>
                </div>

                <div className="wrapper">
                  <span className="span">Call:</span>

                  <a href="tel:+011234567890" className="footer-link">+01 123 4567 890</a>
                </div>

                <div className="wrapper">
                  <span className="span">Email:</span>

                  <a href="mailto:info@eduweb.com" className="footer-link">info@logisticdelivery.com</a>
                </div>

              </div>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Online Delivery Platform</p>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">About</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Contact</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Instructor</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Events</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Instructor Profile</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">User Guide</a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Links</p>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Contact Us</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Gallery</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">News & Articles</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">FAQ's</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Sign In/Registration</a>
                </li>

                <li>
                  <a href="www.google.com" className="footer-link">Coming Soon</a>
                </li>

              </ul>

              <div className="footer-list">

                <p className="footer-list-title">Contacts</p>

                <p className="footer-list-text">
                  Enter your email address to register to our newsletter subscription
                </p>

                <form action="" className="newsletter-form">
                  <input type="email" name="email_address" placeholder="Your email" required className="input-field" />

                  <button type="submit" className="btn has-before">
                    <span className="span">Subscribe</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </button>
                </form>

                <ul className="social-list">

                  <li>
                    <a href="www.google.com" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="www.google.com" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="www.google.com" className="social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="www.google.com" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="www.google.com" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                  </li>

                </ul>

              </div>

            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">

              <p className="copyright">
                Copyright 2023 All Rights Reserved by <a href="https://www.google.com" className="copyright-link">Logistic Delivery</a>
              </p>

            </div>
          </div>

        </footer>

        <a href="www.google.comtop" className="back-top-btn" aria-label="back top top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
      </body>
    
  )
}
export default Home;

