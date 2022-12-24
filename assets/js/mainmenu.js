class MainMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML =    `
        <div class="navbar-area">
            <div class="techSoft-nav-top-bar d-none d-lg-block">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="call-to-action">
                                <p><i class="icofont-location-pin"></i> 526 Melrose Street,New York.</p>
                                <p><i class="icofont-envelope"></i> <a href="mailto:info@example.com">info@example.com</a> </p>
                                <p><i class="icofont-ui-touch-phone"></i> <a href="tel:50530722233">+505 307 222-33</a> </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <ul class="top-social">
                                <li><a href="#"><i class="fab fa-twitter"></i></a> </li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="techSoft-responsive-nav techSoft-fixed-nav">
                <div class="container">
                    <div class="techSoft-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo-transparent.png" alt="logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="techSoft-nav techSoft-fixed-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html"> 
                            <img src="assets/img/logo-transparent.png" alt="logo">
                        </a>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item"> <a href="index.html" class="nav-link">Home</a>
                                </li>
                                <!-- <li class="nav-item"> <a href="about.html" class="nav-link">About Us</a> </li> -->
                                <li class="nav-item"> <a href="index.html#aboutus" class="nav-link">About Us</a> </li>
                                <li class="nav-item"> <a href="index.html#services" class="nav-link">Services</a>
                                    <!-- <ul class="dropdown-menu">
                                        <li class="nav-item"> <a href="services.html" class="nav-link">Services 1</a> </li>
                                        <li class="nav-item"> <a href="services-2.html" class="nav-link">Services 2</a> </li>
                                        <li class="nav-item"> <a href="single-services.html" class="nav-link">Services Details</a> </li>
                                    </ul> -->
                                </li>
                                <!-- <li class="nav-item">
                                    <a href="project.html" class="nav-link">Project <i class="fas fa-chevron-down"></i></a> 
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"> <a href="project.html" class="nav-link">Project 1</a> </li>
                                        <li class="nav-item"> <a href="project-2.html" class="nav-link">Project 2</a> </li>
                                        <li class="nav-item"> <a href="single-project.html" class="nav-link">Single Project</a> </li>
                                    </ul>
                                </li> -->
                                <li class="nav-item"> <a href="#" class="nav-link">Domains <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"> <a href="team.html" class="nav-link">Banking and Finance</a> </li>
                                        <li class="nav-item"> <a href="testimonials.html" class="nav-link">Insurance</a> </li>
                                        <li class="nav-item"> <a href="pricing.html" class="nav-link">Health Care</a> </li>
                                    </ul>
                                </li>
                                <li class="nav-item"> <a href="#" class="nav-link">Blog <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"> <a href="blog-1.html" class="nav-link">Blog Grid</a> </li>
                                        <li class="nav-item"> <a href="blog-2.html" class="nav-link">Blog Right Sidebar</a> </li>
                                        <li class="nav-item"> <a href="blog-3.html" class="nav-link">Blog Left Sidebar</a> </li>
                                        <li class="nav-item"> <a href="single-blog.html" class="nav-link">Blog Details</a> </li>
                                    </ul>
                                </li>
                                <li class="nav-item"> <a href="contact.html" class="nav-link">Contact <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"> <a href="contact.html" class="nav-link">Contact 1</a> </li>
                                        <li class="nav-item"> <a href="contact-2.html" class="nav-link">Contact 2</a> </li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- <div class="option-item navber-search-box d-none d-lg-block">
                                <i class="search-btn fa fa-search"></i> <i class="close-btn fa fa-times"></i>
                                <div class="search-overlay search-popup">
                                    <div class='search-box'>
                                        <form class="search-form">
                                            <input class="search-input" name="search" placeholder="Search" type="text">
                                            <button class="search-button" type="submit"><i class="fa fa-search"></i> </button>
                                        </form>
                                    </div>
                                </div>
                            </div> -->
                            <div class="other-option"> <a class="btn btn-primary" href="mailto:info@example.com">Get It Support</a> </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('main-menu', MainMenu);