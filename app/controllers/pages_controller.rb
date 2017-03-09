class PagesController < ApplicationController
  def index
    render json: {hello:"hello"}
  end
end
