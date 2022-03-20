// Footer Section

class MainFooter extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
    <footer class="main-footer">
			<div class="auto-container">
				<!-- Widgets Section -->
				<div class="widgets-section">
					<div class="row clearfix">

						<!-- Big Column -->
						<div class="big-column col-lg-3 col-md-3 col-sm-12">
							<div class="row clearfix">

								<!--Footer Column-->
								<div class="footer-column col-lg-12 col-md-12 col-sm-12">
									<div class="footer-widget logo-widget">
										<div class="logo">
											<a href="index.html"><img src="images/assets/Logo-transparent.png"
													alt="" style="width: 200px;"/></a>
										</div>
										<!-- Footer Mobile Logo -->
										<div class="footer-mobile-logo">
											<a href="index.html"><img src="images/assets/Logo-transparent.png" alt=""
													title="" style="width: 150px;"></a>
										</div>
										<ul class="info-list">
											<li><span>Phone:</span>
												<a href="tel:+447875416619">+44 7875416619</a><br>
											</li>
											<li><span>Email:</span><a
													href="mailto:steven@sc-pt.co.uk">steven@sc-pt.co.uk</a></li>
											<li class="social-links"><span>Our Socials:</span>
												<a href="https://www.facebook.com/SchidgeyPT" class="fa fa-facebook"></a>
												<a href="https://www.youtube.com/channel/UCgffx6V7hLxa9pKFm9lxKmA" class="fa fa-youtube-play"></a>
												<a href="http://instagram.com/steven_chidgey" class="fa fa-instagram"></a>
											</li>
										</ul>
									</div>
								</div>

							</div>
						</div>

						<!-- Big Column -->
						<div class="big-column col-lg-9 col-md-9 col-sm-12">
							<div class="row clearfix">

								<!-- Footer Column -->
								<div class="footer-column col-lg-6 col-md-6 col-sm-12">
									<div class="footer-widget gallery-widget">
										<h6>Instagram</h6>
										<div class="widget-content">

											<div class="images-outer clearfix">
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta1.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta1.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta2.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta2.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta3.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta3.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta4.jpg"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta4.jpg" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta5.jpg"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta5.jpg" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta6.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta6.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta7.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta7.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta8.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta8.png" alt=""></a></figure>
												<!--Image Box-->
												<figure class="image-box"><a href="images/insta/insta9.png"
														class="lightbox-image" data-fancybox="footer-gallery"
														title="Image Title Here"
														data-fancybox-group="footer-gallery"><img
															src="images/insta/insta9.png" alt=""></a></figure>
											</div>

										</div>
									</div>
								</div>

								<!--Footer Column-->
								<div class="footer-column col-lg-6 col-md-6 col-sm-12">
									<div class="footer-widget newsletter-widget">
										<h6>Newsletter</h6>
										<div class="text">Stay up to date with the latest from SC-PT by signing up to the newsletter!</div>
										<!-- Newsletter Form -->
										<div class="newsletter-form">
											<form method="post" action="contact.html">
												<div class="form-group">
													<input type="email" name="email" value="" placeholder="Email"
														required="">
													<button type="submit" class="theme-btn submit-btn"><span><img
																src="images/icons/message-icon.png"
																alt="" /></span></button>
												</div>
											</form>
										</div>

									</div>
								</div>

							</div>
						</div>

					</div>
				</div>

				<!-- Footer Bottom -->
				<div class="footer-bottom">
					<div class="copyright">All Rights Reserved | SC-PT 2022</div>
				</div>

			</div>
		</footer>
`
  }
}

customElements.define('footer-section', MainFooter)
