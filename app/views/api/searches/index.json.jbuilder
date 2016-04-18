json.meta do
	json.total_pages @search_results.total_pages
	json.query params[:query]
	json.page @search_results.current_page
end

json.search_results do
	json.array! @search_results.map(&:searchable) do |board|
			json.extract! board, :id, :title
	end
end
