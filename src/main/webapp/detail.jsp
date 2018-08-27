<!DOCTYPE HTML>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<HTML>
<HEAD>
<META content="IE=11.0000" http-equiv="X-UA-Compatible">

<META http-equiv="X-UA-Compatible" content="IE=11.0000">
<META charset="UTF-8">
<TITLE>我的家</TITLE>
<META name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<LINK href="front/swiper.min.css" rel="stylesheet" type="text/css"
	media="all">
<LINK href="front/jquery.selectbox.css" rel="stylesheet" type="text/css"
	media="all">
<LINK href="front/slidebars.css" rel="stylesheet" type="text/css"
	media="all">
<LINK href="front/main.css" rel="stylesheet" type="text/css" media="all">
<LINK href="front/responsive.css" rel="stylesheet" type="text/css"
	media="all">
<LINK href="front/relatedlink.css" rel="stylesheet" type="text/css"
	media="all">
<SCRIPT src="front/jquery-2.1.1.min.js"></SCRIPT>

<SCRIPT src="front/jquery-ui.min.js"></SCRIPT>

<SCRIPT src="front/swiper.min.js"></SCRIPT>

<SCRIPT src="front/jquery.date-dropdowns.min.js"></SCRIPT>

<SCRIPT src="front/jquery.validate.min.js"></SCRIPT>

<SCRIPT src="front/slidebars.min.js"></SCRIPT>

<SCRIPT src="front/SelectBox.min.js"></SCRIPT>

<SCRIPT src="front/modal.js"></SCRIPT>

<SCRIPT src="front/css_browser_selector.js"></SCRIPT>

<SCRIPT src="front/cropper.min.js"></SCRIPT>

<SCRIPT src="front/loadmore.js"></SCRIPT>

<SCRIPT src="front/main.js"></SCRIPT>

<META name="GENERATOR" content="MSHTML 11.00.9600.18639">
</HEAD>
<BODY>
	<DIV off-canvas="slidebar-1 left reveal">
		<UL class="cats-menu">
			<LI><A class="active" href="front/BENWIRJW.htm"><SPAN><I
						class="icon-web-home"></I>主页</SPAN></A></LI>
			<LI class="item-fashion"><A
				href="http://localhost/category/fashion"><I
					class="icon-web-fashion"><SPAN class="path1"></SPAN><SPAN
						class="path2"></SPAN><SPAN class="path3"></SPAN></I> <SPAN>时尚</SPAN> </A></LI>
			<LI class="item-beauty"><A
				href="http://localhost/category/beauty"><I
					class="icon-web-beauty"><SPAN class="path1"></SPAN><SPAN
						class="path2"></SPAN><SPAN class="path3"></SPAN></I> <SPAN>美食</SPAN> </A></LI>
		</UL>
	</DIV>
	<DIV id="wrapper" canvas="container">
		<DIV class="drawer-menu only-sp">
			<BUTTON class="menu-btn js-toggle-left-slidebar">
				<I class="icon-web-menu"></I>
			</BUTTON>
			<BUTTON class="menu-btn js-toggle-right-slidebar only-sp">
				<I class="icon-web-ranking"></I>Ranking!
			</BUTTON>
		</DIV>
		<HEADER id="header">
			<DIV class="top-header">
				<DIV class="container">
					<DIV class="l-header">
						<UL class="social-links only-pc">
							<LI class="drawer-menu"><BUTTON
									class="menu-btn js-toggle-left-slidebar">
									<I class="icon-web-menu"></I>
								</BUTTON>
								<BUTTON class="menu-btn js-toggle-right-slidebar only-sp">Ranking!</BUTTON>
							</LI>
							<LI><A title="Facebook" class="fb"
								href="https://www.facebook.com/mamagirl.jp" target="_blank"><I
									class="icon-web-facebook"><SPAN class="path1"></SPAN><SPAN
										class="path2"></SPAN></I></A></LI>
							<LI><A title="Twitter" class="twitter"
								href="https://twitter.com/mamagirl_jp" target="_blank"><I
									class="icon-web-twitter"><SPAN class="path1"></SPAN><SPAN
										class="path2"></SPAN></I></A></LI>
							<LI><A title="Instagram" class="instagram"
								href="https://instagram.com/mamagirl_jp/" target="_blank"><I
									class="icon-web-instagram"><SPAN class="path1"></SPAN><SPAN
										class="path2"></SPAN> <SPAN class="path3"></SPAN><SPAN
										class="path4"></SPAN> </I></A></LI>
						</UL>
					</DIV>
					<DIV class="logo">
						<A href="front/BENWIRJW.htm"><IMG src="front/logo.svg">
						</A>
					</DIV>
					<DIV class="r-header">
						<UL class="only-pc">
							<LI><A class="search" href="http://localhost/search/hash">Search</A></LI>
							<LI><A class="posting"
								href="http://localhost/user/contents_post">Posting</A></LI>
							<LI><A class="like" href="http://localhost/user/checkme">Like</A></LI>
							<LI><A class="mypage" href="http://localhost/user">My
									page</A></LI>
							<LI><A class="js-toggle-right-slidebar raking"
								href="http://localhost/#">Ranking!</A></LI>
						</UL>
					</DIV>
				</DIV>
			</DIV>
			<DIV class="main-menu">
				<DIV class="container">
					<UL class="nav only-pc" id="main-menu-pc">
						<LI class="item-magazine"><A
							href="http://localhost/docs/magazine"><SPAN>Magazine</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-shopping"><A href="http://localhost/ec"><SPAN>Shopping</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-comic"><A
							href="http://localhost/category/mamagirl-comic"><SPAN>comic</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-mamagirl"><A
							href="http://localhost/category/mamagirl-all"><SPAN>mamagirl</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-top"><A class="active"
							href="front/BENWIRJW.htm"><SPAN>Top</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-fashion"><A
							href="http://localhost/category/fashion"><SPAN>fashion</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-beauty"><A
							href="http://localhost/category/beauty"><SPAN>beauty</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-interior"><A
							href="http://localhost/category/interior"><SPAN>interior</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-food"><A
							href="http://localhost/category/food"><SPAN>food</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-baby-kids"><A
							href="http://localhost/category/baby-kids"><SPAN>baby
									&amp; kids</SPAN></A></LI>
						<!--
                        -->
						<LI class="item-free"><A
							href="http://localhost/category/free"><SPAN>free</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-talk"><A
							href="http://localhost/category/talk"><SPAN>talk</SPAN></A></LI>
					</UL>
					<UL class="nav only-sp" id="main-menu-sp">
						<LI class="item-magazine"><A
							href="http://localhost/docs/magazine"><SPAN>Magazine</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-shopping"><A href="http://localhost/ec"><SPAN>Shopping</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-comic"><A
							href="http://localhost/category/mamagirl-comic"><SPAN>comic</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-mamagirl"><A
							href="http://localhost/category/mamagirl-all"><SPAN>mamagirl</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-top"><A class="active"
							href="front/BENWIRJW.htm"><SPAN>Top</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-fashion"><A
							href="http://localhost/category/fashion"><SPAN>fashion</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-beauty"><A
							href="http://localhost/category/beauty"><SPAN>beauty</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-interior"><A
							href="http://localhost/category/interior"><SPAN>interior</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-food"><A
							href="http://localhost/category/food"><SPAN>food</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-baby-kids"><A
							href="http://localhost/category/baby-kids"><SPAN>baby
									&amp; kids</SPAN></A></LI>
						<!--
                        -->
						<LI class="item-free"><A
							href="http://localhost/category/free"><SPAN>free</SPAN></A></LI>
						<!--
                        -->

						<LI class="item-talk"><A
							href="http://localhost/category/talk"><SPAN>talk</SPAN></A></LI>
					</UL>
				</DIV>
			</DIV>
		</HEADER>
		<main id="contents"> <SCRIPT>
	var currentPage =1 ;
	var pagesize = 12;
	var counts = 60774;
	window.onload=function(){
		var countsPage = pagesize;
		if(countsPage >= counts){
			$('#loadMore').hide();
		}
	}
	function loadMore(){
		if (currentPage < 1) {
			pagesize = 24;
		}
		var pages = Math.ceil(counts/pagesize);
		var nextPage = currentPage +1;//next page load
		$.ajax({
			beforeSend:function (XMLHttpRequest) {
				// $('#viewAjax'+nextPage).hide();
				$('#loading').show();
			},
			complete:function (XMLHttpRequest, textStatus) {
				$('#loading').hide();
				// $('#viewAjax'+nextPage).show();
			},
			dataType:"html",
			success:function (data, textStatus) {
				$('#viewAjax').before(data);
				currentPage = currentPage+1;
				if(currentPage >= pages){
					$('#loadMore').hide();
				}
			},

			url:"\/Top?page="+nextPage});
		return false;
	}
</SCRIPT>

		<DIV class="container">
			<SECTION class="top-slider slider">
				<!-- Swiper -->
				<DIV class="swiper-container">
					<DIV class="swiper-wrapper">
						<DIV class="swiper-slide cat-id-infomation">
							<A
								onclick="ga('send', 'event', 'Banner', 'CL-top-Header-19', '20171213-191700');"
								href="https://kirarapost.jp/0000099443" target="_blank">
								<DIV class="img">
									<IMG alt="" src="front/BENWIRJW.htm">
								</DIV>
							</A>
							<DIV class="caption">
								<H2 class="title">INFORMATION</H2>
							</DIV>
						</DIV>
						<DIV class="swiper-slide cat-id-food">
							<A
								onclick="ga('send', 'event', 'Banner', 'CL-top-Header-20', '20171230-090000');"
								href="http://localhost/0000100632" target="_self">
								<DIV class="img v_top">
									<IMG alt="" src="front/BENWIRJW.htm">
								</DIV>
							</A>
							<DIV class="caption">
								<H2 class="title">
									<SPAN class="mamagirl-category">mamagirl</SPAN>&nbsp;Food
								</H2>
								<P class="text">
									<SPAN>1月9日よりスタート！Afternoon Teaの苺づくしフェアを調査</SPAN>
								</P>
							</DIV>
						</DIV>
					</DIV>
					<!-- Add Pagination -->
					<DIV class="swiper-pagination"></DIV>
					<!-- Add Arrows -->
					<DIV class="swiper-button-next"></DIV>
					<DIV class="swiper-button-prev"></DIV>
				</DIV>
			</SECTION>
			<SECTION class="main-content">
				<UL class="prod-list talk-list" id="prod-list">
					<LI class="product cat-id-fashion   "><A
						href="http://localhost/0000101748">
							<H3 class="cat-name">Fashion</H3>
							<DIV class="img">
								<IMG src="${photosModel.pathFileName}">
							</DIV>
							<DIV class="content">
								<P class="text">hoeg#P-1 hogehoge</P>
							</DIV>
					</A>
						<UL class="entry-meta">
							<LI class="entry-author"><A
								href="http://localhost/user/tesssss">
									<DIV class="author-img">
										<I class="rank-icon "></I> <IMG src="img/next.png">
									</DIV>
									<SPAN>tesssss</SPAN>
							</A></LI>
							<LI class="entry-likes"><I class="icon-tello icon-heart"></I><SPAN>0</SPAN></LI>
						</UL></LI>
						<LI class="product cat-id-fashion   "><A
						href="http://localhost/0000101748">
							<H3 class="cat-name">Fashion</H3>
							<DIV class="img">
								<IMG src="${photosModel.pathFileName}">
							</DIV>
							<DIV class="content">
								<P class="text">hoeg#P-1 hogehoge</P>
							</DIV>
					</A>
						<UL class="entry-meta">
							<LI class="entry-author"><A
								href="http://localhost/user/tesssss">
									<DIV class="author-img">
										<I class="rank-icon "></I> <IMG src="img/next.png">
									</DIV>
									<SPAN>tesssssd</SPAN>
							</A></LI>
							<LI class="entry-likes"><I class="icon-tello icon-heart"></I><SPAN>0</SPAN></LI>
						</UL></LI>
					<DIV id="viewAjax" style="display: none;"></DIV>
				</UL>
				<BUTTON id="loadMore" onclick="loadMore();">
					View more<I class="icon-tello icon-down-circle"></I>
				</BUTTON>
				<DIV id="loading"
					style="padding: 4px; width: 100px; color: black; display: none; background-color: rgb(250, 209, 99);">
					<STRONG>Loading...</STRONG>
				</DIV>
				<SECTION class="ad-slider">
					<!-- Swiper -->
					<DIV class="ad-swiper">
						<DIV class="swiper-wrapper">
							<DIV class="swiper-slide">
								<DIV class="img">
									<A
										onclick="ga('send', 'event', 'Banner', 'CL-Slider-07', '20171101-110000');"
										href="" target="_self"><IMG
										src="front/BENWIRJW.htm"></A>
								</DIV>
							</DIV>
							<!-- Add Arrows -->
						</DIV>
						<DIV class="swiper-button-next swiper-button-white"></DIV>
						<DIV class="swiper-button-prev swiper-button-white"></DIV>
					</DIV>
				</SECTION>
			</SECTION>
		</DIV>
		</main>
		<FOOTER id="footer">
			<DIV class="footer-inner">
				<DIV class="container">
					<DIV class="appStore only-sp">
						<IMG alt="" src="front/footer-img02.png">

						<DIV class="content">
							<P>
								
							</P>
							
						</DIV>
					</DIV>
					<DIV class="cats-list only-sp">						
						
					</DIV>
											
					
					
				</DIV>
			</DIV>
		</FOOTER>
	</DIV>
	<DIV class="float-menu-sp only-sp">		
	</DIV>
	<DIV tabindex="-1" class="modal fade" id="snsModal">
		<DIV class="modal-dialog">
			<DIV class="modal-wrapper">				
				
			</DIV>
		</DIV>
	</DIV>
	<DIV tabindex="-2" class="modal fade" id="snsBlockModal">
		<DIV class="modal-dialog">
			<DIV class="modal-wrapper">
				<DIV class="modal-content">					
				</DIV>
				<DIV class="modal-bottom">					
				</DIV>
			</DIV>
		</DIV>
	</DIV>
</BODY>
</HTML>
