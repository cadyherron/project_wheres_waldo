class PhotosController < ApplicationController


  def index
    @photos = Photo.all

  end


  def show
    # @photo = Photo.find(params[:id])
    @characters = Character.all  
    @tags = Tag.where(photo_id: 1)  

    respond_to do |format|
      format.html

      format.json

    end
  end


end
