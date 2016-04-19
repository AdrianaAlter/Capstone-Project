json.meta do
	json.total_pages @search_results.total_pages
	json.query params[:query]
	json.page @search_results.current_page
end

json.search_results do
	json.array! @search_results.map(&:searchable) do |result|
		if result.class == Board
			json.extract! result, :id, :title
		elsif result.class == User
			json.extract! result, :id, :user_name
		end
	end
end
