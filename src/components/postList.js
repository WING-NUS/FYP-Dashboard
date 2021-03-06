import React from 'react';
import PostItem from './postItem';
import moment from 'moment';

//This component is a helper to render the list of Course Threads.
const PostList = (props) => {
	console.log(props);
	// This is to avartar each user id
	props.posts.forEach((post) => {
			switch(post.user%10){
				case 0:
					post.user = "Sue Blumenberg";
					break;
				case 1:
					post.user = "Harcharan Singh Mittu";
					break;
				case 2:
					post.user = "Geoff Crow";
					break;
				case 3:
					post.user = "Shivam Chauhan";
					break;
				case 4:
					post.user = "Matthew Chao";
					break;
				case 5:
					post.user = "Trupti Awati";
					break;
				case 6:
					post.user = "Mihaela Mack";
					break;
				case 7:
					post.user = "Roland Ashley Fernandes";
					break;
				case 8:
					post.user = "Joseph Carrigan";
					break;
				case 9:
					post.user = "Todd Sprentall";
					break;
			}
	});
	props.posts.forEach((post) => {
		post.post_time = moment(post.post_time, "x").format("DD MMM YYYY hh:mm a");
	});
	const posts = props.posts.map(post => {
		return(
			<div key={post.id} className = "threadListItem">
				<PostItem post={post} postPageNum={props.postPageNum}/>
			</div>
		);
	});
	return (
		<div>
			{posts}
		</div>
		);
}

export default PostList;
