
	<div class="admin-form">

		<h2>Add a portfolio entry</h2>

		<input placeholder="Image URL" type="text" ng-model="article.img" value="" />
		<input placeholder="Article title" type="text" ng-model="article.title" value="" />
		<textarea placeholder="Article description" class="desc-box" type="text" ng-model="article.desc" value="" ></textarea>

		<button id="admin_submit_button" ng-click="setData()">Save</button>

	</div><!-- /.admin-form-->


	<footer>
		<p>&copy;2014 My Pigeon Portfolio llc</p>
	</footer>