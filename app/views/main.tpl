


	<div class="wrapper">

		<div class="fold">
			<h1 class="landing-title" ><a href="#/admin">{{user.title}}<span class="red">{{user.titleWhite}}</span></a></h1>

			<span class="down-arrow icon-arrow-down"></span>
		</div><!-- /.fold -->

		<!-- <article ng-repeat="item in remoteData.gallery">
			<h2>{{item.title}}</h2>
			<p>item.imgUrl</p>
		</article> -->

		<div class="articles">


				<article ng-repeat="($id, article) in articles">
					<a href="#/detail/{{$id}}">
						<div class="thumb-container">
							<img ng-src="{{article.img}}"/>
						</div><!-- /.thumb-container -->

							<h2>{{article.title}}</h2>
					</a>
				</article>


		</div><!-- -/.articles -->
	</div><!-- /.wrapper-->


	<footer>
		<p>&copy;2014 My Pigeon Portfolio llc</p>
	</footer>

