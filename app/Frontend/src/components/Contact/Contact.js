import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Contact() {
    return (
       <div>
            <section id="templatemo_contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <header className="template_header">
                            <h1 className="text-center"><span>...</span> Contact <span>...</span></h1>
                        </header>
                        <p className="text-center">
                            <i className="fa fa-map-marker"></i> 1234 Lincoln Way, San Francisco, California<br />
                            <i className="fa fa-envelope"></i> Email: <a href="mailto:info@company.com">info@company.com</a><br />
                            <i className="fa fa-phone"></i> Phone: <a href="tel:010-020-0340">010-020-0340</a>
                        </p>
                    </div>
                </div>
                <form action="#" method="post">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-user"></i></div>
                            <input type="text" name="name" className="form-control" id="contact-name" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-at"></i></div>
                            <input type="text" name="email" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-envelope-o"></i></div>
                            <textarea name="message" className="form-control" id="contact-message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-xs-6 col-xs-offset-6">
                            <button type="submit" className="form-control">Send</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="nav nav-pills social">
                            <li><a href="www.facebook.com" className="shadow-top-down social-facebook"><i className="fa fa-facebook-official"></i></a></li>
                            <li><a href="www.twitter.com" className="shadow-top-down social-twitter"><i className="fa fa-twitter-square"></i></a></li>
                            <li><a href="www.youtube.com" className="shadow-top-down social-youtube"><i className="fa fa-youtube-square"></i></a></li>
                            <li><a href="www.instagram.com" className="shadow-top-down social-instagram"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> 
        
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 footer-copyright">
                        <p>Copyright &copy; 2084 <a href="www.google.com" target="_parent">Google</a></p>
                    </div>
                </div>
            </div>
        </footer>
       </div>

    )

}
export default Contact;