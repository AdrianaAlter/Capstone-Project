class ErrorsController < ApplicationController
  def not_found
    debugger
    respond_to do |format|
      format.html { render status: 404 }
    end
  rescue ActionController::UnknownFormat
    render status: 404, text: "nope"
  end
end
