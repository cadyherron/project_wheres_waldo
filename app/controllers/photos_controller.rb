class PhotosController < ApplicationController


  def index
    @photos = Photo.all

  end


  def show
    # @photo = Photo.find(params[:id])
    @characters = Character.all  
    @tags = Tag.where(photo_id: 1)  
  end


end
