


	<div class="wrapper">

		<div class="fold">
			<!-- firebase auth & login state links-->
			<a ng-hide="loginObject.user" ng-click="loginObject.$login('github')">Login with github</a>

			<a ng-show="loginObject.user" ng-click="loginObject.$logout()">Logout {{loginObject.user.username}}</a>

			<h1 class="landing-title" ><a href="#/admin">{{user.title}}<span class="red">{{user.titleWhite}}</span></a></h1>

			<span class="down-arrow icon-arrow-down"></span>
		</div><!-- /.fold -->


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

