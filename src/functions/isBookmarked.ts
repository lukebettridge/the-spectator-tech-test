import { Article } from "../common/types";

const isBookmarked = (bookmarks: Article[]) => {
	return (article: Article) => {
		bookmarks = bookmarks || [];
		try {
			const bookmarkExists = !!bookmarks.find(
				(bookmark: Article) => bookmark.url === article.url
			);
			return bookmarkExists;
		} catch (err) {
			console.log(err);
		}
	};
};

export default isBookmarked;
